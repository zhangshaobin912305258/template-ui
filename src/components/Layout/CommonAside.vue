<template>
  <el-menu
    default-active="1-1"
    background-color="rgb(48, 65, 86)"
    text-color="#fff"
    active-text-color="rgb(64, 158, 255)"
    class="el-menu-aside"
    :collapse="isCollapse"
  >
    <h3 v-show="!isCollapse">后台管理系统</h3>
    <h3 v-show="isCollapse">后台系统</h3>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1" @click="toUserList">
        <i class="el-icon-location"></i>
        <span>用户列表</span>
      </el-menu-item>
      <el-menu-item index="1-2" @click="toMenuList">
        <i class="el-icon-location" mini></i>
        <span>菜单列表</span>
      </el-menu-item>
      <el-menu-item index="1-3">
        <i class="el-icon-user"></i>
        <span>选项3</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      userMenu: {
        parentLabel: '导航一',
        parentUrl: '',
        label: '用户列表',
        url: 'userList',
        name: 'userList'
      },
      menu: {
        parentLabel: '导航一',
        parentUrl: '',
        label: '菜单列表',
        url: 'menuList',
        name: 'menuList'
      }
    }
  },
  methods: {
    toUserList() {
      this.$router.push({ name: 'userList' })
      this.$store.commit('selectMenu', this.userMenu)
    },
    toMenuList() {
      this.$router.push({ name: 'menuList' })
      this.$store.commit('selectMenu', this.menu)
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.app.collapse
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
  border: none;
  font-size: 14px;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 50px;
    background: #2b2f3a;
  }
}
.el-menu-aside:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu .el-menu-item:hover,
.el-submenu /deep/ .el-submenu__title:hover {
  background-color: #001528 !important;
}
</style>
