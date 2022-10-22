using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Direccion
    {
        public string Dprovincia { get; set; } = null!;
        public string Dcanton { get; set; } = null!;
        public string Ddistrito { get; set; } = null!;
        public int? DcedulaJuridica { get; set; }

        public virtual Proveedor? DcedulaJuridicaNavigation { get; set; }
    }
}
