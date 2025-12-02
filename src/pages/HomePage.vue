<template>
  <Hero v-reveal  />
  <section v-reveal  class="w-[80vw] mx-auto">
    <h2 class="text-3xl my-10">Mes projets <span>récent</span></h2>
    <ProjectList :projects="topProjects">
      <template #header></template>
    </ProjectList>
  </section>
  <SkillList v-reveal></SkillList>
  <section v-reveal class="w-[80vw] mx-auto">
    <h2 class="text-3xl my-10">Mes <span>services</span></h2>
    <div class="flex justify-center gap-3 flex-wrap">
        <div class="flex flex-col gap-5 w-80 m-2 bg-(--color-primary-light) p-4 rounded-md hover:bg-(--color-secondary)">
            <p class="text-4xl">💻​</p>
            <h3>Développement Web</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>
        <div class="flex flex-col gap-5 w-80 m-2 bg-(--color-primary-light) p-4 rounded-md hover:bg-(--color-secondary)">
            <p class="text-4xl">🎨​</p>
            <h3>UI / UX</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>
        <div class="flex flex-col gap-5 w-80 m-2 bg-(--color-primary-light) p-4 rounded-md hover:bg-(--color-secondary)">
            <p class="text-4xl">📢​</p>
            <h3>SEO</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>

    </div>
  </section>
  <section v-reveal class="w-[80vw] mx-auto">
    <h2 class="text-3xl my-10">À propos de <span>moi</span></h2>
    <div class="flex justify-center gap-3 flex-wrap">
        <div class="flex flex-col items-center w-48 m-2 bg-(--color-primary-light) p-4 rounded-md hover:bg-(--color-secondary)">
            <img src="../../public/img/school.png" alt="img">
            <h3>Collège avec Scratch</h3>
        </div>

        <div class="flex flex-col items-center w-48 m-2 bg-(--color-primary-light) p-4 rounded-md hover:bg-(--color-secondary)">
            <img src="../../public/img/school.png" alt="img">
            <h3>Lycée avec NSI</h3>
        </div>

        <div class="flex flex-col items-center w-48 m-2 bg-(--color-primary-light) p-4 rounded-md hover:bg-(--color-secondary)">
            <img src="../../public/img/school.png" alt="img">
            <h3>Bachelor Dev & App</h3>
        </div>
    </div>
    <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, repellat porro quasi maiores doloremque tempora provident nesciunt facere ad et veritatis unde aliquid reprehenderit! Excepturi nulla dolorum recusandae odit magnam.</p>
  </section>

  
  <section v-reveal class="w-[80vw] mx-auto">
  <h2 class="text-3xl my-10">Contact</h2>

  <div class="flex flex-col md:flex-row justify-between gap-10">
    <div class="w-full md:w-1/2 flex flex-col gap-5">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error laborum
        consectetur dicta tempora quo officia sint esse minus molestias optio,
        explicabo ex, obcaecati doloribus eius ad, dignissimos minima!
      </p>

      <div class="flex flex-col sm:flex-row gap-5">
        <button class="bg-(--color-secondary) rounded-md p-2 px-5 text-center">
          <a href="./cv.pdf" target="_blank">CV</a>
        </button>

        <button class="bg-(--color-secondary) rounded-md p-2 px-5 text-center">
          <a href="mailto:nomprenom@efrei.net">nomprenom@efrei.net</a>
        </button>

        <button class="bg-(--color-secondary) rounded-md p-2 px-5 text-center">
          <a href="tel:+600000000">06 .. .. .. ..</a>
        </button>
      </div>
    </div>
    <ContactForm class="w-full md:w-1/2" />
  </div>
</section>

</template>

<script setup>
import Hero from '../components/Hero.vue'
import ProjectList from '../components/ProjectList.vue'
import SkillList from '../components/SkillList.vue'
import ContactForm from '../components/forms/ContactForm.vue'
import { useProjects } from '../composables/useProjects'

const { projects } = useProjects()
const topProjects = projects.value.slice(0, 3)
</script>
