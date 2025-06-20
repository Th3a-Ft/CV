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

    <!-- Boutons -->
<!--     <div>
        <button @click="previousSlide"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 shadow">
            ←
        </button>
        <button @click="nextSlide"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 shadow">
            →
        </button>
    </div>
 -->
</template>

<script setup>
const props = defineProps({
    id: String,
    title: String,
    school: String,
    date: String,
    url: String
})



/* const trainings = {
    campus: {
        "id": 1,
        "title": "Développeur web",
        "school": "Campus Numérique in the Alp",
        "date": "En cours",
        "url": "https://le-campus-numerique.fr/formations-developpeur2/",
    },
    master: {
        "id": 2,
        "title": "Master Information Communication Publique et Médias",
        "school": "Université Grenoble Alpes",
        "date": "2020-2022",
        "url": "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-information-communication-IBC8S6FT/parcours-information-communication-publique-et-medias-IBC8V4V7.html",
    },
    licence: {
        "id": 3,
        "title": "Licence professionnelle Développement Durable des Territoire par l'e-Commerce et l'e-Tourisme",
        "school": "Université Toulouse Jean Jaurès",
        "date": "2019-2020",
        "url": "https://www.isthia.fr/formation/licence-professionnelle-ddtecet/",
    },
    dut: {
        "id": 4,
        "title": "DUT Gestion Administrtive et Commerciale des Organisations",
        "school": "IUT de St-Etienne",
        "date": "2017-2019",
        "url": "https://www.iut.univ-st-etienne.fr/fr/etudier-a-l-iut-de-saint-etienne/nos-formations/les-b-u-t/b-u-t-gestion-administrative-et-commerciale-des-organisations.html",
    },
}
 */

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