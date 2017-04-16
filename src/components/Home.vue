<template>
    <div class="home" id="home">
        <!--<page-header></page-header>-->
        <div class="main-container">
            <page-main></page-main>
            <page-footer></page-footer>
        </div>
    </div>
</template>

<script>
//  import PageHeader from './part/PageHeader.vue'
  import PageMain from './part/PageMain.vue'
  import PageFooter from './part/PageFooter.vue'
  export default {
    name: 'home',
    data () {
//    this.$router.replace('/login')
      return {
        msg: 'Coming soon...'
      }
    },
    components: {
//      PageHeader,
      PageMain,
      PageFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-container {
        /*position: fixed;*/
        /*width: 100%;*/
        /*height: calc(100% - 64px);*/
        /*top: 64px;*/
        /*left: 0;*/
        /*overflow: auto;*/
    }
    .home {
        position: absolute;
        width: 100%;
        height: 100%;
        padding-top: 64px;
        overflow: auto;
    }
</style>
