using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DetailTEC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private static List<Cliente> clientes = new List<Cliente>
        { };

        public DataContext Context { get; }

        public ClienteController(DataContext context)
        {
            Context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> Get()
        {
            return Ok(await Context.Clientes.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> Get(int id)
        {
            var dbCliente = await Context.Clientes.FindAsync(id);
            if (dbCliente == null)
                return BadRequest("Cliente no encontrado");
            return Ok(dbCliente);
        }
        [HttpPost]
        public async Task<ActionResult<List<Cliente>>> AddCliente(Cliente cliente)
        {
            Context.Clientes.Add(cliente);
            await Context.SaveChangesAsync();

            return Ok(await Context.Clientes.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Cliente>>> UpdateCliente(Cliente request)
        {
            var dbCliente = await Context.Clientes.FindAsync(request.Id);
            if (dbCliente == null)
                return BadRequest("Cliente no encontrado");

            dbCliente.FirstName = request.FirstName;
            dbCliente.LastName = request.LastName;
            dbCliente.email = request.email;
            dbCliente.password = request.password;

            await Context.SaveChangesAsync();

            return Ok(await Context.Clientes.ToListAsync());
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<Cliente>> Delete(int id)
        {
            var dbCliente = await Context.Clientes.FindAsync(id);
            if (dbCliente == null)
                return BadRequest("Cliente no encontrado");

            Context.Clientes.Remove(dbCliente);
            await Context.SaveChangesAsync();

            return Ok(await Context.Clientes.ToListAsync());
        }
    }
}
