using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Producto
    {
        public string Pnombre { get; set; } = null!;
        public string Pmarca { get; set; } = null!;
        public string Pplaca { get; set; } = null!;
        public int? Pcosto { get; set; }
        public string? Pproveedores { get; set; }

        public virtual Citum PplacaNavigation { get; set; } = null!;
    }
}
