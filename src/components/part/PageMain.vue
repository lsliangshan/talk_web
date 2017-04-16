<template>
    <div class="page-main">
        <div class="content">
            <div style="height: 200px; background-color: #718bff;"></div>
            <div style="height: 240px;">
                <sticky scroll-box="home" :offset="64" :check-sticky-support="false">
                    <img src="../../assets/avatar-2.jpg" alt="People">
                </sticky>
            </div>
            <div style="height: 400px; background-color: #f266ff">a</div>
        </div>
    </div>
</template>

<script>
  import Sticky from '../sticky/index.vue'
  export default {
    name: 'pageMain',
    data () {
//    this.$router.replace('/login')
      return {
        theme: this.$root.theme,
        msg: 'Header'
      }
    },
    components: {
      Sticky
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .page-main {
        width: 100%;
        /*margin-top: 64px;*/
        background-color: #ffebd0;
        /*height: calc(100% - 64px - 96px);*/
        overflow-x: hidden;
        overflow-y: auto;

    .content {
        height: 2000px;
    }

    }
</style>
