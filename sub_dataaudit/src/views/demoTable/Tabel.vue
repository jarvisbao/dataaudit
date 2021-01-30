<template>
  <div class="app-container">
    <common-title />
    <el-table
      :data="items"
      border
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        prop="table_name"
        label="表名"
        min-width="80"
        show-overflow-tooltip
      />

      <el-table-column
        prop="describe"
        label="错误描述"
        min-width="80"
        show-overflow-tooltip
      />
      <el-table-column
        label="实体信息"
        min-width="80"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          {{ scope.row.table +'.'+ scope.row.field }}
        </template>
      </el-table-column>
      <el-table-column
        prop="field_name"
        label="字段名称"
        min-width="80"
        show-overflow-tooltip
      />
      <el-table-column
        prop="code"
        label="规则码"
        min-width="80"
        show-overflow-tooltip
      />
      <el-table-column
        label="错误类型"
        min-width="80"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          {{ scope.row.error_type|errorTypeFilter() }}
        </template>
      </el-table-column>
      <el-table-column
        prop="error_value"
        label="错误值"
        min-width="80"
        show-overflow-tooltip
      />
      <el-table-column
        label="操作"
        fixed="right"
        align="center"
        width="70"
      >
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="查看详情" placement="top">
            <router-link :to="{name:'detail',params:{errId:scope.row._id}}"><i class="el-icon-view" /></router-link>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="跳转链接" placement="top">
            <a :href="scope.row.jump_uri" target="_blank"><i class="el-icon-link" /></a>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import CommonTitle from '@/components/CommonTitle'
export default {
  components: {
    CommonTitle
  },
  filters: {
    errorTypeFilter(value) {
      switch (value) {
        case 'basic':
          return '基本性错误'
        case 'logic':
          return '逻辑性错误'
        case 'unique':
          return '唯一性错误'
        case 'full':
          return '完整性错误'
        case 'system':
          return '系统性错误'
        default:
          return value
      }
    }
  },
  props: ['task_id'],
  data() {
    return {
      items: []
    }
  },
  created() {
    this.$Apis.dataaudit.tabel_data(this.task_id).then(response => {
      this.items = response.payload.items
      sessionStorage.dataaudit_detail = JSON.stringify(response.payload.items)
    })
  }
}
</script>

