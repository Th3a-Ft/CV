<template>
<!--     <div class="bg-[#800101] text-white">
 -->    <div :class="[bgColor ? 'bg-black' : 'bg-[#800101] text-white' ]">


        <nav class="flex flex-col justify-around text-center text-white">
            <NuxtLink to="mailto:thea.fort@gmail.com">thea.fort@gmail.com</NuxtLink>
            <NuxtLink to="https://www.linkedin.com/in/thea-fort/" target="_blanck">LinkedIn</NuxtLink>
            <NuxtLink to="https://github.com/Th3a-Ft" target="_blanck">GitHub</NuxtLink>
        </nav>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const route = useRoute()
const bgColor = computed(() => {
    return route.name.includes('test')

})
</script>
