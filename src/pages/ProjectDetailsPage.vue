<template>
  <div v-if="project">
    <div class="detail-header">
      <h1>{{ project.title }}</h1>
      <p class="meta">{{ project.year }} • {{ project.tags.join(' · ') }}</p>
    </div>
    <img :src="project.image" alt="" style="max-width:100%; height:auto; border-radius:8px; margin:1rem 0;">
    <p>{{ project.description }}</p>
    <p v-if="project.github"><a :href="project.github" target="_blank">Voir le repo / démo</a></p>
    <router-link to="/projects" class="btn ghost">Retour à la liste</router-link>
  </div>
  <div v-else>
    <p>Projet introuvable.</p>
    <router-link to="/projects" class="btn ghost">Retour</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProjects } from '../composables/useProjects'
const route = useRoute()
const { getById } = useProjects()
const project = getById(route.params.id)
</script>

<style>
.detail-header .meta { color:#6b7280; margin-top:0.3rem; }
</style>
