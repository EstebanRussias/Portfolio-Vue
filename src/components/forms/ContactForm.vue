<template>
  <form @submit.prevent="submit" class="contact-form" id="contact" novalidate>
    <div>
      <label>Nom</label>
      <input v-model="form.name" required />
      <small v-if="errors.name" class="err">{{ errors.name }}</small>
    </div>
    <div>
      <label>Email</label>
      <input v-model="form.email" required type="email" />
      <small v-if="errors.email" class="err">{{ errors.email }}</small>
    </div>
    <div>
      <label>Message</label>
      <textarea v-model="form.message" required></textarea>
      <small v-if="errors.message" class="err">{{ errors.message }}</small>
    </div>
    <div class="actions">
      <button type="submit" class="btn">Envoyer</button>
      <span v-if="success" class="success">Votre message a bien été envoyé (simulation).</span>
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

<style>
.contact-form { display:grid; gap:0.6rem; max-width:620px; }
.contact-form label { display:block; font-weight:600; }
.contact-form input, .contact-form textarea { width:100%; padding:0.5rem; border:1px solid #dbeafe; border-radius:6px; }
.err { color:#dc2626; font-size:0.85rem; }
.success { color:#16a34a; margin-left:0.8rem; }
.actions { display:flex; align-items:center; gap:1rem; }
</style>
