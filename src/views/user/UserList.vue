<template>
  <div class="user-list">
    <!-- 用户列表搜索条件开始 -->
    <div class="search-condition">
      <el-form
        :inline="true"
        ref="searchConditionForm"
        :model="searchCondition"
        class="demo-form-inline"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            size="small"
            v-model="searchCondition.username"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色状态" prop="status">
          <el-select
            size="small"
            v-model="searchCondition.status"
            placeholder="角色状态"
          >
            <el-option label="正常" value="0"></el-option>
            <el-option label="停用" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-date-picker
            size="small"
            v-model="searchCondition.createTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择创建时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="mini"
            @click="search"
            icon="el-icon-search"
            >搜索</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button
            size="mini"
            @click="resetSearchCondition('searchConditionForm')"
            icon="el-icon-refresh"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 用户列表搜索条件结束 -->
    <!-- 用户列表开始 -->
    <div class="users">
      <!-- 用户列表操作按钮组开始 -->
      <div class="user-features">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-plus"
          @click="addUser"
          >新增</el-button
        >
        <el-button
          type="success"
          size="mini"
          icon="el-icon-edit"
          :disabled="!editVisible"
          @click="editUserFeatures"
          >修改</el-button
        >
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
          :disabled="!deleteVisible"
          @click="deleteUsers"
          >删除</el-button
        >
        <el-button type="warning" size="mini" icon="el-icon-download"
          >导出</el-button
        >
      </div>
      <!-- 用户列表操作按钮组结束 -->
      <!-- 用户列表表格开始 -->
      <div class="user-table">
        <el-table
          :data="users"
          style="width: 100%"
          size="small"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="序号" align="center" width="60" type="index">
          </el-table-column>
          <el-table-column label="用户名" align="center">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>用户名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="状态" width="100">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.status === '1' ? 'success' : 'danger'"
                disable-transitions
                >{{ scope.row.status === '1' ? '正常' : '停用' }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column label="日期" align="center">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="editUser(scope.$index, scope.row)"
                icon="el-icon-edit"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="deleteUser(scope.$index, scope.row)"
                icon="el-icon-delete"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="total, prev, pager, next, jumper"
          :total="100"
        >
        </el-pagination>
      </div>
      <!-- 用户列表表格结束 -->
    </div>
    <!-- 用户列表结束 -->
    <!-- 弹出层开始  -->
    <el-dialog
      :title="dialogFormTitle"
      align="center"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="userForm" :inline="true">
        <el-form-item label="用户名">
          <el-input
            size="small"
            v-model="userForm.name"
            autocomplete="off"
            width="80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select
            v-model="userForm.status"
            placeholder="请选择用户状态"
            size="small"
          >
            <el-option label="正常" value="1"></el-option>
            <el-option label="停用" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 弹出层结束  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCondition: {
        username: '',
        status: '0',
        createTime: ''
      },
      users: [
        {
          date: '2016-05-02',
          name: '王小虎',
          status: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          status: '0',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          status: '1',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          status: '0',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      //当前也
      currentPage: 1,
      //选中用户列表
      multipleSelection: [],
      //修改用户弹出框是否显示
      editVisible: false,
      //删除用户弹出框是否显示
      deleteVisible: false,
      //弹出框是否显示
      dialogFormVisible: false,
      //弹出框标题
      dialogFormTitle: '新增用户',
      //用户表单
      userForm: {
        name: '',
        status: '0'
      }
    }
  },
  methods: {
    //搜索
    search() {
      console.log(this.searchCondition)
    },
    //处理当前也变化事件
    handleCurrentChange(currentPage) {
      console.log('当前页改变了:' + currentPage)
    },
    //添加用户
    addUser() {
      this.dialogFormVisible = true
      this.dialogFormTitle = '新增用户'
    },
    //修改用户
    editUser(index, row) {
      console.log(index)
      console.log(row)
      this.userForm = row
      this.dialogFormVisible = true
      this.dialogFormTitle = '修改用户'
    },
    editUserFeatures() {
      this.dialogFormVisible = true
      this.dialogFormTitle = '修改用户'
      this.userForm = this.multipleSelection[0]
    },
    //删除多个用户提示
    deleteUsers() {
      this.$confirm('此操作将永久删除选中的用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    //删除单个用户提示
    deleteUser(index, row) {
      this.$confirm(
        '此操作将永久删除选中的用户' + row.name + ', 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    //重置搜索条件
    resetSearchCondition(formName) {
      this.$refs[formName].resetFields()
    },
    //处理选中用户事件
    handleSelectionChange(val) {
      this.multipleSelection = val
      if (this.multipleSelection.length === 1) {
        this.editVisible = true
      } else {
        this.editVisible = false
      }
      if (this.multipleSelection.length > 0) {
        this.deleteVisible = true
      } else {
        this.deleteVisible = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-list {
  background: #fff;
  .users {
    .user-features {
      font-size: 12px;
    }
    .user-table {
      margin-top: 10px;
      .el-pagination {
        margin-top: 20px;
      }
    }
  }
}
</style>
