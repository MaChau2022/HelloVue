<template>
    <h1>Vue3 Reactive</h1>
    <div>
        <div>
            <b>directly: </b>
            <span>{{ directly }}</span>
            <button @click="addDirectly">add</button>
        </div>
        <div>
            <b>reactive: </b>
            <span>{{ reaction.count }}</span>
            <button @click="addReaction" >add</button>
        </div>
        <div>
            <b>readonlyReactive: </b>
            <span>{{ readonlyReaction.count }}</span>
            <button @click="addReadonlyReaction" >add</button>
        </div>
        <div>
            <b>shallowReactive: </b>
            <span>{{  shallowReaction.inner.count }}</span>
            <button @click="addShallowReaction" >add</button>
        </div>
        <br />
        <div>
            <b>ref: </b>
            <span>{{ originRef }}</span>
            <button @click="addOriginRef" >add</button>
        </div>
        <div>
            <b>unpackRef: </b>
            <span>{{ unpackedRef }}</span>
            <button @click="addUnpackedRef" >add</button>
        </div>
        <div>
            <b>elementRef: </b>
            <input ref="elementRef" />
            <button @click="checkInput" >alert</button>
        </div>
        <br />
        <div>
            <b>watch: </b>
            <span>{{ observer }}</span>
        </div>
        <div>
            <b>watchEffect: </b>
            <span>{{ autoObserver }}</span>
            <button @click="unwatch">unwatch</button>
        </div>
        <div>
            <b>computed: </b>
            <span>{{ computer }}</span>
        </div>
    </div>
</template>

<style scoped>
    button, input {
        margin-left: 8px;
    }
    input:focus {
        outline: none;
    }
</style>

<script setup>
    import { 
        reactive, 
        ref, 
        watch, 
        watchEffect, 
        watchPostEffect,
        readonly,
        computed,
        shallowReactive,
        watchSyncEffect,
    } from 'vue'

    /** not reactive */
    let directly = 1;
    function addDirectly() {
        directly += 1;
        console.log('addDirectly', directly);
    }

    /** reactive */
    const reaction = reactive({ count: 1 })
    function addReaction() {
        reaction.count += 1;
    }

    /** immutableReaction */
    let readonlyReaction = readonly(reaction)
    function addReadonlyReaction() {
        readonlyReaction.count += 1;
    }

    /** shallowReactive */
    const shallowReaction = shallowReactive({ inner: { count: 1 } })
    function addShallowReaction() {
        shallowReaction.inner.count += 1;
    }

    /** ref */
    const originRef = ref(1);
    function addOriginRef() {
        originRef.value += 1;
    }

    /** use unpacked ref */
    let unpackedRef = $ref(1);
    function addUnpackedRef() {
        unpackedRef += 1;
        /** use origin value */
        $$(unpackedRef).value += 1; 
    }

    /** element ref */
    let elementRef = $ref()
    function checkInput() {
        console.log(elementRef);
        alert(elementRef.value)
    }

    /** watch */
    let observer = $ref(0)
    let autoObserver = $ref(0)
    const unregisters = [
        watch([originRef], () => {
            observer = originRef.value * 2;
        }),
        watchEffect(() => {
            console.log('watchEffect', originRef.value)
            autoObserver = originRef.value * 2;
        }),
        watchPostEffect(() => {
            console.log('watchPostEffect', originRef.value)
        }),
        watchSyncEffect(() => {
            console.log('watchSyncEffect', originRef.value)
        })
    ];
    function unwatch() {
        for (const unregister of unregisters) {
            unregister();
        }
    }
    
    /** computed */
    const computer = computed(() => {
        return originRef.value * 2;
    })

</script>