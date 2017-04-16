<template>
  <div class="page-header">
    <md-whiteframe md-tag="md-toolbar" md-elevation="2" class="md-primary" :class="'md-theme-' + theme">
      <h1>表白了</h1>
      <div class="login-info">
        <md-avatar>
          <img src="../../assets/avatar-2.jpg" alt="People">
        </md-avatar>
        <span class="username">张三</span>
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
  data () {
//    this.$router.replace('/login')
    return {
      theme: this.$root.theme,
      msg: 'Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .page-header {
    position: fixed;
    width: 100%;
    z-index: 99999;
    top: 0;
    .md-toolbar {
      justify-content: space-between;
      .login-info {
        padding: 0 12px;
        .username {
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
</style>
