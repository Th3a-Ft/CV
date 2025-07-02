<template>
    <div class="w-full flex-shrink-0 px-6">
        <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl">
            <h3 class="font-bold text-center pb-2">{{ title }}</h3>
            <p class="text-xs pt-2 pl-2">{{ school }} - {{ date }}</p>
            <p class="p-2">{{ description }}</p>
            <div class="text-center">
                <NuxtLink :to="`${url}`" target="_blanck" class="p-2 rounded-lg bg-[#800101] text-white">En
                    savoir plus
                </NuxtLink>
            </div>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
    id: String,
    title: String,
    school: String,
    date: String,
    url: String
})

/* Fct contrôle des btn slider */
import { ref } from 'vue';

/* Obtenir la taille de l'objet' */
function getTrainingsLength() {
    const TrainingsLength = Object.keys(trainings).length
    return TrainingsLength
}

const currentIndex = ref(0);

const nextSlide = () => {
    console.log("Next");
    currentIndex.value = (currentIndex.value + 1) % getTrainingsLength()
};

const previousSlide = () => {
    console.log("Previous");
    currentIndex.value = (currentIndex.value - 1 + getTrainingsLength()) % getTrainingsLength()
}


</script>