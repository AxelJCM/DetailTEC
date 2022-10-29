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
    public class ProductosController : ControllerBase
    {
        private readonly DetailTECdbContext _context;

        public ProductosController(DetailTECdbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// GET: api/Productos
        /// </summary>
        /// <returns>Datos de producto</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos()
        {
            return await _context.Productos.ToListAsync();
        }

        /// <summary>
        /// GET: api/Productos/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> GetProducto(string id)
        {
            var producto = await _context.Productos.FindAsync(id);

            if (producto == null)
            {
                return NotFound();
            }

            return producto;
        }

        /// <summary>
        /// PUT: api/Productos/5
        /// </summary>
        /// <param name="producto"></param>
        /// <returns>Cambia datos de producto</returns>
        [HttpPut]
        public async Task<IActionResult> PutProducto(Producto producto)
        {

            _context.Entry(producto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductoExists(producto.Pmarca))
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
        /// POST: api/Productos
        /// </summary>
        /// <param name="producto"></param>
        /// <returns>Crea producto</returns>
        
        [HttpPost]
        public async Task<ActionResult<Producto>> PostProducto(Producto producto)
        {
            _context.Productos.Add(producto);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProductoExists(producto.Pmarca))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProducto", new { id = producto.Pmarca }, producto);
        }

        /// <summary>
        /// DELETE: api/Productos/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Borra producto</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProducto(string id)
        {
            var producto = await _context.Productos.FindAsync(id);
            if (producto == null)
            {
                return NotFound();
            }

            _context.Productos.Remove(producto);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /// <summary>
        /// Exitencia de producto
        /// </summary>
        /// <param name="id"></param>
        /// <returns>si o no</returns>
        private bool ProductoExists(string id)
        {
            return _context.Productos.Any(e => e.Pmarca == id);
        }
    }
}
