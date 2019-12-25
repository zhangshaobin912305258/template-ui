<template>
  <div class="headBar">
    <div class="collapse-button">
      <el-button icon="el-icon-s-fold"> </el-button>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-menu">
      <ul>
        <li>
          <div class="user-info">zhang</div>
        </li>
        <li>
          <div class="user-avatar">
            <el-avatar :size="40" :src="user.avatar"></el-avatar>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'zhang',
        avatar: require('@/assets/images/user.png'),
        role: '超级管理员',
        registerInfo: '注册时间:2019-12-25'
      },
      activeIndex: '1',
      langVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.headBar {
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .collapse-button {
    float: left;
    margin-right: 10px;
    .el-button {
      border: none;
    }
  }
  .breadcrumb {
    float: left;
    .el-breadcrumb {
      line-height: 50px;
    }
  }
  .right-menu {
    float: right;
    li {
      float: left;
      line-height: 50px;
      .user-info {
        margin-right: 10px;
      }
      .user-avatar {
        height: 50px;
        margin-right: 20px;
        line-height: 50px;
        padding-top: 5px;
      }
    }
  }
}
</style>
