<template>
    <div class="flex flex-col-reverse flex-wrap items-center my-6">
        <h1 class="text-2xl font-bold">{{$t("bjr")}}</h1>
        <div class="flex justify-center">
            <img src="~/public/img/thea.jpg" class="rounded-full w-1/3">
        </div>
    </div>

    <nav class="flex justify-around flex-row text-right text-white bg-[#800101] mb-2">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/work">Portfolio</NuxtLink>
        <NuxtLink to="/aboutme">A propos de moi</NuxtLink>

    </nav>

</template>