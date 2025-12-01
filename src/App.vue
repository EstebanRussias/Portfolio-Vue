<template>
  <div id="app" class="min-h-screen flex flex-col bg-(--color-primary)">
    <Header />
    <main class="color-white">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

