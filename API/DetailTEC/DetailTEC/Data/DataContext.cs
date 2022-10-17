using Microsoft.EntityFrameworkCore;
using DetailTEC;

namespace DetailTEC.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<DetailTEC.Cita> Cita { get; set; }
    }
}
