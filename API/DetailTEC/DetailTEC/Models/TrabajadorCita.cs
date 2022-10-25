using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class TrabajadorCita
    {
        public string? Tcplaca { get; set; }
        public int? Tccedula { get; set; }

        public virtual Trabajador? TccedulaNavigation { get; set; }
        public virtual Cita? TcplacaNavigation { get; set; }
    }
}
