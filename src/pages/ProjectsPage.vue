<template>
  <div>
    <div class="page-header">
      <h1>Tous les projets</h1>
      <router-link to="/" class="btn ghost">Retour</router-link>
    </div>

    <AddProjectForm />

    <ProjectList :projects="projectsList" />
  </div>
</template>

<script setup>
import ProjectList from '../components/ProjectList.vue'
import AddProjectForm from '../components/forms/AddProjectForm.vue'
import { useProjects } from '../composables/useProjects'

const { listSummary, projects } = useProjects()
// projects est reactive; listSummary renvoit un tableau de résumés
const projectsList = projects.value // on veut afficher tous les projets (sans description est optionnel)
</script>

<style>
.page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; }
</style>
