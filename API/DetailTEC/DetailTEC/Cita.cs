namespace DetailTEC
{
    public class Cita
    {
        public int Id { get; set; }
        public string Cliente { get; set; } = string.Empty;
        public string Placa { get; set; } = string.Empty;
        public string Sucursal { get; set; } = string.Empty;

        public string Tipodelavado { get; set; } = string.Empty;
    }
}
