<template>
  <div id="app">
    <SlideBack/>
  </div>
</template>

<script>
import SlideBack from '../lib'

export default {
  name: 'App',
  components: {
    SlideBack,
  },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus">
$headerHeight = 44px;
$baseColor = #6A9FB5;
$bgColor = #FAFAFA;
* {
  padding: 0;
  margin: 0;
  border: none;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>
