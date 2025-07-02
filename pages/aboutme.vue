<template>
    <div class="flex flex-col lg:flex-row">
        <div class="p-8">
            <p class="mb-8"> {{ $t("aboutMe.description") }} </p>
            <p class="mb-8"> {{ $t("aboutMe.riasec") }} </p>
            <h2 class="font-bold text-xl">{{ $t("aboutMe.hobbies.title") }}</h2>
            <p class="mt-4 font-semibold">{{ $t("aboutMe.hobbies.travelling.title") }} - </p>
            <p>{{ $t("aboutMe.hobbies.travelling.description") }}</p>
            <p class="mt-4 font-semibold">{{ $t("aboutMe.hobbies.reading.title") }} - </p>
            <p>{{ $t("aboutMe.hobbies.reading.description") }}</p>
            <p class="mt-4 font-semibold">{{ $t("aboutMe.hobbies.sports.title") }} - </p>
            <p>{{ $t("aboutMe.hobbies.sports.description") }}</p>


        </div>
        <div class="md:flex md:flex-col p-8 md:border-l-1 md:border-[#800101]">
            <SliderExperiences />
            <SliderTrainings />
        </div>
    </div>

</template>

<script setup>




</script>
