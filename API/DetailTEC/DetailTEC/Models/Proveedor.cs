using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Proveedor
    {
        public Proveedor()
        {
            Direccions = new HashSet<Direccion>();
        }

        public string? Pnombre { get; set; }
        public int PcedulaJuridica { get; set; }
        public string? Pcorreo { get; set; }
        public string? Pcontacto { get; set; }

        public virtual ICollection<Direccion> Direccions { get; set; }
    }
}
