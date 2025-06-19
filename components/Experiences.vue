<template>
  <h2 class="text-xl text-center font-bold">Mes expériences</h2>
  <!-- Slider card sm -->
  <div class="relative w-full max-w-xl mx-auto overflow-hidden p-6 ">
    <div class="flex justify-between transition-transform duration-500 w-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <CardExperience title="bjje"/>
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