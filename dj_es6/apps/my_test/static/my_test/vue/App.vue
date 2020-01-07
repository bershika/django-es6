<template>
  <v-app>
    <v-content>
      <div id="app">
        <v-text-field v-model="message"></v-text-field>
        <HelloWorld :msg="message" :counter="counter" :state="state" />
        <button @click="counter=counter +1">+1</button>
        <button @click="state = !state">!!</button>
        <v-btn small color="primary" @click="counter=counter +1">
          <v-icon left>mdi-pencil</v-icon>
          +1
        </v-btn>
      </div>
    </v-content>
  </v-app>
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
