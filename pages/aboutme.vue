<template>
    <div class="flex flex-col lg:flex-row md:flex-nowrap">
        <div>
            <div class="p-8 flex flex-col-reverse md:flex-row md:flex-nowrap">
                <div class="md:w-1/3 md:mr-2">
                    <NuxtImg src="/img/thea-fort.jpeg" alt="Théa Fort" class="rounded-lg" />
                </div>
                <div class="md:max-w-2/3">
                    <p class="mb-8"> {{ $t("aboutMe.description") }} </p>
                    <p class="mb-8"> {{ $t("aboutMe.riasec") }} </p>
                </div>
            </div>
            <div class="p-8">
                <h2 class="font-bold text-xl text-center">{{ $t("aboutMe.hobbies.title") }}</h2>

                <div class="flex flex-col md:flex-row">
                    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl my-8 md:m-4 md:p-8 md:w-1/3">
                        <Plane class="mx-auto" color="#800101"/>
                        <h3 class="m-4 md:mt-8 font-bold text-center">{{ $t("aboutMe.hobbies.travelling.title") }}</h3>
                        <p class="p-2">{{ $t("aboutMe.hobbies.travelling.description") }}</p>
                    </div>
                    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl my-8 md:m-4 md:p-8 md:w-1/3">
                        <BookOpenText class="mx-auto" color="#800101"/>
                        <h3 class="m-4 md:mt-8 font-bold text-center">{{ $t("aboutMe.hobbies.reading.title") }}</h3>
                        <p class="p-2">{{ $t("aboutMe.hobbies.reading.description") }}</p>
                    </div>
                    <div class="border-solid border-gray-100 border-1 rounded-lg shadow-2xl my-8 md:m-4 md:p-8 md:w-1/3">
                        <Dumbbell class="mx-auto" color="#800101"/>
                        <h3 class="m-4 md:mt-8 font-bold text-center">{{ $t("aboutMe.hobbies.sports.title") }}</h3>
                        <p class="p-2">{{ $t("aboutMe.hobbies.sports.description") }}</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="md:flex md:flex-col p-8 md:border-l-1 md:border-[#800101] md:w-1/3 md:mt-4">
            <SliderExperiences />
            <SliderTrainings />
        </div>
    </div>


</template>

<script setup>
import { Plane } from 'lucide-vue-next';
import { BookOpenText } from 'lucide-vue-next';
import { Dumbbell } from 'lucide-vue-next';




</script>
