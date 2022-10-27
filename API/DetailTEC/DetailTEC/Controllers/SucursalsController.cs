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
    public class SucursalsController : ControllerBase
    {
        private readonly DetailTECdbContext _context;

        public SucursalsController(DetailTECdbContext context)
        {
            _context = context;
        }

        // GET: api/Sucursals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sucursal>>> GetSucursals()
        {
            return await _context.Sucursals.ToListAsync();
        }

        // GET: api/Sucursals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sucursal>> GetSucursal(string id)
        {
            var sucursal = await _context.Sucursals.FindAsync(id);

            if (sucursal == null)
            {
                return NotFound();
            }

            return sucursal;
        }

        // PUT: api/Sucursals/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutSucursal(Sucursal sucursal)
        {
            
            _context.Entry(sucursal).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SucursalExists(sucursal.Snombre))
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

        // POST: api/Sucursals
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sucursal>> PostSucursal(Sucursal sucursal)
        {
            _context.Sucursals.Add(sucursal);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SucursalExists(sucursal.Snombre))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSucursal", new { id = sucursal.Snombre }, sucursal);
        }

        // DELETE: api/Sucursals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSucursal(string id)
        {
            var sucursal = await _context.Sucursals.FindAsync(id);
            if (sucursal == null)
            {
                return NotFound();
            }

            _context.Sucursals.Remove(sucursal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SucursalExists(string id)
        {
            return _context.Sucursals.Any(e => e.Snombre == id);
        }
    }
}
