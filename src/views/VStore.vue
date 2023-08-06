<template>
    <h1>Vuex</h1>
    <div>
        <b>name: </b>
        <span>{{ $store.getters.upperName }}</span>
    </div>
    <div>
        <b>age: </b>
        <span>{{ $store.state.age }}</span>
    </div>
    <div>
        <b>color: </b>
        <span>{{ $store.state.color }} </span>
        <select @change="handleChange" :style="style">
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
        </select>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const handleChange = (e) => {
    console.log(e.target.value);
    // store.commit('changeColor', e.target.value)
    store.dispatch('changeColorAsync', e.target.value)
}

const style = {
    marginLeft: '10px'
}
</script>

<style scoped>

</style>