<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'simpleText',
  props: {
    msg: String
  }
}
</script>


<style scoped>
h1 {
  margin: 40px 0 0;
}
a {
  color: #000000;
}
</style>
