import { ref, computed } from 'vue'
import rawData from '../data.json'

const projects = ref([...rawData.projects])

let nextId = projects.value.length ? Math.max(...projects.value.map(p=>p.id)) + 1 : 1

export function useProjects() {
  const all = computed(() => projects.value)

  function addProject(payload) {
    const newProject = {
      id: nextId++,
      title: payload.title,
      description: payload.description || '',
      image: payload.image || 'https://picsum.photos/800/450',
      github: payload.github || '',
      year: payload.year || new Date().getFullYear(),
      tags: payload.tags || []
    }
    projects.value.unshift(newProject) 
    return newProject
  }

  function getById(id) {
    return projects.value.find(p => Number(p.id) === Number(id)) || null
  }

  function listSummary() {
    return projects.value.map(({id, title, image, github, year, tags}) => ({id, title, image, github, year, tags}))
  }

  return { projects: all, addProject, getById, listSummary }
}
