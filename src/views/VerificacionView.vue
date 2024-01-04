<template>
    <div>
        <section class="hero" v-if="estado == 'pending' || estado == 'failure'"  style="margin-top: 8rem !important;">
            <div class="container">
                <!-- Breadcrumbs -->
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                        <router-link to="/">Inicio</router-link>
                    </li>
                </ol>
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                <h1 class="mb-5">Pago incorrecto</h1>
                <div class="row">   
                    <div class="col-xl-8 offset-xl-2"><p class="lead mb-0">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity. </p></div>
                </div>
                </div>
            </div>
        </section>

        <section class="hero" v-if="estado == 'success'"  style="margin-top: 8rem !important;">
            <div class="container" v-if="!msm_error">
                <!-- Breadcrumbs -->
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                        <router-link to="/">Inicio</router-link>
                    </li>
                </ol>
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                <h1 class="mb-5">Validando pago...</h1>
                <div class="row">   
                    <div class="col-xl-8 offset-xl-2">
                        <img src="/assets/media/reloj.gif" style="width: 80px;">
                    </div>
                </div>
                </div>
            </div>
            <div class="container" v-if="msm_error">
                <!-- Breadcrumbs -->
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                        <router-link to="/">Inicio</router-link>
                    </li>
                </ol>
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                <h1 class="mb-5">{{msm_error}}</h1>
                <div class="row">   
                    <div class="col-xl-8 offset-xl-2"><p class="lead mb-0">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity. </p></div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'VerificacionView',
    data() {
        return {
            estado: '',
            payment_id: '',
            pago: {},
            direccion: '',
            msm_error: '',
            venta: {},
            detalles: [],
            total: 0,
            carrito: []
        }
    },
    beforeMount() {
        this.estado = this.$route.params.estado;
        this.payment_id = this.$route.query.payment_id;

        this.init_carrito();

        let user_data = JSON.parse(this.$store.state.user);
   
        this.venta.transaccion = this.payment_id;
        this.venta.envio = this.$envio;
        this.venta.cliente = user_data._id;

        if(this.$route.params.direccion){
            this.direccion = this.$route.params.direccion;
            this.venta.direccion = this.direccion;
        }else{
            this.msm_error = 'No se obtuvo el código de la dirección';
        }

        

    },
    methods: {
        init_carrito(){
            if (this.$store.state.token != null) {
            
            console.log('Paso por obtener Carrito',this.$store.state.token);    

            axios.get(this.$url+'/obtener_carrito_cliente_venta',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            })
            .then((result)=>{
                this.total = 0;
                for(var item of result.data.carrito_general){
                    let subtotal = item.producto.precio * item.cantidad;
                    this.total = this.total+ subtotal;
                    this.detalles.push({
                        subtotal: subtotal,
                        precio_unidad: item.producto.precio,
                        cantidad: item.cantidad,
                        cliente: this.venta.cliente,
                        producto: item.producto._id,
                        variedad: item.variedad._id
                    });
                }
                this.venta.total = this.total;
                this.carrito = result.data.carrito_general;

                console.log('ventas en carrito',this.detalles);
                
                this.init_payment(this.payment_id);
            })
            .catch((error) => {
                if (error.response) {
      // La solicitud se realizó y el servidor respondió con un código de estado diferente de 2xx
      console.log('Respuesta del servidor con un error de estado:', error.response.status);
      console.log('Datos de respuesta del servidor:', error.response.data);
    } else if (error.request) {
      // La solicitud se realizó pero no se recibió ninguna respuesta
      console.error('No se recibió respuesta del servidor:', error.request);
    } else {
      // Algo ocurrió en la configuración de la solicitud que provocó un error
      console.error('Error al realizar la solicitud:', error.message);
    }
    console.error('Error detallado:', error.config);
             });


            }
        },
        validar_venta(payment_id){
            axios.get(this.$url+'/validar_payment_id_venta/'+payment_id,{
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': this.$store.state.token
                }
            }).then((result)=>{
               if(result.data.length >= 1){
                    this.msm_error = 'El pago ya fué asignado a otra venta';
               }else if(result.data.length == 0){
                    this.crear_venta();
               }
            });
        },

        crear_venta(){
            console.log('Paso por crear Carrito');  
            this.venta.detalles = this.detalles;
            console.log('Venta Detalle',this.detalles);
           console.log('Venta Aprobada',this.venta);
            axios.post(this.$url+'/crear_venta_cliente',this.venta,{
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': this.$store.state.token
                }
            }).then((result)=>{
               //console.log(result);
                this.$router.push({name: 'venta',params:{id:result.data._id}});
                this.$socket.emit('send_cart',true);
            });
        },
        init_payment(payment_id){
            axios.get('https://api.mercadopago.com/v1/payments/'+payment_id,{
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer TEST-8650513405417511-122817-fa641bdaeb2c34318220ec53db944770-498284347'
                    }
            }).then((result)=>{
                this.pago = result.data;
                if(this.pago.status == 'approved'){
                   //console.log('aprovado')
                    this.validar_venta(this.payment_id);
                }else{
                    this.msm_error = 'El pago fué aprovado';
                }
            })
        }
    },
}
</script>