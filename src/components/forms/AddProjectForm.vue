<template>
  <form @submit.prevent="onSubmit" class="grid gap-2 max-w-2xl" novalidate>
    <div>
      <label class="block font-semibold">Titre</label>
      <input class="w-full p-2 border border-(--color-secondary) rounded" v-model="form.title" required />
    </div>
    <div>
      <label class="block font-semibold">Image (URL)</label>
      <input class="w-full p-2 border border-(--color-secondary) rounded" v-model="form.image" />
    </div>
    <div>
      <label class="block font-semibold">Github (URL)</label>
      <input class="w-full p-2 border border-(--color-secondary) rounded" v-model="form.github" />
    </div>
    <div>
      <label class="block font-semibold">Année</label>
      <input class="w-full p-2 border border-(--color-secondary) rounded" v-model.number="form.year" type="number" />
    </div>
    <div>
      <label class="block font-semibold">Tags (séparés par , )</label>
      <input class="w-full p-2 border border-(--color-secondary) rounded" v-model="tagsRaw" />
    </div>
    <div>
      <label class="block font-semibold">Description</label>
      <textarea class="w-full p-2 border border-(--color-secondary) rounded" v-model="form.description"></textarea>
    </div>
    <div class="flex items-center gap-4 mt-2">
      <button class="px-4 py-2 bg-(--color-secondary) w-full text-white rounded" type="submit">Ajouter le projet</button>
      <span v-if="msg" class="text-(--color-success)">{{ msg }}</span>
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

<!-- styles removed: using Tailwind utilities -->
