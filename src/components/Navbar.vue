<template>
  <div class="navigation">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link to="/"
          >Aplikacja do analizy danych dotyczących przesyłek</router-link
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item><router-link to="/">Mapa</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/przesyłki/all"
              >Wszystkie paczki</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/zamowienia">Zamówienia</router-link></b-nav-item
          >
          <b-nav-item
            ><router-link to="/koszt"
              >Oblicz koszt wysyłki</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/statystyki">Statystyki</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
