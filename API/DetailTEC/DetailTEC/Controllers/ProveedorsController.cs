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
    public class ProveedorsController : ControllerBase
    {
        private readonly DetailTECdbContext _context;

        public ProveedorsController(DetailTECdbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// GET: api/Proveedors
        /// </summary>
        /// <returns>datos de proveedor</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Proveedor>>> GetProveedors()
        {
            return await _context.Proveedors.ToListAsync();
        }

        /// <summary>
        /// GET: api/Proveedors/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>datos de proveedor especifico</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Proveedor>> GetProveedor(int id)
        {
            var proveedor = await _context.Proveedors.FindAsync(id);

            if (proveedor == null)
            {
                return NotFound();
            }

            return proveedor;
        }

        /// <summary>
        /// PUT: api/Proveedors/5
        /// </summary>
        /// <param name="proveedor"></param>
        /// <returns> Cambia datos de proveedor</returns>
        [HttpPut]
        public async Task<IActionResult> PutProveedor(Proveedor proveedor)
        {
            
            _context.Entry(proveedor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProveedorExists(proveedor.PcedulaJuridica))
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
        /// POST: api/Proveedors
        /// </summary>
        /// <param name="proveedor"></param>
        /// <returns>Crea proveedor</returns>
        [HttpPost]
        public async Task<ActionResult<Proveedor>> PostProveedor(Proveedor proveedor)
        {
            _context.Proveedors.Add(proveedor);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProveedorExists(proveedor.PcedulaJuridica))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProveedor", new { id = proveedor.PcedulaJuridica }, proveedor);
        }

        /// <summary>
        /// DELETE: api/Proveedors/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Borra datos de proveedor</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProveedor(int id)
        {
            var proveedor = await _context.Proveedors.FindAsync(id);
            if (proveedor == null)
            {
                return NotFound();
            }

            _context.Proveedors.Remove(proveedor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProveedorExists(int id)
        {
            return _context.Proveedors.Any(e => e.PcedulaJuridica == id);
        }
    }
}
