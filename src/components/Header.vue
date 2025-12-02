<template>
  <header class="bg-(--color-primary-light) text-(--text-color)">
    <nav class="flex items-center justify-between max-w-5xl mx-auto w-full px-4 py-4">

      <router-link to="/" class="font-extrabold text-lg text-(--text-color)">
        MonPortfolio
      </router-link>

      <div class="flex items-center gap-4">
        <img
          id="darkMode"
          :src="isDark ? '/img/sun.png' : '/img/moon.png'"
          @click="toggleTheme"
          class="w-6 h-6 cursor-pointer"
          alt="toggle theme"
        />

        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

      <ul class="hidden md:flex gap-6 text-(--text-color)">
        <li><router-link to="/" class="opacity-80 hover:opacity-100">Accueil</router-link></li>
        <li><router-link to="/projects" class="opacity-80 hover:opacity-100">Projets</router-link></li>
      </ul>
    </nav>

    <!-- Menu mobile -->
    <transition name="fade">
      <ul v-if="isOpen" class="md:hidden flex flex-col items-center gap-4 py-4 bg-(--color-primary-light)">
        <li><router-link @click="isOpen=false" to="/">Accueil</router-link></li>
        <li><router-link @click="isOpen=false" to="/projects">Projets</router-link></li>
      </ul>
    </transition>
  </header>
</template>


<script setup>
import { ref, onMounted } from "vue";

const isOpen = ref(false);
const isDark = ref(false);

const darkTheme = {
  colorPrimary: "#222831",
  colorPrimaryLight: "#414c5d",
  backgroundColor: "#222831",
  backgroundColorLight: "#393e46",
  textColor: "#eee",
};

const lightTheme = {
  colorPrimary: "#EEEEEE",
  colorPrimaryLight: "#b5b5b5ff",
  backgroundColor: "#edededff",
  backgroundColorLight: "rgba(187, 187, 187, 1)",
  textColor: "#222831"
};

function changeColorTheme(isDarkTheme) {
  if (isDarkTheme) {
      localStorage.setItem('isDarkTheme', true);
      document.getElementById('darkMode').src = "/img/sun.png";
      document.documentElement.style.setProperty('--color-primary', darkTheme.colorPrimary);
      document.documentElement.style.setProperty('--color-primary-light', darkTheme.colorPrimaryLight);
      document.documentElement.style.setProperty('--background-color', darkTheme.backgroundColor);
      document.documentElement.style.setProperty('--background-color-light', darkTheme.backgroundColorLight);
      document.documentElement.style.setProperty('--text-color', darkTheme.textColor);
  } else {
      localStorage.setItem('isDarkTheme', false);
      document.getElementById('darkMode').src = "/img/moon.png";
      document.documentElement.style.setProperty('--color-primary', lightTheme.colorPrimary);
      document.documentElement.style.setProperty('--color-primary-light', lightTheme.colorPrimaryLight);
      document.documentElement.style.setProperty('--background-color', lightTheme.backgroundColor);
      document.documentElement.style.setProperty('--background-color-light', lightTheme.backgroundColorLight);
      document.documentElement.style.setProperty('--text-color', lightTheme.textColor);
  }
}

function toggleTheme() {
  isDark.value = !isDark.value;
  changeColorTheme(isDark.value);
}

onMounted(() => {
  isDark.value = localStorage.getItem("isDarkTheme") === "true";
  changeColorTheme(isDark.value);
});
</script>

