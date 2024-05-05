<template>
  <div class="home">
    <button @click="goSecondary">跳转到二级路由</button>
  </div>

</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    goSecondary () {
      this.$router.push({
        name: 'Secondary',
      })
    },
  },
}
</script>
