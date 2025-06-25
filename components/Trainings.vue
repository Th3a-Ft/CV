<template>
    <h2 class="text-xl text-center font-bold">Mes formations</h2>
    <!-- Slider card sm -->
    <div class="relative w-full max-w-xl mx-auto overflow-hidden p-6 ">
        <div class="flex justify-between transition-transform duration-500 w-full"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">

            <CardTraining :title="$t('trainings.campus.title')" :school="$t('trainings.campus.school')"
                :date="$t('trainings.campus.date')" :url="$t('trainings.campus.url')" />
            <CardTraining :title="$t('trainings.master.title')" :school="$t('trainings.master.school')"
                :date="$t('trainings.master.date')" :url="$t('trainings.master.url')" />
            <CardTraining :title="$t('trainings.licence.title')" :school="$t('trainings.licence.school')"
                :date="$t('trainings.licence.date')" :url="$t('trainings.licence.url')" />
            <CardTraining :title="$t('trainings.dut.title')" :school="$t('trainings.dut.school')"
                :date="$t('trainings.dut.date')" :url="$t('trainings.dut.url')" />



        </div>

        <!-- Boutons -->
        <div>
            <button @click="previousSlide"
                class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 shadow">
                ←
            </button>
            <button @click="nextSlide"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 shadow">
                →
            </button>
        </div>
    </div>

</template>

<script setup>
/* Fct contrôle des btn slider */
import { ref } from 'vue';
/*Import objet trainings depuis le dossier fr.json*/
import french from '@/i18n/locales/fr.json'


/* Obtenir la taille de l'objet' */
const trainingsLength=computed(()=>{
    return Object.keys(french.trainings).length
})

const currentIndex = ref(0);

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % trainingsLength.value
};

const previousSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + trainingsLength.value) % trainingsLength.value
}

</script>