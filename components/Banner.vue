<template>
    <div class="h-100 py-10 bg-[#800101] text-white mb-16">
        <div>
            <h1 class="mt-8 text-center font-extrabold text-2xl">{{ title }}</h1>
            <p class="text-center m-8"> {{ description }} </p>
        </div>
        <div class="flex flex-col w-1/2 mx-auto md:flex-row justify-evenly">
            <NuxtLink v-for="link in links" 
                :to="{ path: localePath('/'+link.url), hash:link.hash }"
                class="border-solid text-[#800101] font-semibold bg-[#fed500] rounded-lg px-6 py-2 m-2 text-center">
                {{ link.text }}</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
const route = useRoute();

const props = defineProps({
    title: String,
    description: String,
    links:Array,
    hash:String,
})
</script>