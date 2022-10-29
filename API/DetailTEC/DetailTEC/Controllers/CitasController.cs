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
    public class CitasController : ControllerBase
    {
        private readonly DetailTECdbContext _context;

        public CitasController(DetailTECdbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// GET: api/Citas
        /// </summary>
        /// <returns>Todos los datos de Cita</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cita>>> GetCita()
        {
            return await _context.Cita.ToListAsync();
        }

        /// <summary>
        /// GET: api/Citas/5
        /// </summary>
        /// <param  cita="id"></param>
        /// <returns>Retorna una cita especifica</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Cita>> GetCita(string id)
        {
            var cita = await _context.Cita.FindAsync(id);

            if (cita == null)
            {
                return NotFound();
            }

            return cita;
        }

        /// <summary>
        /// PUT: api/Citas/5
        /// </summary>
        /// <param name="cita"></param>
        /// <returns>Cambia datos de una cita especifica</returns>
   
        [HttpPut]
        public async Task<IActionResult> PutCita(Cita cita)
        {

            _context.Entry(cita).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CitaExists(cita.Cplaca))
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
        /// POST: api/Citas
        /// </summary>
        /// <param name="cita"></param>
        /// <returns>Crea una nueva cita</returns>
       
        [HttpPost]
        public async Task<ActionResult<Cita>> PostCita(Cita cita)
        {
            _context.Cita.Add(cita);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CitaExists(cita.Cplaca))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCita", new { id = cita.Cplaca }, cita);
        }

        /// <summary>
        /// DELETE: api/Citas/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Borra una cita especifica</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCita(string id)
        {
            var cita = await _context.Cita.FindAsync(id);
            if (cita == null)
            {
                return NotFound();
            }

            _context.Cita.Remove(cita);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CitaExists(string id)
        {
            return _context.Cita.Any(e => e.Cplaca == id);
        }
    }
}
