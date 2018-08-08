import { case2Param } from '../utils'

const pre = 'vue-'

export default {
  methods: {
    // 生成 css class
    c (className) {
      const { name } = this.$options // 组件名

      return className ? `${pre}${case2Param(name)}${className}` : `${pre}${case2Param(name)}`
    },
  },
}
