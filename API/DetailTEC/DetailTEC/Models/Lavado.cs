using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Lavado
    {
        public string LtipoLavado { get; set; } = null!;
        public int? Lcosto { get; set; }
        public int? Lprecio { get; set; }
        public int? Lduracion { get; set; }
        public string? Lproductos { get; set; }
        public string? Lpersonal { get; set; }
        public int? Lpuntuacion { get; set; }
        public string? Lsnombre { get; set; }

        public virtual Sucursal? LsnombreNavigation { get; set; }
    }
}
