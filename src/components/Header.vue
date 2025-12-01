<template>
  <header class="site-header">
    <nav class="nav">
      <div class="brand"><router-link to="/">MonPortfolio</router-link></div>
      <ul class="menu">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/projects">Projets</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style>
.site-header { background:#0f172a; color:#fff; padding:1rem 0; }
.nav { display:flex; justify-content:space-between; align-items:center; max-width:1100px; margin:0 auto; padding:0 1rem; }
.brand a { color:#fff; font-weight:700; text-decoration:none; }
.menu { list-style:none; display:flex; gap:1rem; margin:0; padding:0; }
.menu a { color:#cbd5e1; text-decoration:none; }
.menu a.router-link-active { color:#fff; font-weight:600; }
</style>
