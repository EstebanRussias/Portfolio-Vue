<template>
  <article class="flex flex-col gap-4  bg-(--color-primary-light) rounded-lg overflow-hidden hover:bg-(--color-secondary)">
    <img :src="project.image" :alt="project.title" class="w-full h-45object-cover" />
    <div class="p-4 flex flex-col gap-2">
      <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      <p class="text-slate-500 text-sm">{{ project.year }} • {{ project.tags.join(' · ') }}</p>
      <div>
        <router-link :to="`/projects/${project.id}`" class="px-3 py-1 text-sm bg-(--color-primary-light) border border-(--color-secondary) text-white rounded hover:bg-(--color-secondary-dark)">Voir</router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<!-- styles removed: using Tailwind utilities -->
