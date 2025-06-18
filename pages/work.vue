<template>
    <Header />
    <h1 class="text-2xl font-bold text-center">Portfolio</h1>
    <hr class="w-1/2 mx-auto border-gray-100">

    <p class="text-center">Vous êtes ?</p>
    <div class="flex flex-row flex-nowrap justify-evenly pt-4">
        <div class="flex flex-col align-center">
            <button @click="comm = !comm">
                <img src="~/public/img/comm.png"
                    class="p-4 w-1/2 mx-auto border-solid border-black border-1 rounded-full">
            </button>
            <p class="text-sm text-center">Un pro de la comm ?</p>
        </div>
        <div class="flex flex-col align-center">
            <button @click="dev = !dev">
                <img src="~/public/img/dev.png"
                    class="p-4 w-1/2 mx-auto border-solid border-black border-1 rounded-full">
            </button>
            <p class="text-sm text-center">Un pro du dev ?</p>
        </div>
        <div class="flex flex-col align-center">
            <button @click="curious = !curious">
                <img src="~/public/img/all.png"
                    class="p-4 w-1/2 mx-auto border-solid border-black border-1 rounded-full">
            </button>
            <p class="text-sm text-center">Juste curieux</p>
        </div>
    </div>
    <hr class="w-1/2 mx-auto border-gray-150">

    <div v-if="comm">
        <h1 class="font-bold text-center">Portfolio Comm</h1>
    </div>
    <div v-if="dev">
        <h1 class="font-bold text-center">Portfolio Dev</h1>
    </div>
    <div v-if="curious">
        <h1 class="font-bold text-center">Curieux</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const comm = ref(false)
const dev = ref(false)
const curious = ref(false)

</script>
