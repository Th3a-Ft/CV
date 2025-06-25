<template>

    <h1 class="text-2xl font-bold text-center">Portfolio</h1>
    <select id="ExperienceSelector" v-model="tagSelector">
        <option value="all">All</option>
        <option value="nineteen">(nineteen)²</option>
        <option value="pvv">Pays Voironnais Volley</option>
        <option value="epage">Epage de la Bourbre</option>
    </select>


    <div >
<!--         {{ object.title }}
        {{ object.tags }}
 -->        <div class="flex flex-row-reverse flex-wrap md:flex-nowrap justify-evenly">
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.social.title')"
                :description="$t('portfolio.social.description')" :tags="['pvv','bye']" :filtre="objectFiltered"/>
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.graphic.title')"
                :description="$t('portfolio.graphic.description')" :tags="['pvv','bye']" :filtre="objectFiltered"/>
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.newsletter.title')"
                :description="$t('portfolio.newsletter.description')" :tags="['pvv','bye']" :filtre="objectFiltered"/>
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.development.title')"
                :description="$t('portfolio.development.description')" :tags="['nineteen','bye']" :filtre="objectFiltered"/>
        </div>
    </div>

</template>

<script setup>
const tagSelector = ref("all")

const allTags = [
    "nineteen", "pvv", "bye"
]

const objectFiltered = computed(() => {
    if (tagSelector.value === "all") {
        return allTags
    } else {
        console.log("ufuhuf"+allTags.filter(object => tagSelector.value.includes(object)))
        return allTags.filter(object => tagSelector.value.includes(object))
    }

})





/* const comm = ref(false)
const dev = ref(false)
const curious = ref(false)
 */
</script>
