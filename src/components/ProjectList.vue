<template>
  <div class="project-list">
    <slot name="header"></slot>
    <div v-if="projects && projects.length" class="grid">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
    <p v-else>Aucun projet pour le moment.</p>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
const props = defineProps({ projects: { type: Array, default: () => [] } })
</script>

<style>
.grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(320px,1fr)); gap:1rem; }
</style>
