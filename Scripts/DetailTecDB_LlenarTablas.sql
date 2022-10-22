use DetailTECdb;

INSERT INTO Cliente (CNombre,CCedula,CCorreo,CUsuario,CPassword,CProvincia,CCanton,CDistrito) VALUES ('Axel Cordero',901220972,'axeljcm@gmail.com','AxelJCM','1234','San Jose','Tarrazu','San Marcos')

INSERT INTO Cita (CTipoLavado,CCliente,CPlaca,CCCedula,CSucursal) VALUES ('Rapido','Axel Cordero','1234AXEL','901220972','San Marcos')

INSERT INTO Sucursal (SNombre,STelefono,SGerente,SFechaIn,SFechaAp,SProvincia,SCanton,SDistrito) VALUES ('San Marcos', 64839332, 'Brandon Martinez', 0, 0, 'Cartago','Norte','Oreamuno')


