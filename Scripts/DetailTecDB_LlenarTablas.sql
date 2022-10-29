use DetailTECdb;

INSERT INTO Cliente (CNombre,CCedula,CCorreo,CUsuario,CPassword,CProvincia,CCanton,CDistrito) VALUES ('Axel Cordero',901220972,'axeljcm@gmail.com','AxelJCM','1234','San Jose','Tarrazu','San Marcos')

INSERT INTO Cita (CTipoLavado,CCliente,CPlaca,CCCedula,CSucursal) VALUES ('Pulido','Axel Cordero','1234AXEL','901220972','San Marcos')

INSERT INTO Sucursal (SNombre,STelefono,SGerente,SFechaIn,SFechaAp,SProvincia,SCanton,SDistrito) VALUES ('San Marcos', 64839332, 'Brandon Martinez', '12-12-2000', '12-12-2000', 'Cartago','Norte','Oreamuno')

INSERT INTO Trabajador (TNombre,TApellidos,TCedula,TEdad,TFechaIngreso,TFechaNac,TPassword,TPago,TRol,TUsuario,TSNombre) VALUES ('Reiner','Urena Vega',123456789,21,'12-09-2002','10-08-2004','4321','123','Ingeniero','Reiner@gmail.com','San Marcos')

INSERT INTO Producto (PNombre,PMarca,PPlaca,PCosto,PProveedores) VALUES ('jabon','suli','1234AXEL',123,'Suli')

INSERT INTO Proveedor (PNombre,PCedulaJuridica,PCorreo,PContacto) VALUES ('Pozuelo',1234,'poz@gmail.com','Pozuelo')

INSERT INTO Lavado (LTipoLavado,LCosto,LPrecio,LDuracion,LProductos,LPersonal,LPuntuacion) VALUES ('LA',5000,3000,5,'Jabon y Shampoo','Reiner y Pablo',100)



INSERT INTO Cliente (CNombre,CCedula,CCorreo,CUsuario,CPassword,CProvincia,CCanton,CDistrito) VALUES ('Gustavo Zamora',207860865,'zamo@gmail.com','Zamo','4321','Alajuela','Alajuela','Sarchi')

INSERT INTO Cita (CTipoLavado,CCliente,CPlaca,CCCedula,CSucursal) VALUES ('Lavado Premium','Gustavo Zamora','1234ZAMO',207860865,'San Marcos')

INSERT INTO Sucursal (SNombre,STelefono,SGerente,SFechaIn,SFechaAp,SProvincia,SCanton,SDistrito) VALUES ('Cartago', 88909032, 'Elena Lopez', '12-12-2000', '12-12-2000', 'Cartago','Norte','Oreamuno')

INSERT INTO Trabajador (TNombre,TApellidos,TCedula,TEdad,TFechaIngreso,TFechaNac,TPassword,TPago,TRol,TUsuario,TSNombre) VALUES ('Pablo','Naranjo Monge',987654321,21,'12-09-2002','10-08-2004','1234','123','Ingeniero','Pablo@gmail.com','Cartago')

INSERT INTO Producto (PNombre,PMarca,PPlaca,PCosto,PProveedores) VALUES ('shampoo','Palmolive','1234ZAMO',5000,'Palmolive')

INSERT INTO Proveedor (PNombre,PCedulaJuridica,PCorreo,PContacto) VALUES ('Nais',4321,'Nais@gmail.com','NaisGerente')

INSERT INTO Lavado (LTipoLavado,LCosto,LPrecio,LDuracion,LProductos,LPersonal,LPuntuacion) VALUES ('LP',3000,6000,6,'Jabon nais','Reiner y Pablo',200)


