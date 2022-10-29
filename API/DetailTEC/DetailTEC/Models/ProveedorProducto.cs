using System;
using System.Collections.Generic;

namespace DetailTEC.Models
{
    public partial class ProveedorProducto
    {
        public string Ppnombre { get; set; } = null!;
        public int? PpcedulaJuridica { get; set; }
        public string Psnombre { get; set; } = null!;
        public string Ppmarca { get; set; } = null!;
        public int? Ppccedula { get; set; }
        public string? Ppcorreo { get; set; }
        public string? Ppcontacto { get; set; }
        public string? Ppprovincia { get; set; }
        public string? Ppcanton { get; set; }
        public string? Ppdistrito { get; set; }

        public virtual Producto Pp { get; set; } = null!;
        public virtual Proveedor? PpcedulaJuridicaNavigation { get; set; }
        public virtual Sucursal PsnombreNavigation { get; set; } = null!;
    }
}
