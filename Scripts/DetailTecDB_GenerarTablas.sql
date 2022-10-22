CREATE TABLE Cliente
	(	
	CNombre VARCHAR(15),
	CCedula INT NOT NULL,
	CCorreo VARCHAR(50),
	CUsuario VARCHAR(50),
	CPassword VARCHAR(30),
	CProvincia VARCHAR(25),
	CCanton VARCHAR(25),
	CDistrito VARCHAR(25)
	);

CREATE TABLE Producto
(	
	PNombre VARCHAR(15) NOT NULL,
	PMarca VARCHAR(15)  NOT NULL,
	PPlaca VARCHAR(15)  NOT NULL,
	PCosto INT,
	PProveedores VARCHAR(20),
	PCedula INT NOT NULL
);

CREATE TABLE Trabajador
(
	TNombre VARCHAR(15),
	TApellidos VARCHAR(50),
	TCedula INT  NOT NULL,
	TEdad INT,
	TFechaIngreso Date,
	TFechaNac Date,
	TPassword VARCHAR(30),
	TPago VARCHAR(20),
	TRol VARCHAR(20),
	TSNombre VARCHAR(20)
	
);

CREATE TABLE Proveedor
(
	PNombre VARCHAR(15),
	PCedulaJuridica INT NOT NULL,
	PCorreo VARCHAR(50),
	PContacto VARCHAR(20)
);

CREATE TABLE Sucursal
(
	SNombre VARCHAR(20) NOT NULL,
	STelefono INT,
	SGerente VARCHAR(30),
	SFechaIn Date,
	SFechaAp Date,
	SProvincia VARCHAR(20),
	SCanton VARCHAR(20),
	SDistrito VARCHAR(20)
);

CREATE TABLE Lavado
(
	LTipoLavado VARCHAR(15) NOT NULL,
	LCosto INT,
	LPrecio INT,
	LDuracion Time,
	LProductos VARCHAR(30),
	LPersonal VARCHAR(30),
	LPuntuacion INT,
	LSNombre VARCHAR(20)
);

CREATE TABLE Cita
(
	CTipoLavado VARCHAR(15),
	CCliente VARCHAR(15),
	CPlaca VARCHAR(15) NOT NULL,
	CCCedula INT,
	CSucursal VARCHAR(20)
); 

CREATE TABLE Direccion
(
	DProvincia VARCHAR(15) NOT NULL,
	DCanton VARCHAR(15) NOT NULL,
	DDistrito VARCHAR(15) NOT NULL,
	DCedulaJuridica INT
);

CREATE TABLE Telefono
(
	Telefono INT NOT NULL,
	TCCedula INT
);

CREATE TABLE Sucursal_Trabajador
(
	STCedula INT,
	STSNombre VARCHAR(20),
	FechaInicio Date
);

CREATE TABLE Trabajador_Cita
(
	TCPlaca VARCHAR(15),
	TCCedula INT
);

CREATE TABLE Cita_Lavado
(
	CLTipoLavado VARCHAR(15),
	CLPlaca VARCHAR(15)
);

CREATE TABLE Proveedor_Producto
(
	PPNombre VARCHAR(15) NOT NULL,
	PPCedulaJuridica INT,
	PSNombre VARCHAR(20) NOT NULL,
	PPMarca VARCHAR(15) NOT NULL,
	PPPlaca VARCHAR(15) NOT NULL,
	PPCCedula INT,
	PPCorreo VARCHAR(30),
	PPContacto VARCHAR(30),
	PPProvincia VARCHAR(20),
	PPCanton VARCHAR(20),
	PPDistrito VARCHAR(20)
);

ALTER TABLE Producto
	ADD PRIMARY KEY (PMarca,PPlaca,PNombre);

ALTER TABLE Cliente
	ADD PRIMARY KEY (CCedula);

ALTER TABLE Trabajador
	ADD PRIMARY KEY (TCedula);

ALTER TABLE Proveedor
	ADD PRIMARY KEY (PCedulaJuridica);

ALTER TABLE Sucursal
	ADD PRIMARY KEY (SNombre);

ALTER TABLE Lavado
	ADD PRIMARY KEY (LTipoLavado);

ALTER TABLE Cita
	ADD PRIMARY KEY (CPlaca);

ALTER TABLE Direccion
	ADD PRIMARY KEY (DProvincia,DCanton,DDistrito);

ALTER TABLE Telefono
	ADD PRIMARY KEY (Telefono);

ALTER TABLE Producto
ADD CONSTRAINT Cliente_Producto_FK FOREIGN KEY (PCedula)
REFERENCES Cliente(CCedula);

ALTER TABLE Proveedor_Producto
ADD CONSTRAINT PP_Proveedor_FK FOREIGN KEY (PPCedulaJuridica)
REFERENCES Proveedor(PCedulaJuridica);

ALTER TABLE Proveedor_Producto
ADD CONSTRAINT PP_Sucursal_FK FOREIGN KEY (PSNombre)
REFERENCES Sucursal(SNombre);

ALTER TABLE Proveedor_Producto
ADD CONSTRAINT PP_Producto_FK FOREIGN KEY (PPMarca,PPPlaca,PPNombre)
REFERENCES Producto(PMarca,PPlaca,PNombre);

ALTER TABLE Proveedor_Producto
ADD CONSTRAINT PP_Cliente_FK FOREIGN KEY (PPCCedula)
REFERENCES Cliente(CCedula);

ALTER TABLE Producto
ADD CONSTRAINT Producto_Cita_FK FOREIGN KEY (PPlaca)
REFERENCES Cita(CPlaca);

ALTER TABLE Trabajador
ADD CONSTRAINT Trabajador_Sucursal_FK FOREIGN KEY (TSNombre)
REFERENCES Sucursal(SNombre);

ALTER TABLE Lavado
ADD CONSTRAINT Lavado_Sucursal_FK FOREIGN KEY (LSNombre)
REFERENCES Sucursal(SNombre);

ALTER TABLE Cita
ADD CONSTRAINT Cita_Cliente_FK FOREIGN KEY (CCCedula)
REFERENCES Cliente(CCedula);

ALTER TABLE Direccion
ADD CONSTRAINT Direccion_Sucursal_FK FOREIGN KEY (DCedulaJuridica)
REFERENCES Proveedor(PCedulaJuridica);

ALTER TABLE Telefono
ADD CONSTRAINT Telefono_Cliente_FK FOREIGN KEY (TCCedula)
REFERENCES Cliente(CCedula);

ALTER TABLE Sucursal_Trabajador
ADD CONSTRAINT ST_Trabajador_FK FOREIGN KEY (STCedula)
REFERENCES Trabajador(TCedula);

ALTER TABLE Sucursal_Trabajador
ADD CONSTRAINT ST_Sucursal_FK FOREIGN KEY (STSNombre)
REFERENCES Sucursal(SNombre);

ALTER TABLE Trabajador_Cita
ADD CONSTRAINT TC_Cita_FK FOREIGN KEY (TCPlaca)
REFERENCES Cita(CPlaca);

ALTER TABLE Trabajador_Cita
ADD CONSTRAINT TC_Trabajador_FK FOREIGN KEY (TCCedula)
REFERENCES Trabajador(TCedula);

ALTER TABLE Cita_Lavado
ADD CONSTRAINT CL_Lavado_FK FOREIGN KEY (CLTipoLavado)
REFERENCES Lavado(LTipoLavado);

ALTER TABLE Cita_Lavado
ADD CONSTRAINT CL_Cita_FK FOREIGN KEY (CLPlaca)
REFERENCES Cita(CPlaca);

