package com.example.detailtec.Funciones

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.detailtec.R
import kotlin.random.Random

class Facturacion: AppCompatActivity() {

    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.facturacion)

        val comprobante = findViewById<TextView>(R.id.comprobante)

        val randomcomprobante = Random.nextInt(100000,21321313)

        comprobante.text = randomcomprobante.toString()
        val servicio_escogido = intent.getStringExtra("servicio")
        val sucursal_escogido = intent.getStringExtra("sucursal")

        val servicio = findViewById<TextView>(R.id.servicio)

        servicio.text = servicio_escogido.toString()

        val sucursal = findViewById<TextView>(R.id.sucursal)

        Log.d("servicio", servicio_escogido.toString())
        Log.d("sucursal",sucursal_escogido.toString())

        val montoservicio = listOf("5000","10000","6000","5000")

        val monto = findViewById<TextView>(R.id.Monto)

        monto.text = montoservicio[Random.nextInt(0,3)]
    }
}