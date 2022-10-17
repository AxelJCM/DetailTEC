namespace DetailTEC
{
    public class Sucursal
    {
        public string Nombre { get; set; } = string.Empty;
        public string Ubicacion { get; set; } = string.Empty;

        public int Telefono { get; set; }

        public DateTime Fechadeapertura { get; set; }

        public string Gerente { get; set; } = string.Empty;

        public DateTime GerenteFecha { get; set; }
    }
}
