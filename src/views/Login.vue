<template>
  <div>
    <h2>Login Page</h2>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import mock from '@/mock/index.js'
export default {
  methods: {
    login() {
      this.$api.login
        .login()
        .then(res => {
          console.log(res)
          Cookie.set('token', res.data.token)
          this.$router.push({ path: '/' })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped></style>
