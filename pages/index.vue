<template>
    <h1 class="mt-8 text-center font-extrabold text-2xl">{{ $t('title.index') }}</h1>
    <p class="text-center m-8"> {{ $t('general.descriptionIndex') }} </p>
    <h2 class="text-center font-bold text-xl"></h2>
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









</template>

<script setup>




</script>
