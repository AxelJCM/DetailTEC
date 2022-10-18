package com.example.detailtec.Funciones

import RestAPIService
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.detailtec.Funciones.Facturacion
import com.example.detailtec.DB.Cuenta
import com.example.detailtec.R
import com.example.detailtec.Funciones.RegistroCitas
import kotlinx.android.synthetic.main.menu.*

class Menu : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.menu)
        val detalles: TextView = findViewById(R.id.numero_cuenta) as TextView
        //val API = RestAPIService()
        //API.getAccount(detalles)

    ///////////////API////////////////
    //Funcion encargada de solicitar GET del API mediante un boton en la pantalla
    //btnsucursal.setOnClickListener {
    //    startActivity(Intent(this, ::class.java))
    //}
    //Pantalla transferencia
    btnfacturas.setOnClickListener {
        startActivity(
            Intent(this, Facturacion::class.java)
        )
    }
    //Pantalla Registro Citas
    btncitas.setOnClickListener {
        startActivity(
            Intent(this, RegistroCitas::class.java)
        )
    }
        btngestion.setOnClickListener {
            val API = RestAPIService()
            API.getAccount(detalles)
        }
}

/** Funcion encarcada de mostrar detalles de la cuenta del GET en pantalla
 *@param datos informacion del API
 * @param detalles pantalla para ver los detalles
 */
fun verCuenta(datos: List<Cuenta>, detalles: TextView) {
    for (c in datos!!) {
        detalles.text = "Numero de cuenta: " + "${c.numero_cuenta}" +
                "\n Descripcion: ${c.descripcion}" +
                "\n Moneda: ${c.moneda}" +
                "\n Tipo de cuenta: ${c.tipo_cuenta} "
    }
}
}

