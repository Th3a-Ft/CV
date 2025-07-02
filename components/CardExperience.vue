<template>
    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl m-8 pb-8 px-8">
        <h3 class="m-4 md:mt-8 font-bold text-center">{{ title }}</h3>
        <p class="text-xs pt-2 pl-2">{{ company }} - {{ date }}</p>
        <p class="p-2">{{ description }}</p>
        <div class="text-center mt-8">
            <NuxtLink :to="localePath('/experiences/' + id)" class="p-2 rounded-lg bg-[#800101] text-white">{{ $t('general.buttonKnowMore') }}
            </NuxtLink>
        </div>
    </div>

</template>

<script setup>
const localePath = useLocalePath();

const props = defineProps({
    id: String,
    title: String,
    company: String,
    date: String,
    description: String
})


</script>