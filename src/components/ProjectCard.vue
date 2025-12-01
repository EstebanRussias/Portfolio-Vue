<template>
  <article class="card">
    <img :src="project.image" :alt="project.title" class="card-img" />
    <div class="card-body">
      <h3>{{ project.title }}</h3>
      <p class="meta">{{ project.year }} • {{ project.tags.join(' · ') }}</p>
      <div class="card-actions">
        <router-link :to="`/projects/${project.id}`" class="btn small">Voir</router-link>
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="btn small ghost">Github</a>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<style>
.card { display:flex; gap:1rem; border:1px solid #e6eef8; border-radius:8px; overflow:hidden; }
.card-img { width:220px; height:140px; object-fit:cover; }
.card-body { padding:1rem; flex:1; }
.meta { color:#6b7280; font-size:0.9rem; }
.btn.small { padding:0.35rem 0.6rem; font-size:0.85rem; }
.btn.ghost { background:transparent; border:1px solid #0f172a; color:#0f172a; }
</style>
