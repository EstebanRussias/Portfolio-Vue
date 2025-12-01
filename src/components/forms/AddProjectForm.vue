<template>
  <form @submit.prevent="onSubmit" class="add-project-form" novalidate>
    <div><label>Titre</label><input v-model="form.title" required /></div>
    <div><label>Image (URL)</label><input v-model="form.image" /></div>
    <div><label>Github (URL)</label><input v-model="form.github" /></div>
    <div><label>Année</label><input v-model.number="form.year" type="number" /></div>
    <div><label>Tags (séparés par , )</label><input v-model="tagsRaw" /></div>
    <div><label>Description</label><textarea v-model="form.description"></textarea></div>
    <div class="actions">
      <button class="btn" type="submit">Ajouter le projet</button>
      <span v-if="msg" class="msg">{{ msg }}</span>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useProjects } from '../../composables/useProjects'

const { addProject } = useProjects()
const form = reactive({ title:'', image:'', github:'', year:new Date().getFullYear(), description:'' })
const tagsRaw = ref('')
const msg = ref('')

function onSubmit() {
  if (!form.title.trim()) {
    msg.value = 'Le titre est requis'
    return
  }
  const tags = tagsRaw.value.split(',').map(t => t.trim()).filter(Boolean)
  addProject({ ...form, tags })
  msg.value = 'Projet ajouté'
  // reset
  form.title = form.description = form.image = form.github = ''
  tagsRaw.value = ''
  setTimeout(()=> msg.value = '', 2000)
}
</script>

<style>
.add-project-form { display:grid; gap:0.5rem; max-width:700px; }
.add-project-form .actions { display:flex; align-items:center; gap:1rem; margin-top:0.5rem;}
.msg { color:#06b6d4; }
</style>
