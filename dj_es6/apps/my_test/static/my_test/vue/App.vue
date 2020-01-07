<template>
  <v-app>
    <v-content>
      <div id="app">
        <HelloWorld :msg="message" :counter="counter" :state="state" />
        <v-text-field label="VUE TITLE" clearable outlined v-model="message"></v-text-field>
        <v-btn small color="green" @click="counter=counter + 1">
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
        <v-btn small color="red" @click="counter=counter - 1">
          <v-icon>mdi-arrow-down-bold</v-icon>
        </v-btn>
        <br>
        <v-switch v-model="state" color="orange" label="State"></v-switch>
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
