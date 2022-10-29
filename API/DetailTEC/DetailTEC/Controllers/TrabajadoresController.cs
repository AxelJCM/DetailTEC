using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DetailTEC.Models;

namespace DetailTEC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrabajadoresController : ControllerBase
    {
        private readonly DetailTECdbContext _context;

        public TrabajadoresController(DetailTECdbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// GET: api/Trabajadores
        /// </summary>
        /// <returns>Datos trabajador</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Trabajador>>> GetTrabajadors()
        {
            return await _context.Trabajadors.ToListAsync();
        }

        /// <summary>
        /// GET: api/Trabajadores/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Datos de trabajador especifico</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Trabajador>> GetTrabajador(int id)
        {
            var trabajador = await _context.Trabajadors.FindAsync(id);

            if (trabajador == null)
            {
                return NotFound();
            }

            return trabajador;
        }

        /// <summary>
        /// PUT: api/Trabajadores/5
        /// </summary>
        /// <param name="trabajador"></param>
        /// <returns>Cambia datos de admin</returns>
        [HttpPut]
        public async Task<IActionResult> PutTrabajador(Trabajador trabajador)
        {
            _context.Entry(trabajador).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrabajadorExists(trabajador.Tcedula))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        /// <summary>
        /// POST: api/Trabajadores
        /// </summary>
        /// <param name="trabajador"></param>
        /// <returns>Crea trabajador</returns>
        [HttpPost]
        public async Task<ActionResult<Trabajador>> PostTrabajador(Trabajador trabajador)
        {
            _context.Trabajadors.Add(trabajador);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TrabajadorExists(trabajador.Tcedula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTrabajador", new { id = trabajador.Tcedula }, trabajador);
        }
        /// <summary>
        /// Verificacion Admin
        /// </summary>
        /// <param name="auth"></param>
        /// <returns>Verificacion de admin</returns>
        [HttpPost]
        [Route("Login/")]
        public async Task<ActionResult<Login>> PostLogin(Auth auth)
        {
            var result = _context.Trabajadors.Any(e => e.Tusuario == auth.Usuario && e.Tpassword == auth.Password);

            var status = new Login { Status = "Ok" };

            var error = new Login { Status = "Error" };

            if (!result)
            {
                return error;
            }

            return Ok(status);

        }

        /// <summary>
        /// DELETE: api/Trabajadores/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Borra trabajador</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrabajador(int id)
        {
            var trabajador = await _context.Trabajadors.FindAsync(id);
            if (trabajador == null)
            {
                return NotFound();
            }

            _context.Trabajadors.Remove(trabajador);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrabajadorExists(int id)
        {
            return _context.Trabajadors.Any(e => e.Tcedula == id);
        }
    }
}
