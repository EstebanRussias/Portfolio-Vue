<template>
  <section class="hero">
    <div class="hero-inner">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <div class="actions">
        <router-link to="/projects" class="btn">Voir mes projets</router-link>
        <a href="#contact" class="btn ghost">Contact</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const title = 'Développeur Fullstack — Portfolio'
const subtitle = "Projets réels, code propre, interfaces modernes. Je crée des applications web performantes."
</script>

<style>
.hero { padding:3rem 1rem; background:linear-gradient(90deg,#eef2ff,#fff); border-radius:8px; margin-bottom:2rem; }
.hero-inner { max-width:900px; margin:0 auto; text-align:center; }
.btn { display:inline-block; padding:0.6rem 1rem; margin:0.5rem; background:#0f172a; color:#fff; text-decoration:none; border-radius:6px;}
.btn.ghost { background:transparent; border:1px solid #0f172a; color:#0f172a; }
</style>
