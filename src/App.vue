<template>
  <div id="app">
    <!-- <SlideBack/> -->
    <transition :name="routerTransition">
      <router-view/>
    </transition>
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
      routerTransition: 'router-slide-left',
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.routerTransition = toDepth < fromDepth ? 'router-slide-right' : 'router-slide-left'
    },
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

  button {
    outline none;
    display: block;
    width: 60%;
    height: 100px;
    margin: 15px auto;
    font-size: 24px;
    color: $baseColor;
    background-color: $bgColor;
  }
}
// 路由跳转动画

// 平移滑动
.router-slide-left-enter, .router-slide-right-leave-to {
  position: absolute;
  opacity: 0;
  -webkit-transform: translate3d(70%, 0, 0);
  transform: translate3d(70%, 0, 0);
}
.router-slide-left-leave-to, .router-slide-right-enter {
  position: absolute;
  opacity: 0;
  -webkit-transform: translate3d(-70%, 0, 0);
  transform: translate3d(-70%, 0, 0);
}
.router-slide-left-enter-active, .router-slide-left-leave-active, .router-slide-right-enter-active, .router-slide-right-leave-active {
  transition: all 0.45s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>
