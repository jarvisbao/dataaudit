<template>
  <div class="app-container">
    <common-title />
    <div class="container">
      <h3>主要信息</h3>
      <el-form label-width="auto">
        <el-form-item label="当前表名">
          {{ formDate.table_name }}
        </el-form-item>
        <el-form-item label="错误描述">
          {{ formDate.describe }}
        </el-form-item>
      </el-form>
      <el-form label-width="auto" inline>
        <el-form-item label="实体信息">
          {{ formDate.table + '.' + formDate.field }}
        </el-form-item>

        <el-form-item label="字段名称">
          {{ formDate.field_name }}
        </el-form-item>
        <el-form-item label="错误类型">
          {{ formDate.error_type }}
        </el-form-item>
        <el-form-item label="错误值">
          {{ formDate.error_value }}
        </el-form-item>
      </el-form>
    </div>
    <div class="container">
      <h3>错误代码</h3>
      <el-form label-position="left" label-width="120px">
        <el-form-item label="错误信息主键值">
          {{ formDate.primary_value }}
        </el-form-item>
        <el-form-item label="校验Python代码">
          {{ formDate.py_code }}
        </el-form-item>
        <el-form-item label="校验码">
          {{ formDate.code }}
        </el-form-item>

        <el-form-item label="审核码">
          {{ formDate.audit_code }}
        </el-form-item>
        <el-form-item label="跳转地址" class="detail-link2">
          <a :href="formDate.jump_uri" class="detail-link" target="_blank">{{ formDate.jump_uri }}<i class="detail-link el-icon-link" /></a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import CommonTitle from '@/components/CommonTitle'
export default {
  components: {
    CommonTitle
  },
  props: ['errId'],
  data() {
    return {
    }
  },
  computed: {
    formDate() {
      return JSON.parse(sessionStorage.dataaudit_detail).find((item) => {
        return item._id == sessionStorage.detail_errId
      })
    }
  },
  created() {
    if (this.errId) {
      sessionStorage.detail_errId = this.errId // 储存在sessionStorage中是为了防止刷新时拿不到数据
    }
  }
}
</script>
<!-- 表格布局基本样式 -->
<style lang='scss' scoped>
/deep/ .el-form-item__label {
  font-weight: bold;
}
.container {
  background-color: #fff;
  box-shadow: 0 0 3px 1px #0003;
  margin: 10px 0;
  border-radius: 5px;
  padding: 20px 20px 0.1px;
}
.detail-link {
  text-decoration: underline;
  &:hover {
    color: #3ea6dd !important;
  }
}
/deep/ .el-form-item__content {
  color: #5f6368;
}
h3 {
  font-size: 15px;
  color: #445;
}
</style>

