<template>
  <h2 class="text-xl text-center font-bold">Mes expériences</h2>
  <!-- Slider card sm -->
  <div class="relative w-full max-w-xl mx-auto overflow-hidden p-6 ">
    <div class="flex justify-between transition-transform duration-500 w-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">

      <CardExperience :id="$t('experiences.dtc.id')" :title="$t('experiences.dtc.title')"
        :company="$t('experiences.dtc.company')" :date="$t('experiences.dtc.date')"
        :description="$t('experiences.dtc.description')" />
      <CardExperience :id="$t('experiences.pvv.id')" :title="$t('experiences.pvv.title')"
        :company="$t('experiences.pvv.company')" :date="$t('experiences.pvv.date')"
        :description="$t('experiences.pvv.description')" />
      <CardExperience :id="$t('experiences.epage.id')" :title="$t('experiences.epage.title')"
        :company="$t('experiences.epage.company')" :date="$t('experiences.epage.date')"
        :description="$t('experiences.epage.description')" />


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
import french from '@/i18n/locales/fr.json'
console.log( french)

/* Obtenir la taille de l'objet' */
/*Computed : permet de garder en cache la taille et n'est recalculée que si modif sur french.experiences */
const ExperiencesLength = computed(() => { return Object.keys(french.experiences).length });

const currentIndex = ref(0);

const nextSlide = () => {
  console.log("Next");
  currentIndex.value = (currentIndex.value + 1) % ExperiencesLength.value
};

const previousSlide = () => {
  console.log("Previous");
  currentIndex.value = (currentIndex.value - 1 + ExperiencesLength.value) % ExperiencesLength.value
}


</script>