using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class SucursalTrabajador
    {
        public int? Stcedula { get; set; }
        public string? Stsnombre { get; set; }
        public DateTime? FechaInicio { get; set; }

        public virtual Trabajador? StcedulaNavigation { get; set; }
        public virtual Sucursal? StsnombreNavigation { get; set; }
    }
}
