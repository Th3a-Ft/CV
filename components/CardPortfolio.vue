<template>
    <!-- onclick DisplayDetails devient false -->
    <button @click="DisplayDetails = !DisplayDetails"
        class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 flex flex-col flex-nowrap p-4">
        <h2 class="text-xl text-center font-bold my-4">{{ title }}</h2>
        <div class="flex flex-col flex-wrap m-4 lg:m-8">

            <!-- :class = style dynamique // []=tableau permettant d'avoir 1 style par défaut + un style si la condition est vraie + un style si condition est fausse / condition est vérifié avec "DisplayDetails ?"-->
            <NuxtImg 
                :src="url" 
                :class="[' ', DisplayDetails ? 'block' : 'hidden']" />
            <div 
                :class="['p-2', DisplayDetails ? 'hidden' : 'block']">
                <p class="text-justify">{{ description }}</p>
            </div>
        </div>
        <div class="md:hidden">
            <p 
                :class="['text-xs bg-gray-100', DisplayDetails ? 'block' : 'hidden']">
                {{ $t("general.clickMoreInfo")}}
            </p>
        </div>
    </button>

</template>
<script setup>
const localePath = useLocalePath();
const route = useRoute();

import { ref, computed } from 'vue';

/*url = source image / tags : entreprise où ses compétences ont été utilisé*/
const props = defineProps({
    id: Number,
    url: String,
    title: String,
    description: String,
})

/* Par def DisplayDetails = true */
const DisplayDetails = ref(true)


</script>