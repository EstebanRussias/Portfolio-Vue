<template>
  <div id="app">
    <Header />
    <main class="container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* simple layout */
#app { display:flex; flex-direction:column; min-height:100vh; }
main.container { flex:1; padding:2rem; max-width:1100px; margin:0 auto; }
</style>
