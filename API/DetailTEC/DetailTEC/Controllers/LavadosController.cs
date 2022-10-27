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
    public class LavadosController : ControllerBase
    {
        private readonly DetailTECdbContext _context;

        public LavadosController(DetailTECdbContext context)
        {
            _context = context;
        }

        // GET: api/Lavados
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lavado>>> GetLavados()
        {
            return await _context.Lavados.ToListAsync();
        }

        // GET: api/Lavados/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lavado>> GetLavado(string id)
        {
            var lavado = await _context.Lavados.FindAsync(id);

            if (lavado == null)
            {
                return NotFound();
            }

            return lavado;
        }

        // PUT: api/Lavados/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutLavado(Lavado lavado)
        {

            _context.Entry(lavado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LavadoExists(lavado.LtipoLavado))
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

        // POST: api/Lavados
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Lavado>> PostLavado(Lavado lavado)
        {
            _context.Lavados.Add(lavado);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LavadoExists(lavado.LtipoLavado))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetLavado", new { id = lavado.LtipoLavado }, lavado);
        }

        // DELETE: api/Lavados/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLavado(string id)
        {
            var lavado = await _context.Lavados.FindAsync(id);
            if (lavado == null)
            {
                return NotFound();
            }

            _context.Lavados.Remove(lavado);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LavadoExists(string id)
        {
            return _context.Lavados.Any(e => e.LtipoLavado == id);
        }
    }
}
