<template>
    <h1>Vue2 Features</h1>
    <div class="form">
        <div>
            <b>v-data: </b>
            <span v-html="arr.sort((a, b) => a - b).join(',')"></span>
        </div>
        <div>
            <b>v-bind: </b>
            <span v-bind="attr">red</span>
        </div>
        <div>
            <b>v-decor: </b>
            <button :disabled="true">click me</button>
        </div>
        <div>
            <b>v-on: </b>
            <button @[method]="hello">click me</button>
        </div>
        <div>
            <b>v-model: </b>
            <VInput v-model="query" />
        </div>
        <div>
            <b>v-compute: </b>
            {{ upper }}
        </div>
    </div>
</template>

<script>
    import VInput from './VInput.vue'

    export default {
        components: {
            VInput,
        },
        data() {
            return {
                count: 1,
                name: 'iduck',
                attr: {
                    id: 'underline',
                    class: 'red',
                },
                arr: [1, 3, 2],
                method: 'click',
                query: 'iduck'
            }
        },
        methods: {
            hello() {
                console.log(this.name);
            },
            add() {
                this.count += 1;
            }
        },
        computed: {
            upper() {
                return this.query.toUpperCase()
            }
        }
    }
</script>

<style>
    .red {
        color: red;
    }
    #underline {
        text-decoration: underline;
    }
</style>