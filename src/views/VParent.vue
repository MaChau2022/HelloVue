<template>
    <h1>Parent-Child</h1>
    <VChild
        @hello="handleHello"
        v-bind="iduck"
        class="duckInfo"
    />
</template>

<style scoped>
</style>

<script setup>
import VChild from './VChild.vue';

const handleHello = (...args) => {
    console.log(...args)
}

const iduck = {
    name: "iduck",
    age: 15,
    dress: "green",
    color: "yellow"
}

</script>