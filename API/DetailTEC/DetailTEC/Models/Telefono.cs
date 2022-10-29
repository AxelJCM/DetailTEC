using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class Telefono
    {
        public int Telefono1 { get; set; }
        public int? Tccedula { get; set; }

        public virtual Cliente? TccedulaNavigation { get; set; }
    }
}
