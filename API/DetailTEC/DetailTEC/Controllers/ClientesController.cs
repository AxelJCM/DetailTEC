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
    public class ClientesController : ControllerBase
    {
        private readonly DetailTECdbContext _context;

        public ClientesController(DetailTECdbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// GET: api/Clientes
        /// </summary>
        /// <returns>Datos de clientes</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
        {
            return await _context.Clientes.ToListAsync();
        }

        /// <summary>
        /// GET: api/Clientes/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Datos de cliente especifico</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }

            return cliente;
        }

        /// <summary>
        /// PUT: api/Clientes/5
        /// </summary>
        /// <param name="cliente"></param>
        /// <returns>Cambia datos de un cliente</returns>
        [HttpPut]
        public async Task<IActionResult> PutCliente(Cliente cliente)
        {

            _context.Entry(cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(cliente.Ccedula))
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
        /// POST: api/Clientes
        /// </summary>
        /// <param name="cliente"></param>
        /// <returns>Creacion de cliente</returns>
        [HttpPost]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ClienteExists(cliente.Ccedula))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCliente", new { id = cliente.Ccedula }, cliente);
        }
        /// <summary>
        /// Revision de login de cliente
        /// </summary>
        /// <param name="auth"></param>
        /// <returns>Confirmacion de login</returns>
        [HttpPost]
        [Route("Login/")]

        public async Task<ActionResult<Login>> PostLogin(Auth auth)
        {
            var result = _context.Clientes.Any(e => e.Ccorreo == auth.Usuario && e.Cpassword == auth.Password);

            var status = new Login { Status = "Ok" };

            var error = new Login { Status = "Error" };

            if (!result)
            {
                return error;
            }

                return Ok(status);

        }

        /// <summary>
        /// DELETE: api/Clientes/5
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Borra un cliente</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Clientes.Remove(cliente);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        /// <summary>
        /// Revisa si existe un cliente
        /// </summary>
        /// <param name="id"></param>
        /// <returns>existencia de un cliente</returns>
        private bool ClienteExists(int id)
        {
            return _context.Clientes.Any(e => e.Ccedula == id);
        }
    }
}
