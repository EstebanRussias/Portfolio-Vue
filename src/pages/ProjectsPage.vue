<template>
  <div class="w-[80vw] mx-auto">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-bold my-5">Tous les <span>projets</span></h1>
    </div>
    <div class="flex items-center gap-3 mb-6 flex-wrap">
      <button
        @click="setFilter('')"
        :class="filterTag === '' ? 'px-3 py-1 rounded-md bg-(--color-secondary) text-(--text-color:)' : 'px-3 py-1 rounded-md bg-(--color-primary-light)'
        "
      >Tous</button>

      <button
        @click="setFilter('html')"
        :class="filterTag === 'html' ? 'px-3 py-1 rounded-md bg-(--color-secondary) text-(--text-color:)' : 'px-3 py-1 rounded-md bg-(--color-primary-light)'"
      >HTML</button>

      <button
        @click="setFilter('design')"
        :class="filterTag === 'design' ? 'px-3 py-1 rounded-md bg-(--color-secondary) text-(--text-color:)' : 'px-3 py-1 rounded-md bg-(--color-primary-light)'"
      >Design</button>

      <input
        v-model="searchQuery"
        type="text"
        id="searchInput"
        class="p-2 flex-1 rounded border"
        placeholder="Rechercher un projet (titre, tag, description)..."
      />
    </div>

    <ProjectList v-reveal :projects="filteredProjects" />

    <div v-reveal  class="flex w-full justify-center mt-5">
      <button
        @click="toggleAddProject"
        type="button"
        class="w-12 h-12 text-2xl rounded-full bg-(--color-primary-light) text-white flex items-center justify-center transition-all"
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
import { ref, computed } from 'vue'
import ProjectList from '../components/ProjectList.vue'
import AddProjectForm from '../components/forms/AddProjectForm.vue'
import { useProjects } from '../composables/useProjects'

const { projects } = useProjects()
const filterTag = ref('') 
const searchQuery = ref('')

const setFilter = (tag) => {
  filterTag.value = tag
}

const filteredProjects = computed(() => {
  const q = String(searchQuery.value || '').trim().toLowerCase()
  const tag = String(filterTag.value || '').trim().toLowerCase()
  return (projects.value || []).filter(p => {
    const tags = (p.tags || []).map(t => String(t).toLowerCase())
    const matchTag = !tag || tags.some(t => t === tag)
    if (!q) return matchTag
    const inTitle = String(p.title || '').toLowerCase().includes(q)
    const inDesc = String(p.description || '').toLowerCase().includes(q)
    const inTags = tags.some(t => t.includes(q))
    return matchTag && (inTitle || inDesc || inTags)
  })
})

const addProject = ref(false)
const toggleAddProject = () => {
  addProject.value = !addProject.value
}
</script>