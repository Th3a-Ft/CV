<template>
    <!-- onclick DisplayDetails devient false -->
    <button @click="DisplayDetails = !DisplayDetails" class="card" :style="{ backgroundImage: `linear-gradient(rgba(254, 213, 0, 10), rgba(254,254,254,0.90)), url(${url})` }">
        <div class="my-auto">
            <h2 class="text-xl text-center font-bold my-4">{{ title }}</h2>
            <div class="flex flex-col flex-wrap my-4 lg:m-8 my-auto">


                <div :class="['', DisplayDetails ? 'hidden' : 'block']">
                    <p class="text-justify">{{ description }}</p>
                    <br></br>

                    <p class="font-bold">{{ $t("general.skillsPortfolio") }}</p>
                    <p v-for="skill in skills" class="border-solid text-white bg-[#800101] border-1 rounded-full px-6 py-2 m-2 text-center">{{ skill }}</p>
                </div>
            </div>

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
    skills: Array,
})

/* Par def DisplayDetails = true */
const DisplayDetails = ref(true)


</script>