<template>
  <section class="flex items-center justify-center bg-(--color-primary) h-screen w-full">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-3xl font-bold mb-2">{{ title }}</h1>
      <p class="mb-4">{{ subtitle }}</p>
      <div>
        <router-link to="/projects" class="inline-block bg-(--color-secondary) text-white px-4 py-2 rounded-md mr-2">Voir mes projets</router-link>
        <a href="#contact" class="inline-block border border-(--color-secondary) text-(--color-secondary) px-4 py-2 rounded-md">Contact</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const title = 'Développeur Fullstack — Portfolio'
const subtitle = "Projets réels, code propre, interfaces modernes. Je crée des applications web performantes."
</script>

