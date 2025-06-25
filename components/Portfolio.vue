<template>
    <div class="flex flex-row-reverse flex-wrap md:flex-nowrap justify-evenly">
        <!--         <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.social.title')"
            :description="$t('portfolio.social.description')" v-for="(tag, index) in tags" :tags="$t('portfolio.tags')"
            class="w-1/2" />
 -->
        <div v-for="object in filteredExperience">
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.social.title')"
                :description="$t('portfolio.social.description')" />
        </div>

        <div v-for="object in filteredGraphic">
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.graphic.title')"
                :description="$t('portfolio.graphic.description')" />
        </div>
        <div v-for="object in filteredNewsletter">
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.newsletter.title')"
                :description="$t('portfolio.newsletter.description')" />
        </div>
        <div v-for="object in filteredDevelopment">
            <CardPortfolio :url="'/img/comm.png'" :title="$t('portfolio.development.title')"
                :description="$t('portfolio.development.description')" />
        </div>

    </div>
</template>
<script setup>

const objectsTest = [
    {
        "id": 1,
        "title": "dtc",
        "tag": "pvv"
    },
    {
        "id": 2,
        "title": "pvv",
        "tag": ["pvv", "epage"]
    },
]

const filteredExperience = objectsTest.filter((objectsTest) => {
    if (objectsTest.tag.includes("pvv")) {
        return objectsTest.tag.includes("pvv")
    }
    if (objectsTest.tag.includes("epage")) {
        return objectsTest.tag.includes("epage")
    }
    if (objectsTest.tag.includes("dtc")) {
        return objectsTest.tag.includes("dtc")
    }
})



const filteredPVV = objectsTest.filter((objectsTest) => {
    return objectsTest.tag.includes("pvv")
})

const filteredDTC = objectsTest.filter((objectsTest) => {
    return objectsTest.tag.includes("epage")
})


</script>