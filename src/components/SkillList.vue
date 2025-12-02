<template>
  <section class="w-[80vw] mx-auto">
    <h2  class="text-3xl my-10">Mes <span>compétences</span></h2>

    <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 justify-items-center">

      <!-- Un rond par compétence -->
      <div
        v-for="(skill, i) in allSkills"
        :key="i"
        class="w-32 h-32 rounded-full bg-(--color-primary-light) flex flex-col justify-center items-center shadow-lg hover:bg-(--color-secondary) hover:scale-105 transition cursor-pointer"
      >
        <img
          :src="`../../public/img/skill/${skill}.png`"
          :alt="skill"
          class="w-16 h-16 object-contain"
        />
        <p class="mt-2 text-sm font-semibold uppercase">{{ skill }}</p>
      </div>

    </div>

    <p v-if="!allSkills || allSkills.length === 0" class="text-center mt-4">
      Aucune compétence trouvée.
    </p>
  </section>
</template>


<script setup>
import { allSkills } from '../composables/useSkills'

console.log(allSkills.value);



</script>

