<template>
    <h1>V-Slot</h1>
    <VSlot>
        <template v-slot:header="header">
            <b>{{ header.title }}</b> {{ header.author }}
        </template>
        <div>main</div>
        <template #footer>footer</template>
    </VSlot>
</template>

<style scoped> 

</style>

<script>
    import VSlot from '../components/VSlot.vue'
    import { provide } from 'vue'

    export default {
        components: {
            VSlot
        },
        setup() {
            provide('date', {
                year: 2023,
                month: 12,
                date: 31
            })
        }
    }
</script>