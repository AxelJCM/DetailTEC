package com.example.detailtec.Funciones

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.Spinner
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.detailtec.Funciones.Facturacion
import com.example.detailtec.R
import kotlinx.android.synthetic.main.registrocitas.*

class RegistroCitas: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.registrocitas)

        //////////////////SPINNERS///////////////////////////////////////////
        val spinservicio = findViewById<Spinner>(R.id.spinnerservicio)

        //val listaserv = listOf("Cambio de Aceite","Alineado","Tramado","Revision 5k","Revision 10k","Revision 20k")

        val listaserv = resources.getStringArray(R.array.servicios)

        val adaptadorserv = ArrayAdapter(this, android.R.layout.simple_spinner_item, listaserv)

        spinservicio.adapter = adaptadorserv

        val spinsucursal = findViewById<Spinner>(R.id.spinnersucursal)

        //val listasuc = listOf("Cartago Centro","Oreamuno de Cartago","Pinares Curridabat","Rio Oro Santa Ana","Ciudad Panama")
        val listasuc = resources.getStringArray(R.array.sucursales)

        val adaptadorsuc = ArrayAdapter(this, android.R.layout.simple_spinner_item, listasuc)

        spinsucursal.adapter = adaptadorsuc

        spinservicio.onItemSelectedListener = object :
            AdapterView.OnItemSelectedListener {
            override fun onItemSelected(
                parent: AdapterView<*>?,
                view: View?,
                position: Int,
                id: Long
            ) {
                //val servicioescogido = spinservicio.selectedItem.toString()
                Toast.makeText(this@RegistroCitas, listaserv[position], Toast.LENGTH_LONG).show()
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {
                TODO(" Not yet implemented ")
            }
        }
        spinsucursal.onItemSelectedListener = object :
            AdapterView.OnItemSelectedListener {
            override fun onItemSelected(
                parent: AdapterView<*>?,
                view: View?,
                position: Int,
                id: Long
            ) {
                //val sucursalescogido = listasuc[position]
                Toast.makeText(this@RegistroCitas, listasuc[position], Toast.LENGTH_LONG).show()
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {
                TODO(" Not yet implemented ")
            }

        }
        btnagendar.setOnClickListener {
            val servicioescogido = spinservicio.selectedItem.toString()
            val sucursalescogido = spinsucursal.selectedItem.toString()
            Log.d("servicio", servicioescogido)
            Log.d("sucursal",sucursalescogido)
            if (servicioescogido.isNullOrEmpty() && sucursalescogido.isNullOrEmpty()){
                Toast.makeText(this, "Favor escoger un servicio y un sucursal", Toast.LENGTH_LONG).show()
        }
            else{
                setServicioSucursal()
            }

        }
    }

    /***
     * Funcion que setea el servicio y sucursal a la factura
     */
        private fun setServicioSucursal() {
            val spinservicio = findViewById<Spinner>(R.id.spinnerservicio)
            val servicioescogido = spinservicio.selectedItem.toString()
            val spinsucursal = findViewById<Spinner>(R.id.spinnersucursal)
            val sucursalescogido = spinsucursal.selectedItem.toString()
            intent.putExtra("servicio", servicioescogido)
            intent.putExtra("sucursal", sucursalescogido)
            val intent = Intent(this@RegistroCitas, Facturacion::class.java)
            startActivity(intent)
        }

}


