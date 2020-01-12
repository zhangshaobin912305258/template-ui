<template>
  <div class="headBar">
    <div class="collapse-button">
      <el-button icon="el-icon-s-fold" @click="changeCollapse"> </el-button>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentMenu">{{
          currentMenu.parentLabel
        }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentMenu" :to="currentMenu.name">
          {{ currentMenu.label }}</el-breadcrumb-item
        >
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
import { mapState } from 'vuex'
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
  },
  methods: {
    changeCollapse() {
      this.$store.commit('onCollapse')
    }
  },
  computed: {
    ...mapState({
      currentMenu: state => state.app.currentMenu
    })
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
    width: 50px;
    height: 100%;
    float: left;
    margin-right: 10px;
    .el-button {
      display: block;
      border: none;
      height: 100%;
      width: 100%;
      padding: 0;
      box-sizing: border-box;
      // padding: 10px;
    }
  }
  .breadcrumb {
    float: left;
    .el-breadcrumb {
      line-height: 50px;
      cursor: pointer;
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
