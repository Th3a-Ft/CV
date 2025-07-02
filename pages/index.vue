<template>
    <div class="h-150 py-10 md:py-25 bg-[#800101] text-white mb-16">
        <div>
            <h1 class="mt-8 text-center font-extrabold text-2xl">{{ $t('title.index') }}</h1>
            <p class="text-center m-8"> {{ $t('general.descriptionIndex') }} </p>
        </div>
        <div class="flex flex-col w-1/2 mx-auto md:flex-row justify-evenly">
            <NuxtLink :to="{ path: localePath('/'), hash: '#skills' }"
                class="border-solid text-[#800101] font-semibold bg-[#fed500] rounded-full px-6 py-2 m-2 text-center">
                {{ $t('skills.titleSection') }}</NuxtLink>
            <NuxtLink :to="{ path: localePath('/'), hash: '#experiences' }"
                class="border-solid text-[#800101] font-semibold bg-[#fed500] rounded-full px-6 py-2 m-2 text-center">
                {{ $t('title.experiences') }}</NuxtLink>
            <NuxtLink :to="{ path: localePath('/'), hash: '#trainings' }"
                class="border-solid text-[#800101] font-semibold bg-[#fed500] rounded-full px-6 py-2 m-2 text-center">
                {{ $t('title.trainings') }}</NuxtLink>


        </div>
    </div>
    <h2 class="text-center font-bold text-xl" id="skills">{{ $t('skills.titleSection') }}</h2>
    <div class="flex flex-row flex-wrap lg:flex-wrap lg:justify-evenly">
        <CardSkills
            :skills="[$t('skills.dev.languages'), $t('skills.dev.algorithm'), $t('skills.dev.agile'), 'PHP (Laravel)', 'Git']"
            :title="$t('skills.dev.titleCard')" class="w-full lg:w-1/4" />

        <CardSkills :skills="['Wordpress', 'Webself']" :title="$t('skills.nocode.titleCard')" class="w-full lg:w-1/4" />

        <CardSkills :skills="['Canva', 'Photoshop', 'Illustrator', 'Inkscape', 'Capcut']"
            :title="$t('skills.software.titleCard')" class="w-full lg:w-1/4" />


        <CardSkills :skills="['Facebook', 'Instagram', 'Linkedin']" :title="$t('skills.socialMedia.titleCard')"
            class="w-full lg:w-1/4" />


        <CardSkills :skills="['Brevo', 'Mailchimp']" :title="$t('skills.newsletter.titleCard')"
            class="w-full lg:w-1/4" />

        <CardSkills :skills="[$t('skills.languages.english')]" :title="$t('skills.languages.titleCard')"
            class="w-full lg:w-1/4" />

    </div>

    <div class="my-16">
        <hr class="w-1/2 mx-auto my-8 border-[#fed500]">

        <h2 class="text-center font-bold text-xl" id="experiences">{{ $t('title.experiences') }}</h2>

        <div class="flex flex-row flex-wrap lg:flex-wrap lg:justify-evenly">
            <CardExperience :id="$t('experiences.dtc.id')" :title="$t('experiences.dtc.title')"
                :company="$t('experiences.dtc.company')" :date="$t('experiences.dtc.date')"
                :description="$t('experiences.dtc.description')" class="w-full lg:w-1/4" />
            <CardExperience :id="$t('experiences.pvv.id')" :title="$t('experiences.pvv.title')"
                :company="$t('experiences.pvv.company')" :date="$t('experiences.pvv.date')"
                :description="$t('experiences.pvv.description')" class="w-full lg:w-1/4" />
            <CardExperience :id="$t('experiences.epage.id')" :title="$t('experiences.epage.title')"
                :company="$t('experiences.epage.company')" :date="$t('experiences.epage.date')"
                :description="$t('experiences.epage.description')" class="w-full lg:w-1/4" />

        </div>
    </div>
    <div class="my-16">
        <hr class="w-1/2 mx-auto my-8 border-[#fed500]">

        <h2 class="text-center font-bold text-xl" id="trainings">{{ $t('title.trainings') }}</h2>
        <div class="flex flex-row flex-wrap lg:flex-wrap lg:justify-evenly">
            <CardTraining :title="$t('trainings.campus.title')" :school="$t('trainings.campus.school')"
                :date="$t('trainings.campus.date')" :url="$t('trainings.campus.url')" class="w-full lg:w-1/4" />
            <CardTraining :title="$t('trainings.master.title')" :school="$t('trainings.master.school')"
                :date="$t('trainings.master.date')" :url="$t('trainings.master.url')" class="w-full lg:w-1/4" />

            <CardTraining :title="$t('trainings.dut.title')" :school="$t('trainings.dut.school')"
                :date="$t('trainings.dut.date')" :url="$t('trainings.dut.url')" class="w-full lg:w-1/4" />

        </div>
    </div>

    <ScrollToTop />



</template>

<script setup>

const localePath = useLocalePath();
const route = useRoute();



</script>
