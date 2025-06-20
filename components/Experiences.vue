<template>
  <h2 class="text-xl text-center font-bold">Mes expériences</h2>
  <!-- Slider card sm -->
  <div class="relative w-full max-w-xl mx-auto overflow-hidden p-6 ">
    <div class="flex justify-between transition-transform duration-500 w-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">

      <CardExperience :title="$t('experiences.dtc.title')" :company="$t('experiences.dtc.company')"
        :date="$t('experiences.dtc.date')" :description="$t('experiences.dtc.description')" />
      <CardExperience :title="$t('experiences.pvv.title')" :company="$t('experiences.pvv.company')"
        :date="$t('experiences.pvv.date')" :description="$t('experiences.pvv.description')" />
      <CardExperience :title="$t('experiences.epage.title')" :company="$t('experiences.epage.company')"
        :date="$t('experiences.epage.date')" :description="$t('experiences.epage.description')" />


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
import experiences from '@/i18n/locales/fr.json'

/* Obtenir la taille de l'objet' */
function getExperiencesLength() {
  const ExperiencesLength = Object.keys(experiences.experiences).length
  console.log(experiences.experiences);
  return ExperiencesLength
}

const currentIndex = ref(0);

const nextSlide = () => {
  console.log("Next");
  currentIndex.value = (currentIndex.value + 1) % getExperiencesLength()
};

const previousSlide = () => {
  console.log("Previous");
  currentIndex.value = (currentIndex.value - 1 + getExperiencesLength()) % getExperiencesLength()
}


</script>