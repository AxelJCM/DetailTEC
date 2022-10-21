using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Cita = new HashSet<Citum>();
            Productos = new HashSet<Producto>();
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

        public virtual ICollection<Citum> Cita { get; set; }
        public virtual ICollection<Producto> Productos { get; set; }
        public virtual ICollection<Telefono> Telefonos { get; set; }
    }
}
