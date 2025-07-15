<template>
    <h1 class="mt-8 text-center font-extrabold text-2xl">Title</h1>
    <div class="grid md:grid-cols-3 gap-4 m-16">
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:col-span-2 md:row-span-2 flex">
            <ListChecks color="#fed500" class="border-solid border-gray-400 border-1 rounded-lg mr-16"/>
            <div>
                <h3 class="font-bold pb-4">Missions</h3>
                <ul v-for="(mission, i) in missions" class="list-disc list-inside px-4">
                    <li>{{ mission }}</li>
                </ul>
            </div>
        </div>
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 ">Durée</div>
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:row-span-3">+ sur l'entreprise</div>
        
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:col-span-2 md:row-span-2">Ref</div>
    </div>
    <section>
        <h2>Réalisations</h2>
    </section>
    
</template>

<script setup>
import { ListChecks } from 'lucide-vue-next'

const missions=["mission1","mission2"]
const route = useRoute()
const Experience=route.params.experience
const i18nRoot = ref("experiences" + Experience)



</script>