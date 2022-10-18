import com.example.detailtec.DB.Cuenta
import com.example.detailtec.DB.Usuarios
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Headers
import retrofit2.http.POST
/////////////////////////// API //////////////////////////
// Interface encargada de administrar las funciones y las rutas de los diferentes metodos HTTP
interface RestAPI {
    @Headers("Content-Type: application/json")
    @POST("/clientes")
    fun addUser(@Body userData: Usuarios): Call<Usuarios>

    @GET("/cuentas")
    fun getAccount(): Call<List<Cuenta>>
}