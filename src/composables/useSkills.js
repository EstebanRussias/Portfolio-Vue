import { ref, computed } from 'vue'
import rawData from '../data.json'

const skills = ref([...rawData.competences])

export const allSkills = computed(() => skills.value)


