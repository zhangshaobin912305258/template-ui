<template>
  <el-menu
    default-active="1-1"
    background-color="rgb(48, 65, 86)"
    text-color="#fff"
    active-text-color="rgb(64, 158, 255)"
  >
    <h3>后台管理系统</h3>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">
        <i class="el-icon-location"></i>
        <span>用户列表</span>
      </el-menu-item>
      <el-menu-item index="1-2">
        <i class="el-icon-location" mini></i>
        <span>选项2</span>
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
export default {}
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
.el-menu .el-menu-item:hover,
.el-submenu /deep/ .el-submenu__title:hover {
  background-color: #001528 !important;
}
</style>
