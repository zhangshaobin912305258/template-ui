<template>
  <el-container style="height: 100vh">
    <el-aside width="auto">
      <CommonAside />
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader />
      </el-header>
      <el-main>
        <!-- <li class="fa fa-home fa-lg" style="color: #1890ff"></li>
        <el-button type="primary" @click="getUser" size="mini"
          >获取用户信息</el-button
        >
        <el-button type="primary" size="mini" @click="getMenu"
          >获取菜单信息</el-button
        > -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/Layout/CommonAside.vue'
import CommonHeader from '@/components/Layout/CommonHeader.vue'
import mock from '@/mock/mock.js'
import axios from 'axios'
export default {
  components: {
    CommonAside,
    CommonHeader
  },
  methods: {
    getUser() {
      axios.get('http://localhost:8080/user').then(res => {
        alert(JSON.stringify(res.data))
      })
    },
    getMenu() {
      axios.get('http://localhost:8080/menu').then(res => {
        alert(JSON.stringify(res.data))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  height: 50px !important;
  padding: 0 !important;
}
</style>
