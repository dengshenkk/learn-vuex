
import Vue  from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 10,
}

const mutations = {
    increment(state) {
        state.count++
        console.log('加法',state.count)
    },
    decrement(state) {
        state.count--
        console.log('减法',state.count)
    },
    oddIncrement(state){
        if(state.count%2){
            state.count++
            console.log('只有奇数才能加!')
        }
    },
    evenIncrement(state){
        if(state.count%2!=1){
            state.count++
            console.log('只有偶数才能加!')
        }
    }
}

export default new Vuex.Store({
    state,mutations
})