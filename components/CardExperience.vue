<template>
  <div class="w-full flex-shrink-0 px-6">
    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl">
      <h3 class="font-bold text-center pb-2">{{ title }}</h3>

      <p class="text-xs pt-2 pl-2">{{ company }} - {{ date }}</p>
      <p class="p-2">{{ description }}</p>
      <div class="text-center">
        <NuxtLink :to="'/experiences/{{ id }}'" class="p-2 rounded-lg bg-[#800101] text-white">En savoir
          plus
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  id: String,
  title: String,
  company: String,
  date: String,
  description: String
})

console.log(props.id)


</script>