<template>
  <div class="page-footer">
    <pre>
      当你需要我的时候，我都会在这里；当你有麻烦的时候，我都会在你身边；当你觉得孤独的时候；当你认为所有的人都已绝望；到我这里来，我会给你所有的爱。
    </pre>
  </div>
</template>

<script>
export default {
  name: 'pageFooter',
  data () {
//    this.$router.replace('/login')
    return {
      theme: this.$root.theme
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .page-footer {
    height: 60px;
    /*background-color: #a2cbff;*/
  }
</style>
