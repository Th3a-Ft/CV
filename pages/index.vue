<template>
    <Banner
    :title="$t('title.index')"
    :description="$t('general.descriptionIndex')"
    :links="[
        {'url':'','hash':'#skills','text':$t('skills.titleSection')},
        {'url':'','hash':'#experiences','text':$t('title.experiences')},
        {'url':'','hash':'#trainings','text':$t('title.trainings')}]"/>

    <h2 class="text-center font-bold text-xl" id="skills">{{ $t('skills.titleSection') }}</h2>
    <div class="flex flex-row flex-wrap lg:flex-wrap lg:justify-evenly">
        <CardSkills
            :skills="['Javascript - Vue.js & Nuxt', 'Java - Spring Boot', 'PHP - Laravel', 'Python', 'HTML & CSS']"
            :title="$t('skills.dev.titleCard')" 
            class="w-full lg:w-1/4" />
        <CardSkills 
            :skills="['Git & GitHub',$t('skills.collaborate.agile'),$t('skills.collaborate.project') ]" 
            :title="$t('skills.collaborate.titleCard')"
            class="w-full lg:w-1/4" />
        <CardSkills 
            :skills="['Test Driven Devlopment', 'Pytest']"
            :title="$t('skills.test.titleCard')" 
            class="w-full lg:w-1/4" />
        <CardSkills 
            :skills="['Wordpress', 'Webself']" 
            :title="$t('skills.nocode.titleCard')" 
            class="w-full lg:w-1/4" />
        <CardSkills :skills="[$t('skills.languages.english')]" :title="$t('skills.languages.titleCard')"
            class="w-full lg:w-1/4" />
        <CardSkills 
            :skills="[$t('skills.other.socialmedia'), $t('skills.other.event'),$t('skills.other.rp')]" 
            :title="$t('skills.other.titleCard')"
            class="w-full lg:w-1/4" />



    </div>

    <div class="my-16">
        <hr class="w-1/2 mx-auto my-8 border-[#fed500]">

        <h2 class="text-center font-bold text-xl" id="experiences">{{ $t('title.experiences') }}</h2>

        <div class="flex flex-row flex-wrap lg:flex-wrap lg:justify-evenly">
            <CardExperience 
                :id="$t('experiences.nineteen.id')" 
                :title="$t('experiences.nineteen.title')"
                :company="$t('experiences.nineteen.company')" 
                :date="$t('experiences.nineteen.date')"
                :description="$t('experiences.nineteen.description')" 
                class="w-full lg:w-1/4" />
            <CardExperience 
                :id="$t('experiences.pvv.id')" 
                :title="$t('experiences.pvv.title')"
                :company="$t('experiences.pvv.company')" 
                :date="$t('experiences.pvv.date')"
                :description="$t('experiences.pvv.description')" 
                class="w-full lg:w-1/4" />
            <CardExperience 
                :id="$t('experiences.epage.id')" 
                :title="$t('experiences.epage.title')"
                :company="$t('experiences.epage.company')" 
                :date="$t('experiences.epage.date')"
                :description="$t('experiences.epage.description')" 
                class="w-full lg:w-1/4" />

        </div>
    </div>
    <div class="my-16">
        <hr class="w-1/2 mx-auto my-8 border-[#fed500]">

        <h2 class="text-center font-bold text-xl" id="trainings">{{ $t('title.trainings') }}</h2>
        <div class="flex flex-row flex-wrap lg:flex-wrap lg:justify-evenly">
            <CardTraining 
                :title="$t('trainings.campus.title')" 
                :school="$t('trainings.campus.school')"
                :date="$t('trainings.campus.date')" 
                :url="'https://le-campus-numerique.fr/formations-developpeur2/'" 
                class="w-full lg:w-1/4" />
            <CardTraining 
                :title="$t('trainings.master.title')" 
                :school="$t('trainings.master.school')"
                :date="'2020 - 2022'" 
                :url="'https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-information-communication-IBC8S6FT/parcours-information-communication-publique-et-medias-IBC8V4V7.html'" 
                class="w-full lg:w-1/4" />
            <CardTraining 
                :title="$t('trainings.licence.title')" 
                :school="$t('trainings.licence.school')"
                :date="'2019 - 2020'" 
                :url="'https://www.isthia.fr/formation/licence-professionnelle-ddtecet/'" 
                class="w-full lg:w-1/4" />
            <CardTraining 
                :title="$t('trainings.dut.title')" 
                :school="$t('trainings.dut.school')"
                :date="'2017 - 2019'" 
                :url="'https://www.iut.univ-st-etienne.fr/fr/etudier-a-l-iut-de-saint-etienne/nos-formations/les-b-u-t/b-u-t-gestion-administrative-et-commerciale-des-organisations.html'" 
                class="w-full lg:w-1/4" />

        </div>
    </div>

    



</template>

<script setup>

const localePath = useLocalePath();
const route = useRoute();



</script>
