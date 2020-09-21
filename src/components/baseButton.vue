<template>
    <button>{{ msg }}</button>
</template>

<script>
export default {
  name: 'baseButton',
  props: {
    msg: String,
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
