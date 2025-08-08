<template>
    <div>
         <h3 class="font-bold pb-4">Missions</h3>
<!--         <ul v-for="(mission, i) in missions" class="list-disc list-inside px-4">
            <li>{{ mission }}</li>
        </ul> -->

        <!-- {{ missions }} -->
    </div>

</template>

<script setup>
const props=defineProps([
    missions={
        type:Array,
        required:true
    }
])

</script>