<template>
  <div id="app">
   {{msg}}
   <p></p>
   当前数字是:{{count}}
   <p> 
     <button @click="increment()">增加</button>     
     <button @click="decrement()">减少</button>     
     <button @click="oddIncrement()">只有奇数才能加</button>     
     <button @click="evenIncrement()">只有偶数才能加</button>     
    </p>
  </div>
</template>

<script>
import store from "./vuex/store"; //显式引入store

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    /**@description
     * 显式引入
     
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
    oddInrement(){
      store.commit('oddInrement')
    },
    evenInrement(){
      store.commit('evenInrement')
    }
    */

    /**@description
     * 隐式引入
     */
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    oddIncrement() {
      this.$store.commit("oddIncrement");
    },
    evenIncrement() {
      this.$store.commit("evenIncrement");
    }
  }
};
</script>

