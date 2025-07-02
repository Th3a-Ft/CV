<template>
    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl m-8 pb-8 px-8">
        <h3 class="m-4 md:mt-8 font-bold text-center">{{ title }}</h3>
        <div class="flex flex-col flex-nowrap justify-evenly md:mx-8">
            <p v-for="skill in skills"
                class="border-solid text-white bg-[#800101] border-1 rounded-full px-6 py-2 m-2 text-center">{{ skill }}
            </p>
        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    title: String,
    skills: Array,

})

</script>