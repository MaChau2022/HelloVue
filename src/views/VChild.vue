<template>
    <form>
        <div v-bind="$attrs">
            <b>name: </b>
            <span>{{ name }}</span>
            <button @click="$emit('hello', $event.target.innerText)">click me</button>
        </div>
        <div>
            <b>age: </b>
            <span>{{  age }}</span>
        </div>
        <div>
            <b>color: </b>
            <span>{{ color }}</span>
        </div>
        <div>
            <b>dress: </b>
            <span>{{ dress }}</span>
        </div>
    </form>
</template>

<script setup>
defineProps(['name', 'age', 'color', 'dress'])
defineEmits(['hello'])
defineOptions({
  inheritAttrs: false
})

</script>
    
<style scoped>
</style>