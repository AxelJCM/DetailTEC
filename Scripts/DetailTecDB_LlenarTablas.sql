use DetailTECdb;

INSERT INTO Cliente (CNombre,CCedula,CCorreo,CUsuario,CPassword,CProvincia,CCanton,CDistrito) VALUES ('Axel Cordero',901220972,'axeljcm@gmail.com','AxelJCM','1234','San Jose','Tarrazu','San Marcos')

INSERT INTO Cita (CTipoLavado,CCliente,CPlaca,CCCedula,CSucursal) VALUES ('Rapido','Axel Cordero','1234AXEL','901220972','San Marcos')

INSERT INTO Sucursal (SNombre,STelefono,SGerente,SFechaIn,SFechaAp,SProvincia,SCanton,SDistrito) VALUES ('San Marcos', 64839332, 'Brandon Martinez', '12-12-2000', '12-12-2000', 'Cartago','Norte','Oreamuno')

INSERT INTO Trabajador (TNombre,TApellidos,TCedula,TEdad,TFechaIngreso,TFechaNac,TPassword,TPago,TRol,TUsuario,TSNombre) VALUES ('Reiner','Urena Vega',123456789,21,'12-09-2002','10-08-2004','1234Axel','123','Ingeniero','Reiner@gmail.com','San Marcos')

INSERT INTO Producto (PNombre,PMarca,PPlaca,PCosto,PProveedores) VALUES ('jabon','suli','1234AXEL',123,'Suli')