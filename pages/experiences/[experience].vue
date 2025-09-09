<template>
    <h1 class="mt-8 text-center font-extrabold text-2xl">{{ $t(i18nRoot + '.company') }}</h1>
    <div class="grid md:grid-cols-3 gap-4 m-16">
        <div
            class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:col-span-2 md:row-span-1">
            <h3 class="font-bold pb-4">Missions</h3>
            <ul class="list-disc list-inside">
                <li>{{ $t(i18nRoot + '.missions.mission1') }} </li>
                <li>{{ $t(i18nRoot + '.missions.mission2') }} </li>
                <li>{{ $t(i18nRoot + '.missions.mission3') }} </li>
            </ul>
        </div>

        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4">
            <h3 class="font-bold pb-4">{{ $t('general.aboutCompanyTitle') }}</h3>
            <p>{{ $t(i18nRoot + '.aboutCompany') }}</p>
        </div>
        <div
            class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:col-span-2 md:row-span-1">
            <h3 class="font-bold pb-4">Techonologies utilisées</h3>
            <p>{{ $t(i18nRoot + '.aboutCompany') }}</p>
        </div>
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4">
            <h3 class="font-bold pb-4">{{ $t('general.duration') }}</h3>
            <p>{{ $t(i18nRoot + '.duration') }}</p>
        </div>

    </div>
    <section class="px-16 ">
        <h2 class="mt-8 text-center font-extrabold text-xl">{{$t('general.creations')}}</h2>
        <div>
            <NuxtImg :src='`/img/realisations/${Experience}/crea1.jpeg`' alt="img1"/>
        </div>
    </section>

</template>

<script setup>

const route = useRoute()
const Experience = route.params.experience
const i18nRoot = ref("experiences." + Experience)



</script>