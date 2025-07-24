<template>
    <h1 class="mt-8 text-center font-extrabold text-2xl">{{ $t(i18nRoot+ '.company') }}</h1>
    <div class="grid md:grid-cols-3 gap-4 m-16">
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:col-span-2 md:row-span-2">
            <h3 class="font-bold pb-4">Missions</h3>
<!--             <BentoMissions
            :missions="$t(i18nRoot + '.missions')"
            />
 -->    </div>
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:row-span-3">
            <h3 class="font-bold pb-4">{{ $t('general.aboutCompanyTitle') }}</h3>
            <p>{{ $t(i18nRoot +'.aboutCompany') }}</p>
        </div>
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:col-start-3">
            <h3 class="font-bold pb-4">{{ $t('general.duration') }}</h3>
            <p>{{ $t(i18nRoot +'.duration') }}</p>
        </div>

        
        <div class="border-solid border-gray-300 border-1 rounded-lg md:hover:bg-gray-100 p-4 md:col-span-2 md:row-span-2 md:row-start-3">
            <h3 class="font-bold pb-4">{{ $t("general.recommendation") }}</h3>
            <NuxtImg src="/img/recommendations/laure-disanto.png"/>
            <div class="mt-4 text-right">
                <NuxtLink to="https://www.linkedin.com/in/thea-fort/" target="_blanck" class="border-solid text-[#800101] font-semibold bg-[#fed500] rounded-full px-6 py-2 m-2 text-center">{{ $t("general.btnRecommendation") }}</NuxtLink>
            </div>

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
import { ListCheck } from 'lucide-vue-next'


const route = useRoute()
const Experience=route.params.experience
const i18nRoot = ref("experiences." + Experience)



</script>