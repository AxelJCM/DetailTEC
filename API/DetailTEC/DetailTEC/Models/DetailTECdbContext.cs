using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DetailTEC.Models
{
    public partial class DetailTECdbContext : DbContext
    {
        public DetailTECdbContext()
        {
        }

        public DetailTECdbContext(DbContextOptions<DetailTECdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Auth> Auths { get; set; } = null!;
        public virtual DbSet<CitaLavado> CitaLavados { get; set; } = null!;
        public virtual DbSet<Cita> Cita { get; set; } = null!;
        public virtual DbSet<Cliente> Clientes { get; set; } = null!;
        public virtual DbSet<Direccion> Direccions { get; set; } = null!;
        public virtual DbSet<Lavado> Lavados { get; set; } = null!;
        public virtual DbSet<Producto> Productos { get; set; } = null!;
        public virtual DbSet<Proveedor> Proveedors { get; set; } = null!;
        public virtual DbSet<ProveedorProducto> ProveedorProductos { get; set; } = null!;
        public virtual DbSet<Sucursal> Sucursals { get; set; } = null!;
        public virtual DbSet<SucursalTrabajador> SucursalTrabajadors { get; set; } = null!;
        public virtual DbSet<Telefono> Telefonos { get; set; } = null!;
        public virtual DbSet<Trabajador> Trabajadors { get; set; } = null!;
        public virtual DbSet<TrabajadorCita> TrabajadorCita { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=DetailTECdb;Trusted_Connection=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Auth>(entity =>
            {
                entity.HasKey(e => new { e.Usuario, e.Password })
                    .HasName("PK__Auth__BB5A7547D166DCE7");

                entity.ToTable("Auth");

                entity.Property(e => e.Usuario)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CitaLavado>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Cita_Lavado");

                entity.Property(e => e.Clplaca)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("CLPlaca");

                entity.Property(e => e.CltipoLavado)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("CLTipoLavado");

                entity.HasOne(d => d.ClplacaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Clplaca)
                    .HasConstraintName("CL_Cita_FK");

                entity.HasOne(d => d.CltipoLavadoNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.CltipoLavado)
                    .HasConstraintName("CL_Lavado_FK");
            });

            modelBuilder.Entity<Cita>(entity =>
            {
                entity.HasKey(e => e.Cplaca)
                    .HasName("PK__Cita__00FC8BF1FDD3B808");

                entity.Property(e => e.Cplaca)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("CPlaca");

                entity.Property(e => e.Cccedula).HasColumnName("CCCedula");

                entity.Property(e => e.Ccliente)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("CCliente");

                entity.Property(e => e.Csucursal)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("CSucursal");

                entity.Property(e => e.CtipoLavado)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("CTipoLavado");

                entity.HasOne(d => d.CccedulaNavigation)
                    .WithMany(p => p.Cita)
                    .HasForeignKey(d => d.Cccedula)
                    .HasConstraintName("Cita_Cliente_FK");
            });

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.Ccedula)
                    .HasName("PK__Cliente__02E5F6F42604751E");

                entity.ToTable("Cliente");

                entity.Property(e => e.Ccedula)
                    .ValueGeneratedNever()
                    .HasColumnName("CCedula");

                entity.Property(e => e.Ccanton)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("CCanton");

                entity.Property(e => e.Ccorreo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CCorreo");

                entity.Property(e => e.Cdistrito)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("CDistrito");

                entity.Property(e => e.Cnombre)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("CNombre");

                entity.Property(e => e.Cpassword)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("CPassword");

                entity.Property(e => e.Cprovincia)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("CProvincia");

                entity.Property(e => e.Cusuario)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CUsuario");
            });

            modelBuilder.Entity<Direccion>(entity =>
            {
                entity.HasKey(e => new { e.Dprovincia, e.Dcanton, e.Ddistrito })
                    .HasName("PK__Direccio__38F2EE3EDE9A93BF");

                entity.ToTable("Direccion");

                entity.Property(e => e.Dprovincia)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("DProvincia");

                entity.Property(e => e.Dcanton)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("DCanton");

                entity.Property(e => e.Ddistrito)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("DDistrito");

                entity.Property(e => e.DcedulaJuridica).HasColumnName("DCedulaJuridica");

                entity.HasOne(d => d.DcedulaJuridicaNavigation)
                    .WithMany(p => p.Direccions)
                    .HasForeignKey(d => d.DcedulaJuridica)
                    .HasConstraintName("Direccion_Sucursal_FK");
            });

            modelBuilder.Entity<Lavado>(entity =>
            {
                entity.HasKey(e => e.LtipoLavado)
                    .HasName("PK__Lavado__9B4C8C9CE06164A9");

                entity.ToTable("Lavado");

                entity.Property(e => e.LtipoLavado)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("LTipoLavado");

                entity.Property(e => e.Lcosto).HasColumnName("LCosto");

                entity.Property(e => e.Lduracion).HasColumnName("LDuracion");

                entity.Property(e => e.Lpersonal)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("LPersonal");

                entity.Property(e => e.Lprecio).HasColumnName("LPrecio");

                entity.Property(e => e.Lproductos)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("LProductos");

                entity.Property(e => e.Lpuntuacion).HasColumnName("LPuntuacion");
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasKey(e => new { e.Pmarca, e.Pplaca, e.Pnombre })
                    .HasName("PK__Producto__6D4A15626DD90692");

                entity.ToTable("Producto");

                entity.Property(e => e.Pmarca)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("PMarca");

                entity.Property(e => e.Pplaca)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("PPlaca");

                entity.Property(e => e.Pnombre)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("PNombre");

                entity.Property(e => e.Pcosto).HasColumnName("PCosto");

                entity.Property(e => e.Pproveedores)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PProveedores");

                entity.HasOne(d => d.PplacaNavigation)
                    .WithMany(p => p.Productos)
                    .HasForeignKey(d => d.Pplaca)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Producto_Cita_FK");
            });

            modelBuilder.Entity<Proveedor>(entity =>
            {
                entity.HasKey(e => e.PcedulaJuridica)
                    .HasName("PK__Proveedo__AD8F4338695EC86F");

                entity.ToTable("Proveedor");

                entity.Property(e => e.PcedulaJuridica)
                    .ValueGeneratedNever()
                    .HasColumnName("PCedulaJuridica");

                entity.Property(e => e.Pcontacto)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PContacto");

                entity.Property(e => e.Pcorreo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PCorreo");

                entity.Property(e => e.Pnombre)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("PNombre");
            });

            modelBuilder.Entity<ProveedorProducto>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Proveedor_Producto");

                entity.Property(e => e.Ppcanton)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PPCanton");

                entity.Property(e => e.Ppccedula).HasColumnName("PPCCedula");

                entity.Property(e => e.PpcedulaJuridica).HasColumnName("PPCedulaJuridica");

                entity.Property(e => e.Ppcontacto)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("PPContacto");

                entity.Property(e => e.Ppcorreo)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("PPCorreo");

                entity.Property(e => e.Ppdistrito)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PPDistrito");

                entity.Property(e => e.Ppmarca)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("PPMarca");

                entity.Property(e => e.Ppnombre)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("PPNombre");

                entity.Property(e => e.Ppplaca)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("PPPlaca");

                entity.Property(e => e.Ppprovincia)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PPProvincia");

                entity.Property(e => e.Psnombre)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PSNombre");

                entity.HasOne(d => d.PpcedulaJuridicaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.PpcedulaJuridica)
                    .HasConstraintName("PP_Proveedor_FK");

                entity.HasOne(d => d.PsnombreNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Psnombre)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("PP_Sucursal_FK");

                entity.HasOne(d => d.Pp)
                    .WithMany()
                    .HasForeignKey(d => new { d.Ppmarca, d.Ppplaca, d.Ppnombre })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("PP_Producto_FK");
            });

            modelBuilder.Entity<Sucursal>(entity =>
            {
                entity.HasKey(e => e.Snombre)
                    .HasName("PK__Sucursal__7D947843C5FBA624");

                entity.ToTable("Sucursal");

                entity.Property(e => e.Snombre)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("SNombre");

                entity.Property(e => e.Scanton)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("SCanton");

                entity.Property(e => e.Sdistrito)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("SDistrito");

                entity.Property(e => e.SfechaAp)
                    .HasColumnType("date")
                    .HasColumnName("SFechaAp");

                entity.Property(e => e.SfechaIn)
                    .HasColumnType("date")
                    .HasColumnName("SFechaIn");

                entity.Property(e => e.Sgerente)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("SGerente");

                entity.Property(e => e.Sprovincia)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("SProvincia");

                entity.Property(e => e.Stelefono).HasColumnName("STelefono");
            });

            modelBuilder.Entity<SucursalTrabajador>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Sucursal_Trabajador");

                entity.Property(e => e.FechaInicio).HasColumnType("date");

                entity.Property(e => e.Stcedula).HasColumnName("STCedula");

                entity.Property(e => e.Stsnombre)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("STSNombre");

                entity.HasOne(d => d.StcedulaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Stcedula)
                    .HasConstraintName("ST_Trabajador_FK");

                entity.HasOne(d => d.StsnombreNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Stsnombre)
                    .HasConstraintName("ST_Sucursal_FK");
            });

            modelBuilder.Entity<Telefono>(entity =>
            {
                entity.HasKey(e => e.Telefono1)
                    .HasName("PK__Telefono__4EC50481758270F6");

                entity.ToTable("Telefono");

                entity.Property(e => e.Telefono1)
                    .ValueGeneratedNever()
                    .HasColumnName("Telefono");

                entity.Property(e => e.Tccedula).HasColumnName("TCCedula");

                entity.HasOne(d => d.TccedulaNavigation)
                    .WithMany(p => p.Telefonos)
                    .HasForeignKey(d => d.Tccedula)
                    .HasConstraintName("Telefono_Cliente_FK");
            });

            modelBuilder.Entity<Trabajador>(entity =>
            {
                entity.HasKey(e => e.Tcedula)
                    .HasName("PK__Trabajad__FC581437472DECE9");

                entity.ToTable("Trabajador");

                entity.Property(e => e.Tcedula)
                    .ValueGeneratedNever()
                    .HasColumnName("TCedula");

                entity.Property(e => e.Tapellidos)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("TApellidos");

                entity.Property(e => e.Tedad).HasColumnName("TEdad");

                entity.Property(e => e.TfechaIngreso)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("TFechaIngreso");

                entity.Property(e => e.TfechaNac)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("TFechaNac");

                entity.Property(e => e.Tnombre)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("TNombre");

                entity.Property(e => e.Tpago)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("TPago");

                entity.Property(e => e.Tpassword)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("TPassword");

                entity.Property(e => e.Trol)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("TRol");

                entity.Property(e => e.Tsnombre)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("TSNombre");
            });

            modelBuilder.Entity<TrabajadorCita>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Trabajador_Cita");

                entity.Property(e => e.Tccedula).HasColumnName("TCCedula");

                entity.Property(e => e.Tcplaca)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("TCPlaca");

                entity.HasOne(d => d.TccedulaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Tccedula)
                    .HasConstraintName("TC_Trabajador_FK");

                entity.HasOne(d => d.TcplacaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Tcplaca)
                    .HasConstraintName("TC_Cita_FK");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
