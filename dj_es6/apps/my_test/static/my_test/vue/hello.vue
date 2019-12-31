<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p> {{ counter }}</p>
    <p> {{ state }}</p>
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
