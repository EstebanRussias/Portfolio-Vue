<template>
  <form @submit.prevent="submit" class="grid gap-2 max-w-xl" id="contact" novalidate>
    <div>
      <label class="block font-semibold">Nom</label>
      <input class="w-full p-2 border border-(--text-color) rounded" v-model="form.name" required />
      <small v-if="errors.name" class="text-red-600 text-sm">{{ errors.name }}</small>
    </div>
    <div>
      <label class="block font-semibold">Email</label>
      <input class="w-full p-2 border border-(--text-color) rounded" v-model="form.email" required type="email" />
      <small v-if="errors.email" class="text-red-600 text-sm">{{ errors.email }}</small>
    </div>
    <div>
      <label class="block font-semibold">Message</label>
      <textarea class="w-full p-2 border border-(--text-color) rounded" v-model="form.message" required></textarea>
      <small v-if="errors.message" class="text-red-600 text-sm">{{ errors.message }}</small>
    </div>
    <div class="flex items-center gap-4">
      <button type="submit" class="py-3 w-full bg-(--color-secondary) text-white rounded">Envoyer</button>
      <span v-if="success" class="text-green-600 ml-2">Votre message a bien été envoyé (simulation).</span>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({})
const success = ref(false)

function validate() {
  errors.name = form.name.trim().length >= 2 ? '' : 'Nom trop court'
  errors.email = (/^\S+@\S+\.\S+$/).test(form.email) ? '' : 'Email invalide'
  errors.message = form.message.trim().length >= 10 ? '' : 'Message trop court (min 10 caractères)'
  return !errors.name && !errors.email && !errors.message
}

function submit() {
  success.value = false
  if (!validate()) return
  // simulation: affiche message de confirmation (pas d'envoi réel)
  success.value = true
  // réinitialisation
  form.name = form.email = form.message = ''
  setTimeout(() => success.value = false, 3000)
}
</script>

<!-- styles removed: using Tailwind utilities -->
