<template>
    <h1>V-Condition</h1>
    <div>
        <div>
            <b>v-if: </b>
            <span v-if="state.flag">flag === true </span>
            <span v-if="!state.flag">flag === false </span>
            <button @click="reverse">reverse</button>
        </div>
        <div>
            <b>v-show: </b>
            <span v-show="state.flag">flag === true </span>
            <span v-show="!state.flag">flag === false </span>
            <button @click="reverse">reverse</button>
        </div>
        <div>
            <b>v-for: </b>
            <span v-for="item in state.list" :key="item">
                {{item}},
            </span>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
    flag: true,
    list: ['foo', 'bar', 'baz', 'iduck']
})

function reverse() {
    state.flag = !state.flag
}

</script>