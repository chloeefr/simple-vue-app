<template>
  <div id="app">
    <simpleText msg="Hi there"/>
    <baseButton v-on:click.native="seen = !seen" msg="Click here"/>
    <p v-if="seen">Donec a turpis nisl. Proin vulputate sagittis dolor, in blandit nibh scelerisque non. Etiam consequat in dolor sit amet tempus. Nunc in diam est. Ut quis enim eleifend, tincidunt mauris at, vehicula ex. </p>
  </div>
</template>

<script>

import baseButton from './components/baseButton.vue'
import simpleText from './components/simpleText.vue'


export default {
  name: 'app',
  components: {
    simpleText,
    baseButton
  },
  data(){
    return {
      seen: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
