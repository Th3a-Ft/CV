<template>
    <!-- onclick DisplayDetails devient false -->
    <!--     <button @click="DisplayDetails = !DisplayDetails"
        class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl mx-12 my-6 md:mx-2 md:my-6 p-2 md:w-5/11 md:max-w-1/3 md:hover:bg-gray-100">
 -->

    <button @click="DisplayDetails = !DisplayDetails"
        class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl  p-2 md:hover:bg-gray-100">

        <h2 class="text-xl text-center font-bold mb-4 pt-4">{{ title }}</h2>
        <div class="flex flex-col flex-wrap ">

            <!-- :class = style dynamique // []=tableau permettant d'avoir 1 style par défaut + un style si la condition est vraie + un style si condition est fausse / condition est vérifié avec "DisplayDetails ?"-->
            <NuxtImg :src="url" :class="['h-1/3', DisplayDetails ? 'block' : 'hidden']" />
            <div :class="['h-1/3 p-2', DisplayDetails ? 'hidden' : 'block']">
                <p class="text-justify">{{ description }}</p>
            </div>
        </div>
        <div class="md:hidden">
            <p :class="['text-xs bg-gray-100', DisplayDetails ? 'block' : 'hidden']">{{ $t("general.clickMoreInfo") }}
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