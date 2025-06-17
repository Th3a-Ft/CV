<template>
  <h2 class="text-xl text-center font-bold">Mes expériences</h2>
  <!-- Slider card sm -->
  <div class="relative w-full max-w-xl mx-auto overflow-hidden p-6 ">
    <div class="flex justify-between transition-transform duration-500 w-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="experience in experiences" class="w-full flex-shrink-0 px-6">
        <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl">
          <h3 class="font-bold text-center pb-2">{{ experience.title }}</h3>
          <p class="text-xs pt-2 pl-2">{{ experience.entreprise }} - {{ experience.date }}</p>
          <p class="p-2">{{ experience.description}}</p>
          <div class="text-center">
            <NuxtLink :to="`/experiences/${experience.id}`" class="p-2 rounded-lg bg-[#800101] text-white">En savoir plus
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Boutons -->
    <div>
      <button @click="previousSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 shadow">
        ←
      </button>
      <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 shadow">
        →
      </button>
    </div>
  </div>

</template>

<script setup>
const experiences = {
  dtc: {
    "id": "dtc",
    "title": "Développeur web",
    "entreprise": "(nineteen)²",
    "date": "juin 2025",
    "description": "Création de pages sur le site de Digitl Test Center en utilisant les frameworks Vue.js, Nuxt.js et Tailwind CSS",
  },
  pvv: {
    "id": "pvv",
    "title": "Chargé de communication",
    "entreprise": "Pays Voironnais Volley",
    "date": "2023-2025",
    "description": "Communication globale pour les événements du club (réseaux sociaux, affiches, flyers, etc), création de contenus pour les réseaux sociaux du club, gestion et envoi de la newsletter",
  }, 
  epage: {
    "id": "epage",
    "title": "Chargé de communication",
    "entreprise": "Epage de la Bourbre",
    "date": "2023-2024",
    "description": "Organisation de cérémonies officielles, gestion des réseaux sociaux, création de support print",
  },

}


/* Fct contrôle des btn slider */
import { ref } from 'vue';

/* Obtenir la taille de l'objet' */
function getExpLength() {
  const ExpLength = Object.keys(experiences).length
  return ExpLength
}

const currentIndex = ref(0);

const nextSlide = () => {
  console.log("Next");
  currentIndex.value = (currentIndex.value + 1) % getExpLength()
};

const previousSlide = () => {
  console.log("Previous");
  currentIndex.value = (currentIndex.value - 1 + getExpLength()) % getExpLength()
}


</script>