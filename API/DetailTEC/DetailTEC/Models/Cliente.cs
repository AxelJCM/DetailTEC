using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Cita = new HashSet<Cita>();
            Telefonos = new HashSet<Telefono>();
        }

        public string? Cnombre { get; set; }
        public int Ccedula { get; set; }
        public string? Ccorreo { get; set; }
        public string? Cusuario { get; set; }
        public string? Cpassword { get; set; }
        public string? Cprovincia { get; set; }
        public string? Ccanton { get; set; }
        public string? Cdistrito { get; set; }
        public int? Cpuntos { get; set; }

        public virtual ICollection<Cita> Cita { get; set; }
        public virtual ICollection<Telefono> Telefonos { get; set; }
    }
}
