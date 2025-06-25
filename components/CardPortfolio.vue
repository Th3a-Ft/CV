<template>
    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl mx-2 my-6 p-2">
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

const props = defineProps({
    id: Number,
    url: String,
    title: String,
    description: String,
})

/* Par def DisplayDetails = true */
const DisplayDetails = ref(true)


</script>