<template>
  <el-container style="height: 100vh">
    <el-aside width="200px">
      <CommonAside />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/Layout/CommonAside.vue'
export default {
  components: {
    CommonAside
  }
}
</script>

<style lang="scss" scoped></style>
