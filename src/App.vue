<template>
    <div id="app">
        <page-header></page-header>
        <router-view></router-view>

        <md-snackbar :md-position="snackbar.vertical + ' ' + snackbar.horizontal" ref="snackbar"
                     :md-duration="snackbar.duration">
            <span v-text="snackbar.message"></span>
            <md-button class="md-accent" :md-theme="theme" @click.native="$refs.snackbar.close()"
                       v-text="snackbar.cancel"></md-button>
        </md-snackbar>
    </div>
</template>

<script>
  import PageHeader from './components/part/PageHeader.vue'
  export default {
    name: 'app',
    data: function () {
      return {
        theme: this.$root.theme,
        snackbar: {
          vertical: 'top',
          horizontal: 'right',
          duration: 4000,
          cancel: '取消'
        },
        snackbarList: []
      }
    },
    methods: {
      openMessageBox: function (args) {
        this.snackbar = Object.assign({}, this.snackbar, args)
        this.$refs.snackbar.open()
      }
    },
    components: {
      PageHeader
    }
  }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
        min-height: 500px;
        min-width: 1024px;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    /*!* 设置滚动条的样式 *!*/
    /*::-webkit-scrollbar {*/
    /*width: 5px;*/
    /*}*/
    /*!* 滚动槽 *!*/
    /*:hover::-webkit-scrollbar-track {*/
    /*-webkit-box-shadow:inset 0 0 2px rgba(0,0,0,0.3);*/
    /*border-radius:10px;*/
    /*}*/
    /*!* 滚动条滑块 *!*/
    /*:hover::-webkit-scrollbar-thumb {*/
    /*border-radius:10px;*/
    /*background-color: #839bbf;*/
    /*!*background: #c8c8c8;*!*/
    /*!*background:rgba(0,0,0,0.1);*/
    /*-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5);*!*/
    /*}*/
    /*::-webkit-scrollbar-thumb:window-inactive {*/
    /*background:rgba(255,0,0,0.4);*/
    /*}*/

    .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }

    .fixed {
        position: fixed;
        top: 0;
    }
</style>
