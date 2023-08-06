<script setup>
import { inject } from 'vue'

const nothing = "default"
const date = inject('date')

</script>

<template>
    <h5>slot begin {{ date.year }}-{{ date.month }}-{{ date.date }}</h5>
    <slot 
        name="header"
        title="HELLO, WORLD"
        author="iduck"
    >{{ nothing }}</slot>
    <slot>{{ nothing }}</slot>
    <slot name="footer">{{ nothing }}</slot>
    <h5>slot end</h5>
</template>

<style>
</style>