using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class TrabajadorCitum
    {
        public string? Tcplaca { get; set; }
        public int? Tccedula { get; set; }

        public virtual Trabajador? TccedulaNavigation { get; set; }
        public virtual Citum? TcplacaNavigation { get; set; }
    }
}
