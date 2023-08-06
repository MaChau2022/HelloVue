<template>
    <main>
        <nav class="nav">
            <RouterLink to="hello">/hello</RouterLink>
            <RouterLink to="basic">/basic</RouterLink>
            <RouterLink to="reactive">/reactive</RouterLink>
            <RouterLink to="condition">/condition</RouterLink>
            <RouterLink to="parent">/parent</RouterLink>
            <RouterLink to="slot">/slot</RouterLink>
            <RouterLink to="store">/store</RouterLink>
        </nav>
        <div class="view">
            <div class="outlet">
                <RouterView />
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {

        },
        mounted() {
            console.log(this.$store.state)
        }
    }
</script>

<style scoped>
    main {
        padding: 16px;
    }
    .nav {
        display: flex;
        float: left;
        flex-direction: column;
        border-right: 1px solid gray;
        width: 150px;
        height: calc(100vh - 32px);
    }
    .view {
        padding: 16px;
        /* margin-left: 150px; */
        overflow: hidden;
    }
    .title {
        overflow: hidden;
        margin-top: 0px;
    }
    .outlet {
        padding: 16px;
    }
</style>