import vuex from 'vuex';

const store = new vuex.Store({
    state: {
        name: 'iduck',
        age: 15,
        color: "yellow"
    },
    getters: {
        upperName(state) {
            return state.name.toUpperCase()
        }
    },
    mutations: {
        changeColor(state, val) {
            state.color = val;
        }
    },
    actions: {
        changeColorAsync(content, data) {
            content.commit('changeColor', '...')
            setTimeout(() => {
                content.commit('changeColor', data)
            }, 1000)
        }
    }
})

export default store;