<template>
  <header class="header header-absolute">
    <!-- Top Bar-->
    <div class="top-bar">
      <div class="container-fluid">
        <div class="row d-flex align-items-center">
          <div class="col-sm-7 d-none d-sm-block">
            <ul class="list-inline topbar-text mb-0">
              <li class="list-inline-item pe-3 me-0">
                <img src="/assets/icons/telephone-bl.png" style="width: 16px;">
                020-800-456-747
              </li>
              <li class="list-inline-item px-3 border-start d-none d-lg-inline-block">Envios gratis desde $300</li>
            </ul>
          </div>
          <div class="col-sm-5 d-flex justify-content-end">
            <!-- Language Dropdown-->
            <button v-on:click="click_event()">Click</button>

            <div class="dropdown border-end px-3"><a class="dropdown-toggle topbar-link" id="langsDropdown" href="#"
                data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false"><img
                  class="topbar-flag" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/flag/gb.svg"
                  alt="english">English</a>
              <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated" aria-labelledby="langsDropdown"><a
                  class="dropdown-item text-sm" href="#"><img class="topbar-flag"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/flag/de.svg" alt="german">German</a><a
                  class="dropdown-item text-sm" href="#"> <img class="topbar-flag"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/flag/fr.svg" alt="french">French</a></div>
            </div>
            <!-- Currency Dropdown-->
            <div class="dropdown ps-3 ms-0"><a class="dropdown-toggle topbar-link" id="currencyDropdown" href="#"
                data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false">PEN</a>
              <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated" aria-labelledby="currencyDropdown">
                <a class="dropdown-item text-sm" href="#">
                  EUR
                </a>
                <a class="dropdown-item text-sm" href="#">
                  GBP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Top Bar End-->
    <!-- Navbar-->
    <nav class="navbar navbar-expand-lg navbar-sticky navbar-airy navbar-dark bg-fixed-white navbar-fixed-light"
      style="background: #cb7373 !important;">
      <div class="container-fluid">
        <!-- Navbar Header  -->
        <a class="navbar-brand" style="color:white; font-family: sans-serif; !important" href="index.html">LIVERALIA.PE</a>

        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
          aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
        <!-- Navbar Collapse -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'shop' }">Tienda</router-link>
            </li>
            <!-- Megamenu-->
            <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle " href="#"
                data-bs-toggle="dropdown">Categorias</a>
              <div class="dropdown-menu dropdown-menu-animated megamenu py-lg-0">
                <div class="row">
                  <div class="col-lg-9">
                    <div class="row p-3 pe-lg-0 ps-lg-5 pt-lg-5">
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Homepage</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Fullscreen home +
                              Lookbook </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="index2.html">Split-screen
                              home </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="index3.html">Classic home
                            </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="index4.html">Parallax
                              sections <span class="badge bg-warning ms-1">New</span> </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="index5.html">Slider + Broken
                              grid <span class="badge bg-warning ms-1">New</span> </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Shop</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="category.html">Category -
                              left sidebar </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="category-right.html">Category
                              - right sidebar </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="category-no-sidebar.html">Category - no sidebar </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="category-full.html">Category
                              - full width </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="category-masonry.html">Category - masonry items </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="category-banner.html">Category - w/ banner </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="detail.html">Product detail
                            </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="detail-2.html">Product detail
                              - v.2 </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="detail-3.html">Product detail
                              - v.3 <span class="badge bg-warning ms-1">New</span> </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Order process</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="cart.html">Shopping cart </a>
                          </li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="cart-2.html">Shopping cart -
                              v. 2 <span class="badge bg-warning ms-1">New</span> </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="checkout1.html">Checkout 1 -
                              Address </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="checkout2.html">Checkout 2 -
                              Delivery </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="checkout3.html">Checkout 3 -
                              Payment </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="checkout4.html">Checkout 4 -
                              Review </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="checkout5.html">Checkout 5 -
                              Confirmation </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Blog</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="blog.html">Blog </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="post.html">Post </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Pages</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="about.html">About us <span
                                class="badge bg-warning ms-1">New</span> </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="about-2.html">About us v.2
                              <span class="badge bg-warning ms-1">New</span> </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="contact.html">Contact </a>
                          </li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="contact-2.html">Contact v.2
                            </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="text.html">Text page </a>
                          </li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="faq.html">F.A.Q.s </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="coming-soon.html">Coming soon
                            </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Customer</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="customer-login.html">Login/sign up </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="customer-orders.html">Orders
                            </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="customer-order.html">Order
                              detail </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="customer-addresses.html">Addresses </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="customer-account.html">Profile </a></li>
                        </ul>
                      </div>
                      <div class="col-lg-3">
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Documentation</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="docs/docs-introduction.html">Introduction </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="docs/docs-directory-structure.html">Directory structure </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link" href="docs/docs-gulp.html">Gulp
                            </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="docs/docs-customizing-css.html">Customizing CSS </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="docs/docs-credits.html">Credits </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="docs/docs-changelog.html">Changelog </a></li>
                        </ul>
                        <!-- Megamenu list-->
                        <h6 class="text-uppercase">Components</h6>
                        <ul class="megamenu-list list-unstyled">
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="docs/components-bootstrap.html">Bootstrap </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="docs/components-sell.html">Theme </a></li>
                          <li class="megamenu-list-item"><a class="megamenu-list-link"
                              href="component-variants/header.html">Header variants <span
                                class="badge bg-warning ms-1">New</span> </a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="row megamenu-services d-none d-lg-flex">
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#delivery-time-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Free shipping &amp; return</h6>
                            <p class="mb-0 text-muted text-sm">Free Shipping over $300</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#money-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Money back guarantee</h6>
                            <p class="mb-0 text-muted text-sm">30 Days Money Back</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#customer-support-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">020-800-456-747</h6>
                            <p class="mb-0 text-muted text-sm">24/7 Available Support</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 d-flex">
                        <div class="megamenu-services-item">
                          <svg class="svg-icon megamenu-services-icon">
                            <use xlink:href="#secure-payment-1"> </use>
                          </svg>
                          <div>
                            <h6 class="text-uppercase">Secure Payment</h6>
                            <p class="mb-0 text-muted text-sm">Secure Payment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 d-none d-lg-block position-relative"><img class="bg-image"
                      src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/megamenu.jpg" alt=""></div>
                </div>
              </div>
            </li>
            <li class="nav-item"><a class="nav-link" href="">Contacto</a>
            </li>
          </ul>
          <div class="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
            <!-- Search Button-->
            <div class="nav-item navbar-icon-link" data-bs-toggle="search">
              <img src="/assets/icons/search.png" style="width: 25px;" />
            </div>
            <!-- User Not Logged - link to login page-->
            <div class="nav-item">

              <router-link v-if="!$store.state.token" class="navbar-icon-link" to="/login">
                <img src="/assets/icons/user.png" style="width: 25px;" />
                <span class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">Log in
                </span>
              </router-link>
              <a v-if="$store.state.token" class="navbar-icon-link dropdown">
                <img src="/assets/icons/user.png" style="width: 25px;" />
                <span class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline dropdown-toggle"
                  data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> &nbsp;
                  {{ user.nombres.split(' ')[0] }}

                </span>
                <div class="dropdown-menu dropdown-menu-animated" aria-labelledby="categoryDropdownMenuLink"
                  style="    left: -50px !important;">
                  <a class="dropdown-item" href="category.html">Category - left sidebar </a>
                  <Router-link class="dropdown-item" to="/cuenta/direcciones">Direcciones</Router-link>
                  <a class="dropdown-item" v-on:click="logout()">Cerrar sesión </a>
                </div>
              </a>
            </div>
            <!-- Cart Dropdown-->
            <div class="nav-item dropdown">
              <a class="navbar-icon-link d-lg-none" href="cart.html">
                <img src="/assets/icons/user.png" style="width: 25px;" />
                <span class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">View
                  cart</span>
              </a>
              <div class="d-none d-lg-block">
                <a class="navbar-icon-link" id="cartdetails" href="cart.html" data-bs-target="#" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <img src="/assets/icons/cart.png" style="width: 25px;" />
                  <div class="navbar-icon-link-badge">{{ carrito_length }}</div>
                </a>
                <div class="dropdown-menu dropdown-menu-animated dropdown-menu-end p-4" aria-labelledby="cartdetails"
                  style="max-width: 350px !important;">
                  <div class="navbar-cart-product-wrapper"
                    style="    overflow-x: hidden !important;max-height: 340px !important;">
                    <!-- cart item-->
                    <div class="navbar-cart-product" v-for="item in carrito">
                      <div class="d-flex align-items-center">
                        <a href="detail.html">
                          <img class="img-fluid navbar-cart-product-image"
                            :src="$url + '/obtener_portada_producto/' + item.producto.portada" alt="..." /></a>
                        <div class="w-100">
                          <a class="navbar-cart-product-close" style="cursor:pointer" v-on:click="eliminar(item._id)">
                            <img src="/assets/icons/close.png" style="width: 15px;" />
                          </a>
                          <div class="ps-3">
                            <router-link :to="{ name: 'show-producto', params: { slug: item.producto.slug } }"
                              class="navbar-cart-product-link"
                              style="text-overflow:ellipsis;overflow: hidden;white-space: nowrap;">{{ item.producto.titulo }}</router-link>
                            <small class="d-block text-muted">{{ item.producto.str_variedad }}: {{ item.variedad.variedad }}
                            </small>
                            <small class="d-block text-muted">Cantidad: {{ item.cantidad }} </small>
                            <strong class="d-block text-sm">{{ convertCurrency(item.producto.precio * item.cantidad) }}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <!-- total price-->
                  <div class="navbar-cart-total"><span class="text-uppercase text-muted">Total</span><strong
                      class="text-uppercase">{{ convertCurrency(total) }}</strong></div>
                  <!-- buttons-->
                  <div class="d-flex justify-content-between">
                    <RouterLink class="btn btn-link text-dark me-3" to="/Cart">Carrito de Compras
                      <img src="/assets/icons/shopping-bag.png" style="width: 15px;">
                    </RouterLink>
                    <RouterLink class="btn btn-outline-dark" to="/checkout">Checkout</RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
    <!-- /Navbar -->
    <!-- Fullscreen search area-->
    <div class="search-area-wrapper">
      <div class="search-area d-flex align-items-center justify-content-center">
        <div class="close-btn">
          <svg class="svg-icon svg-icon-light w-3rem h-3rem">
            <use xlink:href="#close-1"> </use>
          </svg>
        </div>
        <form class="search-area-form" action="#">
          <div class="mb-4 position-relative">
            <input class="search-area-input" type="search" name="search" id="search"
              placeholder="What are you looking for?">
            <button class="search-area-button" type="submit">
              <svg class="svg-icon">
                <use xlink:href="#search-1"> </use>
              </svg>
            </button>
          </div>
        </form>
      </div>
  </div>
  <!-- /Fullscreen search area-->
</header></template>

<style>.navbar-light .navbar-nav .nav-link,
.navbar-hover-light:hover .navbar-nav .nav-link,
.navbar-fixed-light.fixed-top .navbar-nav .nav-link {
  color: rgb(255 255 255) !important;
}</style>

<script>

import axios from 'axios';
import currency_formatter from 'currency-formatter';
import { RouterLink } from 'vue-router';

export default {
  name: 'Header',
  data() {
    return {
      user: JSON.parse(this.$store.state.user),
      carrito: [],
      total: 0,
      carrito_length: 0,
    };
  },
  methods: {
    eliminar(id){
            axios.delete(this.$url+'/eliminar_producto_carrito/'+id,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result)=>{       
                this.init_carrito();
                this.$socket.emit('send_cart',true);
            });
        },
    convertCurrency(number) {
      return currency_formatter.format(number, { code: 'PEN' });
    },
    logout() {
      this.$store.dispatch('logout');
      if (this.$route.path !== '/')
        this.$router.push({ name: 'home' });
      /* window.location.reload(); */
      this.carrito = [];
      this.carrito_length = 0;
    },
    init_carrito() {
      if (this.$store.state.token != null) {
        axios.get(this.$url + '/obtener_carrito_cliente', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': this.$store.state.token
          }
        }).then((result) => {
          this.carrito_length = result.data.carrito_general.length;
          this.total = 0;
          for (var item of result.data.carrito_general) {
            let subtotal = item.producto.precio * item.cantidad;
            this.total = this.total + subtotal;
          }
          this.carrito = result.data.carrito_general;
        });
      }
    },
    click_event() {
      this.$socket.emit('emit_method', 'Hola socket');
    }
  },
  created() {
    this.sockets.subscribe('listen_cart', (data) => {
      this.init_carrito();
      this.user = JSON.parse(this.$store.state.user);
    });
  },
  beforeMount() {
    this.init_carrito();
  },
  components: { RouterLink }
}
</script>
