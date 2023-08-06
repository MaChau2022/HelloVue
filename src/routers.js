import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import HelloWorld from './views/HelloWorld.vue'
import VBasic from './views/VBasic.vue'
import VReactive from './views/VReactive.vue'
import VCondition from './views/VCondition.vue'
import VParent from './views/VParent.vue'
import VWrapper from './views/VWrapper.vue'
import VStore from "./views/VStore.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '/',
            component: HelloWorld,
        },
        {
            path: '/hello',
            name: 'hello',
            component: HelloWorld,
        },
        {
            path: '/basic',
            name: 'basic',
            component: VBasic
        },
        {
            path: "/reactive",
            name: "reactive",
            component: VReactive
        },
        {
            path: "/condition",
            name: "condition",
            component: VCondition
        },
        {
            path: "/parent",
            name: "parent",
            component: VParent,
        },
        {
            path: "/slot",
            name: "slot",
            component: VWrapper
        },
        {
            path: "/store",
            name: "store",
            component: VStore
        }
    ]
})

export default router