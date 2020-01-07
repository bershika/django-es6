<template>
  <div class="hello">
    <h2 v-if="msg">{{ msg }}</h2>
    <h2 v-else>No message</h2>
    <p>{{ counter }}</p>
    <p>
      <v-icon color="green" v-if="state">mdi-thumb-up</v-icon>
      <v-icon v-else>mdi-thumb-down</v-icon>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    counter: Number,
    state: Boolean,
  }
};
</script>

<style scoped>
  div {
    h2, p {
      text-align: center;
    }
  }
</style>
