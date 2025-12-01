<template>
  <div class="w-[80vw] mx-auto">
    <slot name="header"></slot>
    <div v-if="projects && projects.length" class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
    <p v-else>Aucun projet pour le moment.</p>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
const props = defineProps({ projects: { type: Array, default: () => [] } })
</script>

