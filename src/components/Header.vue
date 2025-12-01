<template>
  <header class="bg-(--color-primary-light) text-white">
    <nav class="flex items-center justify-between max-w-5xl mx-auto w-full px-4 py-4">
      <div class="brand"><router-link to="/" class="text-white font-extrabold text-lg">MonPortfolio</router-link></div>
      <ul class="flex gap-4 m-0 p-0">
        <li><router-link to="/" class="text-slate-300 hover:text-white">Accueil</router-link></li>
        <li><router-link to="/projects" class="text-slate-300 hover:text-white">Projets</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>
