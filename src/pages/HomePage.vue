<template>
  <Hero />
  <section>
    <h2 class="p-6 bg-blue-600 text-white rounded-xl text-xl">Projets récents</h2>
    <ProjectList :projects="topProjects">
      <template #header><p>Une sélection de mes derniers projets.</p></template>
    </ProjectList>
  </section>

  <section style="margin-top:2rem">
    <h2>Contact</h2>
    <ContactForm />
  </section>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import ProjectList from '../components/ProjectList.vue'
import ContactForm from '../components/forms/ContactForm.vue'
import { useProjects } from '../composables/useProjects'

const { projects } = useProjects()
const topProjects = projects.value.slice(0, 3)
</script>
