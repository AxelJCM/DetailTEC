namespace DetailTEC
{
    public class Trabajador
    {
        public string Nombre { get; set; } = string.Empty;
        public string Apellidos { get; set; } = string.Empty;

        public int Cedula { get; set; }

        public DateTime FirstDate { get; set; }

        public int BirthDate { get; set; }

        public int Edad { get; set; }

        public string Password { get; set; } = string.Empty;

        public string Rol { get; set; } = string.Empty;

        public string Tipodepago { get; set; } = string.Empty;

    }
}
