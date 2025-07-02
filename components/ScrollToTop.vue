<template>
    <div ref="scrollTopButton" class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition">
        <div>
            <UButton>
                <NuxtLink :to="{ path: localePath('/'), hash: '#top' }">
                    <img src="public/img/arrow.png"
                        class="w-8 border-4 rounded-full border-black hover:border-[#fed500]">
                </NuxtLink>
            </UButton>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
const route = useRoute();

let scrollTopButton = ref(null);

const handleScroll = () => {
    /*SI le scroll de la window est sup à 150 le btn s'affiche */
    if (window.scrollY > 150) {
        scrollTopButton.value.classList.remove("invisible");
    } else {
        scrollTopButton.value.classList.add("invisible");
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>