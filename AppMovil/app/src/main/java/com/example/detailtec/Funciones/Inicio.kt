package com.example.detailtec.Funciones

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity
import com.example.detailtec.Funciones.Login
import com.example.detailtec.R
//import com.google.gson.Gson
import java.io.IOException
import java.io.FileWriter


@Suppress("DEPRECATION")
class Inicio: AppCompatActivity() {

    lateinit var  handler: Handler

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.inicio)
        handler = Handler()
        handler.postDelayed({

            val intent = Intent(this , Login::class.java)
            startActivity(intent)
            finish()
        }, 3000)

        //val gson = Gson()

        //val json = loadData("basededatos.json")

        //WriteToFile("xdlmao")

        //val usuario = gson.fromJson(json, Usuario::class.java)

        //Log.d("REEEs",usuario.contrasena)
    }
        //Funcion de cargar archivo json
    /***
     * Funcion para cargar base de datos en archivo .JSON
     */
        fun loadData ( inFile : String ) : String {
            var tContents = ""
            try {
                val stream = assets.open(inFile)
                val size = stream.available()
                val buffer = ByteArray(size)
                stream.read(buffer)
                stream.close()
                tContents = String(buffer)
            } catch (e: IOException) {
                // Handle exceptions here
            }
            return tContents
        }

    /***
     * Intento de funcion para escribir en archivo.JSON
     */
    fun WriteToFile(str:String){
        try{
            var fo = FileWriter("test.txt")
            fo.write(str)
            fo.close()
        } catch(ex:Exception) {
            print(ex.message)
        }
    }
}


