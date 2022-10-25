using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Sucursal
    {
        public Sucursal()
        {
            Lavados = new HashSet<Lavado>();
        }

        public string Snombre { get; set; } = null!;
        public int? Stelefono { get; set; }
        public string? Sgerente { get; set; }
        public DateTime? SfechaIn { get; set; }
        public DateTime? SfechaAp { get; set; }
        public string? Sprovincia { get; set; }
        public string? Scanton { get; set; }
        public string? Sdistrito { get; set; }

        public virtual ICollection<Lavado> Lavados { get; set; }
    }
}
