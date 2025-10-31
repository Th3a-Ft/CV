<template>
    <div class="card">
        <h3 class="m-4 md:mt-8 font-bold text-center">{{ title }}</h3>
        <p class="text-xs pt-2 pl-2">{{ school }} - {{ date }}</p>
        <div class="text-center mt-8">
            <NuxtLink :to="`${url}`" target="_blank" class="p-2 rounded-lg bg-[#800101] text-white">{{ $t('general.buttonKnowMore') }}
            </NuxtLink>
        </div>
    </div>

</template>

<script setup>
const localePath = useLocalePath();

const props = defineProps({
    id: String,
    title: String,
    school: String,
    date: String,
    url: String
})


</script>