<template>

    <h1 class="text-2xl font-bold text-center">Portfolio</h1>
    <div class="ml-6 border-solid border-gray-100 border-1 rounded-lg w-1/5 text-center">
        <label for="ExperienceSelector">{{ $t("general.filter") }}</label>
        <br>
        <select class="md-w-1/3 border-solid border-gray-150 border-1 rounded-lg" id="ExperienceSelector" v-model="tagSelector">
            <option value="all">{{ $t("general.allFilter") }}</option>
            <option value="nineteen">(nineteen)²</option>
            <option value="pvv">Pays Voironnais Volley</option>
            <option value="epage">Epage de la Bourbre</option>
        </select>
    </div>

    <div>
        <div class="flex flex-row-reverse flex-wrap md:flex-wrap justify-evenly">
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.social.title')"
                :description="$t('portfolio.social.description')" :tags="['pvv', 'epage']" :filterProps="TagFiltered" />
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.graphic.title')"
                :description="$t('portfolio.graphic.description')" :tags="['pvv', 'epage']"
                :filterProps="TagFiltered" />
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.newsletter.title')"
                :description="$t('portfolio.newsletter.description')" :tags="['pvv']" :filterProps="TagFiltered" />
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.development.title')"
                :description="$t('portfolio.development.description')" :tags="['nineteen']"
                :filterProps="TagFiltered" />
        </div>
    </div>

</template>

<script setup>
/*Par def : tagSelector.value=all*/
const tagSelector = ref("all")

/*Ensemble des tags disponibles pour ajouter aux cards*/
const allTags = [
    "nineteen", "pvv", "epage"
]

/** fct permettant de filtrer le contenu affiché suivant tagSelector.value envoyé par le v-form*/
const TagFiltered = computed(() => {
    if (tagSelector.value === "all") {
        return allTags
    } else {
        return allTags.filter(object => tagSelector.value.includes(object))
    }

})





/* const comm = ref(false)
const dev = ref(false)
const curious = ref(false)
 */
</script>
