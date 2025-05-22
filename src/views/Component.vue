<template>
  <div class="p-5 h-100vh">
    <h2 class="text-gray-700 dark:text-gray-300">Element Plus 主题定制示例</h2>
    <el-row :gutter="20" class="mb-8 p-4 rounded shadow-md">
      <el-col :span="12">
        <h3 class="mt-0 mb-4 text-gray-700 text-lg border-b border-gray-200 pb-2.5">按钮组</h3>
        <div class="flex flex-wrap gap-2.5">
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
          <el-button type="info">信息按钮</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <h3 class="mt-0 mb-4 text-gray-700 text-lg border-b border-gray-200 pb-2.5">提示</h3>
        <div class="flex flex-col gap-2.5">
          <el-alert title="默认提示" type="info" show-icon />
          <el-alert title="成功提示" type="success" show-icon />
          <el-alert title="警告提示" type="warning" show-icon />
          <el-alert title="错误提示" type="error" show-icon />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mb-8 p-4 rounded shadow-md">
      <el-col :span="12">
        <h3 class="mt-0 mb-4 text-gray-700 text-lg border-b border-gray-200 pb-2.5">输入框</h3>
        <el-input v-model="inputValue" placeholder="请输入内容" class="mb-4" />
      </el-col>
      <el-col :span="12">
        <h3 class="mt-0 mb-4 text-gray-700 text-lg border-b border-gray-200 pb-2.5">单选框</h3>
        <el-radio-group v-model="radioValue" class="mb-4">
          <el-radio label="Option A">选项 A</el-radio>
          <el-radio label="Option B">选项 B</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mb-8 p-4 rounded shadow-md">
      <el-col :span="12">
        <h3 class="mt-0 mb-4 text-gray-700 text-lg border-b border-gray-200 pb-2.5">复选框</h3>
        <el-checkbox-group v-model="checkboxValue" class="mb-4">
          <el-checkbox label="Option X">选项 X</el-checkbox>
          <el-checkbox label="Option Y">选项 Y</el-checkbox>
        </el-checkbox-group>
      </el-col>
      <el-col :span="12">
        <h3 class="mt-0 mb-4 text-gray-700 text-lg border-b border-gray-200 pb-2.5">开关</h3>
        <el-switch v-model="switchValue" active-text="开启" inactive-text="关闭" class="mb-4" />
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mb-8 p-4 rounded shadow-md">
      <el-col :span="24">
        <h3 class="mt-0 mb-4 text-gray-700 text-lg border-b border-gray-200 pb-2.5">日期选择器</h3>
        <el-date-picker v-model="dateValue" type="date" placeholder="选择日期" class="mb-4" />
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mb-8 p-4 rounded shadow-md">
      <el-col :span="24">
        <h3 class="mt-0 mb-4 text-gray-700 text-lg border-b border-gray-200 pb-2.5">表格</h3>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const inputValue = ref('')
const radioValue = ref('Option A')
const checkboxValue = ref(['Option X'])
const switchValue = ref(true)
const dateValue = ref('')

const tableData = reactive([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
</script>

