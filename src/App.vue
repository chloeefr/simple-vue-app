<template>
  <div id="app">
    <simpleText msg="Hi there"/>
    <button id="button" @click="requestSelected">Click Me</button>
    <p>{{ displayText }}</p>
  </div>
</template>
<script>

import simpleText from './components/simpleText.vue'

export default({
  name: 'App',
  data() {
    return {
      displayText: '',
    }
  },
  components: {
    simpleText,
  },
  methods: {
    requestSelected() {
      this.displayText = "button clicked!";
    }
  }
})
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
