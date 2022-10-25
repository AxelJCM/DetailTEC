using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class CitaLavado
    {
        public string? CltipoLavado { get; set; }
        public string? Clplaca { get; set; }

        public virtual Cita? ClplacaNavigation { get; set; }
        public virtual Lavado? CltipoLavadoNavigation { get; set; }
    }
}
