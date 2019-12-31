<template>
  <div id="app">
    <input v-model="message" type="text">
    <HelloWorld :msg="message" :counter="counter" :state="state" />
    <button @click="counter=counter +1">+1</button>
    <button @click="state = !state">!!</button>
  </div>
</template>

<script>
import HelloWorld from './hello.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      message: "Vue app title",
      counter: 0,
      state: true,
    }
  }
};
</script>
