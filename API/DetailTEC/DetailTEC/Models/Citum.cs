using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Citum
    {
        public Citum()
        {
            Productos = new HashSet<Producto>();
        }

        public string? CtipoLavado { get; set; }
        public string? Ccliente { get; set; }
        public string Cplaca { get; set; } = null!;
        public int? Cccedula { get; set; }
        public string? Csucursal { get; set; }

        public virtual Cliente? CccedulaNavigation { get; set; }
        public virtual ICollection<Producto> Productos { get; set; }
    }
}
