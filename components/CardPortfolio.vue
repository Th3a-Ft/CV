<template>
    <div v-show="filterTag" class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl mx-2 my-6 p-2 w-5/11 max-w-1/3">

        <h2 class="text-xl text-center font-bold mb-6">{{ title }}</h2>

        <div class="flex flex-col flex-nowrap">
            <!-- onclick DisplayDetails devient false -->
            <button @click="DisplayDetails = !DisplayDetails">
                <!-- :class = style dynamique // []=tableau permettant d'avoir 1 style par défaut + un style si la condition est vraie + un style si condition est fausse / condition est vérifié avec "DisplayDetails ?"-->
                <img :src="url" :class="['h-1/3', DisplayDetails ? 'block' : 'hidden']" />
                <div :class="['h-1/3', DisplayDetails ? 'hidden' : 'block']">
                    <p>{{ description }}</p>
                </div>
            </button>
        </div>
    </div>


</template>
<script setup>
import { ref, computed } from 'vue';

/*url = source image / tags : entreprise où ses compétences ont été utilisé / filterProps = array des tags filtrés */
const props = defineProps({
    id: Number,
    url: String,
    title: String,
    description: String,
    tags: Array,
    filterProps:Array,
})

/* Par def DisplayDetails = true */
const DisplayDetails = ref(true)

/*props.tags --> permet d'accéder aux données des props définies*/
/*some() = test si au moins 1 des arguments est dans l'array si oui true sinon false*/
const filterTag=computed(()=>{
    return props.filterProps.some((filterProps) => props.tags.includes(filterProps))
})

console.log(filterTag)
</script>