<template>
    <div class="inline">
        <div @click="update">{{ modelValue }}</div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
    },
    data() {
        return {
            cnt: 0
        }
    },
    methods: {
        update() {
            this.cnt += 1;
            this.$emit('update:modelValue', this.modelValue + this.cnt)
        }
    }
} 
</script>


<style scoped>
.inline {
    display: inline-block;
}

</style>