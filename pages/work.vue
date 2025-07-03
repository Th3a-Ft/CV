<template>

    <h1 class="text-2xl font-bold text-center p-4">Portfolio</h1>
    <div class="ml-6 border-solid border-gray-100 border-1 rounded-lg md:w-1/5 text-center w-2/3 ml-16 mx-16 mt-4 md:mx-auto my-4">
        <label for="ExperienceSelector">{{ $t("general.filter") }}</label>
        <br>
        <select class="md-w-1/3 border-solid border-gray-150 border-1 rounded-lg" id="ExperienceSelector" v-model="tagSelected">
            <option value="all">{{ $t("general.allFilter") }}</option>
            <option value="nineteen">(nineteen)²</option>
            <option value="pvv">Pays Voironnais Volley</option>
            <option value="epage">Epage de la Bourbre</option>
        </select>
    </div>

    <div>
        <div class="flex flex-col-reverse md:flex-row-reverse content-center flex-wrap md:flex-wrap justify-evenly">
            <!-- Si dans tagSelected il y a une des valeurs de [] alors afficher -->
            <CardPortfolio :url="'public/img/comm.png'" :title="$t('portfolio.social.title')"
                :description="$t('portfolio.social.description')" v-if="['all', 'pvv', 'epage'].includes(tagSelected)" />
            <CardPortfolio :url="'public/img/comm.png'" :title="$t('portfolio.graphic.title')"
                :description="$t('portfolio.graphic.description')" v-if="['all','pvv', 'epage'].includes(tagSelected)"
                :filterProps="TagFiltered" />
            <CardPortfolio :url="'public/img/comm.png'" :title="$t('portfolio.newsletter.title')"
                :description="$t('portfolio.newsletter.description')" v-if="['all','pvv'].includes(tagSelected)" />
            <CardPortfolio :url="'public/img/comm.png'" :title="$t('portfolio.development.title')"
                :description="$t('portfolio.development.description')" v-if="['all','nineteen'].includes(tagSelected)"
                :filterProps="TagFiltered"/>
        </div>
    </div>

</template>

<script setup>
/*Par def : tagSelected.value=all*/
const tagSelected = ref("all")

/*Ensemble des tags disponibles pour ajouter aux cards*/
const allTags = [
    "nineteen", "pvv", "epage"
]

/** fct permettant de filtrer le contenu affiché suivant tagSelected.value envoyé par le v-form*/
const TagFiltered = computed(() => {
    if (tagSelected.value === "all") {
        return allTags
    } else {
        return allTags.filter(object => tagSelected.value.includes(object))
    }
})





/* const comm = ref(false)
const dev = ref(false)
const curious = ref(false)
 */
</script>
