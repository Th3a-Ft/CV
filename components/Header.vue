<template>
  <div id="top" class="m-6">
    <div class="flex flex-row flex-nowrap items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/">
        <NuxtImg src="/img/logo.svg" class="w-64" />
      </NuxtLink>

      <!-- Menu hamburger -->
      <button 
        @click="toggleMenu" 
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span 
          class="block w-6 h-0.5 bg-[#800101] transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
        ></span>
        <span 
          class="block w-6 h-0.5 bg-[#800101] transition-all duration-300"
          :class="{ 'opacity-0': isMenuOpen }"
        ></span>
        <span 
          class="block w-6 h-0.5 bg-[#800101] transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
        ></span>
      </button>

      <!-- Menu ordi -->
      <nav class="hidden md:flex justify-around flex-row text-right text-[#800101] basis-full">
        <NuxtLink 
          :to="localePath('/')" 
          class="hover:bg-[#800101] hover:text-white px-4 py-2 transition-colors"
        >
          {{ $t("nav.home") }}
        </NuxtLink>
        <NuxtLink 
          :to="localePath('/work')" 
          class="hover:bg-[#800101] hover:text-white px-4 py-2 transition-colors"
        >
          {{ $t("nav.portfolio") }}
        </NuxtLink>
        <NuxtLink 
          :to="localePath('/aboutme')" 
          class="hover:bg-[#800101] hover:text-white px-4 py-2 transition-colors"
        >
          {{ $t("nav.about") }}
        </NuxtLink>
        <SwitchLocalePathLink 
          locale="fr" 
          v-if="switchLanguage"
          class="hover:bg-[#800101] hover:text-white px-4 py-2 transition-colors"
        >
          Français
        </SwitchLocalePathLink>
        <SwitchLocalePathLink 
          locale="en" 
          v-else
          class="hover:bg-[#800101] hover:text-white px-4 py-2 transition-colors"
        >
          English
        </SwitchLocalePathLink>
      </nav>
    </div>

    <!-- Navigation mobile -->
    <Transition name="slide">
      <nav 
        v-if="isMenuOpen" 
        class="lg:hidden fixed inset-0 bg-white z-40 pt-24 px-6"
      >
        <div class="flex flex-col space-y-6 text-[#800101] text-2xl">
          <NuxtLink 
            :to="localePath('/')" 
            @click="closeMenu"
            class="hover:bg-[#800101] hover:text-white px-4 py-3 transition-colors"
          >
            {{ $t("nav.home") }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/work')" 
            @click="closeMenu"
            class="hover:bg-[#800101] hover:text-white px-4 py-3 transition-colors"
          >
            {{ $t("nav.portfolio") }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/aboutme')" 
            @click="closeMenu"
            class="hover:bg-[#800101] hover:text-white px-4 py-3 transition-colors"
          >
            {{ $t("nav.about") }}
          </NuxtLink>
          <SwitchLocalePathLink 
            locale="fr" 
            v-if="switchLanguage"
            @click="closeMenu"
            class="hover:bg-[#800101] hover:text-white px-4 py-3 transition-colors"
          >
            Français
          </SwitchLocalePathLink>
          <SwitchLocalePathLink 
            locale="en" 
            v-else
            @click="closeMenu"
            class="hover:bg-[#800101] hover:text-white px-4 py-3 transition-colors"
          >
            English
          </SwitchLocalePathLink>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const route = useRoute();
const isMenuOpen = ref(false);

function displaySwitchLanguage() {
  if (route.path.includes('/en')) {
    return true;
  }
  return false;
}

const switchLanguage = computed(displaySwitchLanguage);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

// Fermer le menu lors du changement de route
watch(() => route.path, () => {
  closeMenu();
});
</script>

<style scoped>
/* Animations pour le menu mobile */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>