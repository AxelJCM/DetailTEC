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
    public class CitaController : ControllerBase
    {
        private readonly DetailTECdbContext _context;

        public CitaController(DetailTECdbContext context)
        {
            _context = context;
        }

        // GET: api/Cita
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Citum>>> GetCita()
        {
            return await _context.Cita.ToListAsync();
        }

        // GET: api/Cita/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Citum>> GetCitum(string id)
        {
            var citum = await _context.Cita.FindAsync(id);

            if (citum == null)
            {
                return NotFound();
            }

            return citum;
        }

        // PUT: api/Cita/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCitum(string id, Citum citum)
        {
            if (id != citum.Cplaca)
            {
                return BadRequest();
            }

            _context.Entry(citum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CitumExists(id))
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

        // POST: api/Cita
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Citum>> PostCitum(Citum citum)
        {
            _context.Cita.Add(citum);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CitumExists(citum.Cplaca))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCitum", new { id = citum.Cplaca }, citum);
        }

        // DELETE: api/Cita/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCitum(string id)
        {
            var citum = await _context.Cita.FindAsync(id);
            if (citum == null)
            {
                return NotFound();
            }

            _context.Cita.Remove(citum);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CitumExists(string id)
        {
            return _context.Cita.Any(e => e.Cplaca == id);
        }
    }
}
