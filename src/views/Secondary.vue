<template>
  <div class="secondary">
    <button @click="goBack">返回home</button>
  </div>
</template>

<script>
export default {
  name: 'Secondary',
  data () {
    return {
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
  },
}
</script>
