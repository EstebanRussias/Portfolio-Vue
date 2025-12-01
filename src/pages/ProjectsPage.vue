<template>
  <div class="w-[80vw] mx-auto">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-bold my-5">Tous les <span>projets</span></h1>
    </div>

    <ProjectList :projects="projectsList" />

    <!-- Bouton toggle -->
    <div class="flex w-full justify-center mt-5">
      <button
        @click="toggleAddProject"
        type="button"
        class="w-15 h-15 text-3xl rounded-full bg-(--color-primary-light) flex items-center justify-center transition-all"
      >
        {{ addProject ? "×" : "+" }}
      </button>
    </div>

    <transition name="fade" class="mx-auto ">
      <AddProjectForm v-if="addProject" class="mt-5" />
    </transition>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import ProjectList from '../components/ProjectList.vue'
import AddProjectForm from '../components/forms/AddProjectForm.vue'
import { useProjects } from '../composables/useProjects'

const { projects } = useProjects()
const projectsList = projects.value 

const addProject = ref(false)
const toggleAddProject = () => {
  addProject.value = !addProject.value
}
</script>