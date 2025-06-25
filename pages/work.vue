<template>

    <h1 class="text-2xl font-bold text-center">Portfolio</h1>
    <select id="ExperienceSelector" v-model="tagSelector">
        <option value="all">All</option>
        <option value="nineteen">(nineteen)²</option>
        <option value="pvv">Pays Voironnais Volley</option>
        <option value="epage">Epage de la Bourbre</option>
    </select>


    <div v-for="object in objectFiltered">
        <Portfolio />
    </div>


    <!--     <hr class="w-1/2 mx-auto border-gray-100">

    <p class="text-center">{{ $t("portfolio.title") }}</p>
    <div class="flex flex-row flex-nowrap justify-evenly pt-4">
        <div class="flex flex-col align-center">
            <button @click="comm = !comm">
                <img src="~/public/img/comm.png"
                    class="p-4 w-1/2 mx-auto border-solid border-black border-1 rounded-full">
            </button>
            <p class="text-sm text-center">{{ $t("portfolio.comm.question") }}</p>
        </div>
        <div class="flex flex-col align-center">
            <button @click="dev = !dev">
                <img src="~/public/img/dev.png"
                    class="p-4 w-1/2 mx-auto border-solid border-black border-1 rounded-full">
            </button>
            <p class="text-sm text-center">{{ $t("portfolio.dev.question") }}</p>
        </div>
        <div class="flex flex-col align-center">
            <button @click="curious = !curious">
                <img src="~/public/img/all.png"
                    class="p-4 w-1/2 mx-auto border-solid border-black border-1 rounded-full">
            </button>
            <p class="text-sm text-center">{{ $t("portfolio.curious.question") }}</p>
        </div>
    </div>
    <hr class="w-1/2 mx-auto border-gray-150">

    <div v-if="comm">
        <h1 class="font-bold text-center">{{ $t("portfolio.comm.title") }}</h1>
    </div>
    <div v-if="dev">
        <h1 class="font-bold text-center">{{ $t("portfolio.dev.title") }}</h1>
    </div>
    <div v-if="curious">
        <h1 class="font-bold text-center">{{ $t("portfolio.curious.title") }}</h1>
    </div>
 -->
</template>

<script setup>
const tagSelector = ref("all")

const objectsTest = [
    {
        "id": 1,
        "title": "dtc",
        "tag": "bjr"
    },
    {
        "id": 2,
        "title": "pvv",
        "tag": ["bye", "aurevoir"]
    },
]

const objectFiltered = computed(() => {
    if (tagSelector.value === "all") {
        return objectsTest
    } else {
        return objectsTest.filterd(object => object.tags.includes(tagSelector.value))
    }

})





/* const comm = ref(false)
const dev = ref(false)
const curious = ref(false)
 */
</script>
