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

        // GET: api/Trabajadores
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Trabajador>>> GetTrabajadors()
        {
            return await _context.Trabajadors.ToListAsync();
        }

        // GET: api/Trabajadores/5
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

        // PUT: api/Trabajadores/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
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

        // POST: api/Trabajadores
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
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

        // DELETE: api/Trabajadores/5
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
