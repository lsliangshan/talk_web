<template>
  <div class="login-container">
    <form novalidate class="login-form" @submit.stop.prevent="submit">
      <md-input-container :md-theme="theme" :class="{'md-input-invalid': !formData.phonenum.validation.value}">
        <md-icon>person</md-icon>
        <label>手机号</label>
        <md-input required v-model="formData.phonenum.value"></md-input>
      </md-input-container>
      <md-input-container :md-theme="theme" md-has-password :class="{'md-input-invalid': !formData.password.validation.value}">
        <md-icon>https</md-icon>
        <label>密码</label>
        <md-input required v-model="formData.password.value"></md-input>
      </md-input-container>
      <div class="btns">
        <div class="btn-item" @click="doLogin">
          <md-button :md-theme="theme" class="md-raised md-primary">登录</md-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'login',
    data () {
      return {
        theme: this.$root.theme,
        formData: {
          phonenum: {
            value: '',
            validation: {
              value: true,
              regExp: ['^1[3578]\\d{9}$']
            }
          },
          password: {
            value: '',
            validation: {
              value: true,
              regExp: ['^[A-Za-z0-9_]{1,8}$']
            }
          }
        },
        request: this.$root.request
      }
    },
    created: function () {
      if (localStorage.getItem(location.href + 'userInfo')) {
        this.$root.$router.replace('/')
      }
    },
    methods: {
      doLogin: function () {
        const that = this
        let _formData = this.formData

        /***
         *  验证phonenum
         */
        let _phonenumRegExp = this.formData.phonenum.validation.regExp
        let _phonenumResult = true
        _phonenumRegExp.forEach(function (item) {
          if (!(new RegExp(item)).test(_formData.phonenum.value)) {
            _phonenumResult = false
          }
        })

        this.formData.phonenum.validation.value = _phonenumResult

        /***
         *  验证password
         */
        let _passwordRegExp = this.formData.password.validation.regExp
        let _passwordResult = true
        _passwordRegExp.forEach(function (item) {
          if (!(new RegExp(item)).test(_formData.password.value)) {
            _passwordResult = false
          }
        })
        this.formData.password.validation.value = _passwordResult

        if (!_phonenumResult) {
          this.openMessageBox({
            message: '请输入手机号'
          })
        } else {
          if (!_passwordResult) {
            this.openMessageBox({
              message: '请输入密码'
            })
          } else {
            // 调用登录接口
            $.post({
              url: this.request.baseUrl + this.request.path.login,
              data: {
                phonenum: this.formData.phonenum.value,
                password: this.formData.password.value
              },
              success: function (res, textStatus, request) {
                if (res.status === 1) {
                  // 登录成功
//                  localStorage.setItem(location.href + 'userInfo', JSON.stringify(res.data))
//                  that.$root.$router.replace('/')
                  console.log('res: ', JSON.stringify(res))
                  console.log('textStatus: ', JSON.stringify(textStatus))
                  console.log('request: ', JSON.stringify(request))
                } else {
                  // 登录失败
                  that.openMessageBox({
                    message: res.errmsg
                  })
                }
              }
            })
          }
        }
      },
      openMessageBox: function (args) {
        this.$parent.openMessageBox(args)
      }
    },
    watch: {
      'formData.phonenum.value': function (value) {
        let _phonenumRegExp = this.formData.phonenum.validation.regExp
        let _result = true
        _phonenumRegExp.forEach(function (item) {
          if (!(new RegExp(item)).test(value)) {
            _result = false
          }
        })
        this.formData.phonenum.validation.value = _result
      },
      'formData.password.value': function (value) {
        let _passwordRegExp = this.formData.password.validation.regExp
        let _result = true
        _passwordRegExp.forEach(function (item) {
          if (!(new RegExp(item)).test(value)) {
            _result = false
          }
        })
        this.formData.password.validation.value = _result
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form {
      width: 320px;
      height: 160px;
      .btns {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
</style>
