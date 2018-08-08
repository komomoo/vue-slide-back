/**
 * vue-slide-back
 * @Author momoko
 * @Date 2018/08
 */

<template>
  <div :class="c()">
    123
  </div>
</template>

<script type="text/ecmascript-6">
import mixin from './mixins'

export default {
  name: 'SlideBack',
  components: {},
  mixins: [mixin],
  props: {
  },
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {},
  },
}
</script>

<style lang="stylus">
$ = vue-slide-back;

.{$} {

}
</style>
