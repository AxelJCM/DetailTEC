using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DetailTEC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private static List<Cliente> clientes = new List<Cliente>
            {
                 new Cliente {
                    Id = 1,
                    email = "axel@gmail.com",
                    FirstName = "Axel",
                    LastName = "Cordero",
                    password = "1234"},
                 new Cliente {
                    Id = 2,
                    email = "pablo@gmail.com",
                    FirstName = "Pablo",
                    LastName = "Naranjo",
                    password = "naranja"}
            };
        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> Get()
        {
            return Ok(clientes);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> Get(int id)
        {
            var cliente = clientes.Find(h => h.Id == id);
            if (cliente == null)
                return BadRequest("Cliente no encontrado");
            return Ok(cliente);
        }
        [HttpPost]
        public async Task<ActionResult<List<Cliente>>> AddCliente(Cliente cliente)
        {
            clientes.Add(cliente);
            return Ok(clientes);
        }
        [HttpPut]
        public async Task<ActionResult<List<Cliente>>> UpdateCliente(Cliente request)
        {
            var cliente = clientes.Find(h => h.Id == request.Id);
            if (cliente == null)
                return BadRequest("Cliente no encontrado");

            cliente.FirstName = request.FirstName;
            cliente.LastName = request.LastName;
            cliente.email = request.email;
            cliente.password = request.password;
            return Ok(clientes);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<Cliente>> Delete(int id)
        {
            var cliente = clientes.Find(h => h.Id == id);
            if (cliente == null)
                return BadRequest("Cliente no encontrado");

            clientes.Remove(cliente);
            return Ok(clientes);
        }
    }
}
