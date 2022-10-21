using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Trabajador
    {
        public string? Tnombre { get; set; }
        public string? Tapellidos { get; set; }
        public int Tcedula { get; set; }
        public int? Tedad { get; set; }
        public DateTime? TfechaIngreso { get; set; }
        public DateTime? TfechaNac { get; set; }
        public string? Tpassword { get; set; }
        public string? Tpago { get; set; }
        public string? Trol { get; set; }
        public string? Tsnombre { get; set; }

        public virtual Sucursal? TsnombreNavigation { get; set; }
    }
}
