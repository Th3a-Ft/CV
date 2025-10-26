<template>

    <h1 class="text-2xl font-bold text-center p-4">Portfolio</h1>
    <div class="ml-6 border-solid border-gray-100 border-1 rounded-lg md:w-1/5 text-center w-2/3 ml-16 mx-16 mt-4 md:mx-auto my-4">
        <label for="ExperienceSelector">{{ $t("general.filter") }}</label>
        <br>
        <select class="md-w-1/3 border-solid border-gray-150 border-1 rounded-lg pl-4" id="ExperienceSelector" v-model="tagSelected">
            <option value="all">{{ $t("general.allFilter") }}</option>
            <option value="development">{{ $t("portfolio.tags.dev") }}</option>
            <option value="graphisme">{{ $t("portfolio.tags.graphic") }}</option>
            <option value="socialMedia">{{ $t("portfolio.tags.socialMedia") }}</option>
            <option value="evenementiel">{{ $t("portfolio.tags.event") }}</option>

        </select>
    </div>

    <div>
        <div class="grid md:grid-cols-3 gap-8 m-16">
            <!-- Si dans tagSelected il y a une des valeurs de [] alors afficher -->
            <CardPortfolio v-if="['all','development'].includes(tagSelected)"
                :url="'/'"
                :title="'Digital Test Center'"
                :description="$t('portfolio.dtc.description')"
                :skills="['Javascript - Vue.js / Nuxt','Figma']"
                :filterProps="TagFiltered" 
                class="row-span-2"/>

            <CardPortfolio v-if="['all', 'graphisme', 'evenementiel'].includes(tagSelected)"
                :url="'/'" 
                :title="$t('portfolio.social.title')"
                :description="$t('portfolio.social.description')"
                :skills="['Planification','Graphisme','Canva']"

                />
                
            <CardPortfolio v-if="['all','graphisme', 'evenementiel'].includes(tagSelected)"
                :url="'/'" 
                :title="$t('portfolio.graphic.title')"
                :description="$t('portfolio.graphic.description')"
                :skills="[$t('portfolio.graphic.creativity'), $t('portfolio.graphic.responsiveness'),'Inkscape', 'Scribus']"
                :filterProps="TagFiltered" />

            <CardPortfolio v-if="['all','graphisme'].includes(tagSelected)"
                :url="'/'" 
                :title="$t('portfolio.newsletter.title')"
                :description="$t('portfolio.newsletter.description')"  />
        </div>
    </div>

</template>

<script setup>
const localePath = useLocalePath();
const route = useRoute();

/*Par def : tagSelected.value=all*/
const tagSelected = ref("all")

/*Ensemble des tags disponibles pour ajouter aux cards*/
const allTags = [
    "development", "graphisme", "evenementiel"
]

/** fct permettant de filtrer le contenu affiché suivant tagSelected.value envoyé par le v-form*/
const TagFiltered = computed(() => {
    if (tagSelected.value === "all") {
        return allTags
    } else {
        return allTags.filter(object => tagSelected.value.includes(object))
    }
})



</script>
