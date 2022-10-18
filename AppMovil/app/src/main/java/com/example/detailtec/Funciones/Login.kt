package com.example.detailtec.Funciones

import android.content.Intent
import android.os.Bundle
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.detailtec.Funciones.Menu
import com.example.detailtec.R
import kotlinx.android.synthetic.main.login.*


class Login : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.login)

        //Variables para recibir los datos de entrada de usuario y contraseña
        val usuario_input = findViewById<EditText>(R.id.inputusuario) as EditText
        val contrasena_input = findViewById<EditText>(R.id.inputcontrasena) as EditText

        val usuario_recibido = intent
        val contrasena_recibida = intent
        var usuario_registrado = usuario_recibido.getStringArrayListExtra("Usuarios")
        var contrasena_registrada = contrasena_recibida.getStringArrayListExtra("Contrasena")

    //Botón de acceso a la ventana de Administrar Carrito
        btnlog.setOnClickListener {
            val usuario = usuario_input.text.toString()
            val contrasena = contrasena_input.text.toString()


            //////////////////////   VALIDACIONES ///////////////////////////
            // IMPORTANTE, SI EL USUARIO NO SE HA REGISTRADO E INTENTA LOGUEAR, LA APLICACION SE CIERRA AUTOMATICAMENTEA
            // usuario_registrado.contains(usuario) || !contrasena_registrada.contains(contrasena)
            if (usuario_registrado != null) {
                if (contrasena_registrada != null) {
                    if (usuario.isNullOrEmpty() || contrasena.isNullOrEmpty() || !usuario_registrado.contains(usuario) || !contrasena_registrada.contains(contrasena)){
                        //Se despliega un mensaje de alerta solicitando datos válidos para el ingreso
                        Toast.makeText(this, "Favor ingresar datos válidos", Toast.LENGTH_LONG).show()
                    } else{
                        startActivity(Intent(this, Menu::class.java))
                    }
                }
            }
        }

    //Botón de acceso a la ventana de Registro
    btnreg.setOnClickListener {
        startActivity(Intent(this, RegistroUsuario::class.java))
    }}}


    //fun loadData(inFile: String): String {
    //    var tContents = ""
     //   try {
     //       val stream = assets.open(inFile)
     //       val size = stream.available()
     //       val buffer = ByteArray(size)
     //       stream.read(buffer)
      //      stream.close()
      //      tContents = String(buffer)
     //   } catch (e: IOException) {
     //       // Handle exceptions here
     //   }
     //   return tContents


    //fun writeData(input: String) {
    //    val path = "AppMovil/app/src/main/assets/bd.json"
    //        try {
    //            PrintWriter(FileWriter(path)).use {
    //                val gson = Gson()
    //               val jsonString = gson.toJson(input)
    //               it.write(jsonString)
    //              val msg = "Upload Completed"
    //              Log.d("Upload",msg)
    //           }
    //      }
    //      catch (e: Exception) {
    //         e.printStackTrace()}

    //fun WriteToFile(str:String){
    //    try{
    //       var fo = FileWriter("test.txt")
    //        fo.write(str)
    //        fo.close()
    //   } catch(ex:Exception) {
    //       print(ex.message)
    //   }
    // }

    //fun WriteToFile(message: String) {
    //    FileWriter("assets/text.txt").use { writer ->
    //       try {
    //           writer.write(message)
    //       }
    //       catch (ex: Exception) {
    //          ex.printStackTrace()
    //      }
    //   }
    //}






