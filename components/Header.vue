<template >
    <div id="top" class="flex flex-col-reverse flex-wrap items-center my-6">
        <h1 class="text-2xl font-bold">Théa Fort</h1>
        <div class="flex justify-center">
            <NuxtImg src="/img/logo.png" class="w-24"/>
        </div>
    </div>

    <nav class="flex justify-around flex-row text-right text-white bg-[#800101]">
        <NuxtLink :to="localePath('/')">{{ $t("nav.home") }}</NuxtLink>
        <NuxtLink :to="localePath('/work')">{{ $t("nav.portfolio") }}</NuxtLink>
        <NuxtLink :to="localePath('/aboutme')">{{ $t("nav.about") }}</NuxtLink>
        <SwitchLocalePathLink locale="fr" v-if="switchLanguage">Français</SwitchLocalePathLink>
        <SwitchLocalePathLink locale="en" v-else>English</SwitchLocalePathLink>


    </nav>


</template>

<script setup>

const localePath = useLocalePath();
const route = useRoute();

function displaySwitchLanguage() {
    if (route.path.includes('/en')) {
        return true
    }
}

/* computed = permet de changer dynamiquement, réagit aux changements de dépendances  */
const switchLanguage=computed(displaySwitchLanguage)

</script>