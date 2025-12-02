<template>
  <div v-if="project" class="w-[80vw] min-h-[80vh] mx-auto py-8">
    <router-link to="/projects" class="inline-block bg-(--color-secondary) rounded-full px-4 py-3 my-4">
      <svg class="inline-block w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 19l-7-7 7-7" />
      </svg>
    </router-link>
    <div class="mb-4">
      <h1 class="text-2xl font-bold text-(--color-secondary)"><span>
        {{ project.title }}
      </span>
    </h1>
      <p class="text-slate-500 mt-1">{{ project.year }} • {{ project.tags.join(' · ') }}</p>
    </div>
    <img :src="project.image" alt="" class="w-full h-auto rounded-lg my-4">
    <p class="mb-4">{{ project.description }}</p>
  </div>
  <div v-else>
    <p>Projet introuvable.</p>
    <router-link to="/projects" class="inline-block border border-slate-900 text-slate-900 px-3 py-1 rounded">Retour</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProjects } from '../composables/useProjects'
const route = useRoute()
const { getById } = useProjects()
const project = getById(route.params.id)
</script>

<!-- styles removed: using Tailwind utilities -->
