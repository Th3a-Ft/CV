<template>
    <Banner :title="$t('aboutMe.title')" :description="$t('aboutMe.description')" :links="[
        { 'url': '', 'text': 'Accueil' },
        { 'url': '', 'text': 'Accueil' },
        { 'url': '', 'text': 'Accueil' }]" />


    <div class="ml-8">
        <h2 class="font-bold text-xl text-center mb-4">{{ $t("aboutMe.riasec.title") }}</h2>
        <p class="mb-8"> {{ $t("aboutMe.riasec.description") }} </p>
    </div>
    <div class="flex flex-col lg:flex-row md:flex-nowrap">

        <div class="p-8 flex flex-col-reverse md:flex-row md:flex-nowrap">
            <div class="md:mr-2">
                <NuxtImg src="/img/thea-fort.jpeg" alt="Théa Fort" class="rounded-lg" />
            </div>

            <div class="flex flex-col">


                <h2 class="font-bold text-xl text-center">{{ $t("aboutMe.hobbies.title") }}</h2>
                <div class="flex flex-col md:flex-row">
                    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl my-8 md:m-4 p-8 md:w-1/3">
                        <Plane class="mx-auto" color="#800101" />
                        <h3 class="m-4 md:mt-8 font-bold text-center">{{ $t("aboutMe.hobbies.travelling.title") }}
                        </h3>
                        <p class="p-2">{{ $t("aboutMe.hobbies.travelling.description") }}</p>
                    </div>
                    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl my-8 md:m-4 p-8 md:w-1/3">
                        <BookOpenText class="mx-auto" color="#800101" />
                        <h3 class="m-4 md:mt-8 font-bold text-center">{{ $t("aboutMe.hobbies.reading.title") }}</h3>
                        <p class="p-2">{{ $t("aboutMe.hobbies.reading.description") }}</p>
                    </div>
                    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl my-8 md:m-4 p-8 md:w-1/3">
                        <Dumbbell class="mx-auto" color="#800101" />
                        <h3 class="m-4 md:mt-8 font-bold text-center">{{ $t("aboutMe.hobbies.sports.title") }}</h3>
                        <p class="p-2">{{ $t("aboutMe.hobbies.sports.description") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { Plane } from 'lucide-vue-next';
import { BookOpenText } from 'lucide-vue-next';
import { Dumbbell } from 'lucide-vue-next';




</script>
