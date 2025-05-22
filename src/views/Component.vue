<template>
  <div class="h-100vh mx-auto px-4 py-8">
    <h2 class="text-center text-2xl font-bold mb-8 text-gray-900 dark:text-white">Naive UI 组件展示</h2>
    <n-card title="基础组件" class="mb-8" :bordered="false" size="large">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <n-card title="按钮 Button" class="shadow-sm">
          <div class="space-y-4">
            <div class="flex flex-wrap gap-2">
              <n-button>默认按钮</n-button>
              <n-button type="primary">主要按钮</n-button>
              <n-button type="info">信息按钮</n-button>
              <n-button type="success">成功按钮</n-button>
              <n-button type="warning">警告按钮</n-button>
              <n-button type="error">错误按钮</n-button>
            </div>
            <div class="flex flex-wrap gap-2">
              <n-button circle>
                <template #icon>
                  <n-icon><SearchOutline /></n-icon>
                </template>
              </n-button>
              <n-button circle type="primary">
                <template #icon>
                  <n-icon><CreateOutline /></n-icon>
                </template>
              </n-button>
              <n-button loading>加载中</n-button>
              <n-button dashed>虚线按钮</n-button>
            </div>
          </div>
        </n-card>

        <n-card title="输入框 Input" class="shadow-sm">
          <div class="space-y-4">
            <n-input v-model:value="inputValue" placeholder="基本输入框" />
            <n-input-group>
              <n-input-group-label>https://</n-input-group-label>
              <n-input v-model:value="inputUrl" placeholder="请输入网址" />
            </n-input-group>
            <n-input type="password" v-model:value="password" placeholder="密码输入框" show-password-on="click" />
            <n-input-number v-model:value="inputNumber" placeholder="数字输入框" />
          </div>
        </n-card>

        <n-card title="选择器 Select" class="shadow-sm">
          <div class="space-y-4">
            <n-select v-model:value="selectedValue" :options="selectOptions" placeholder="请选择" />
            <n-cascader v-model:value="cascaderValue" :options="cascaderOptions" placeholder="级联选择器" />
            <n-date-picker v-model:value="dateValue" type="date" placeholder="日期选择器" />
          </div>
        </n-card>
      </div>
    </n-card>

    <n-card title="数据展示" class="mb-8" :bordered="false" size="large">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <n-card title="表格 Table" class="shadow-sm">
          <n-data-table
            :columns="tableColumns"
            :data="tableData"
            :pagination="{ pageSize: 5 }"
            :bordered="false"
            striped
          />
        </n-card>

        <n-card title="标签和徽章" class="shadow-sm">
          <div class="space-y-4">
            <div class="flex flex-wrap gap-2">
              <n-tag>标签</n-tag>
              <n-tag type="primary">主要</n-tag>
              <n-tag type="info">信息</n-tag>
              <n-tag type="success">成功</n-tag>
              <n-tag type="warning">警告</n-tag>
              <n-tag type="error">错误</n-tag>
            </div>
            <div class="flex flex-wrap gap-4 items-center">
              <n-badge value="5">
                <n-avatar />
              </n-badge>
              <n-badge dot>
                <n-avatar />
              </n-badge>
              <n-badge value="new" type="success">
                <n-avatar />
              </n-badge>
              <n-badge value="99+" type="error">
                <n-avatar />
              </n-badge>
            </div>
          </div>
        </n-card>
      </div>
    </n-card>

    <n-card title="反馈组件" class="mb-8" :bordered="false" size="large">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <n-card title="对话框 Dialog" class="shadow-sm">
          <n-space vertical>
            <n-button @click="showDialog = true">打开对话框</n-button>
            <n-button @click="showConfirm">确认对话框</n-button>
            <n-modal v-model:show="showDialog" preset="dialog" title="对话框标题">
              <template #default>
                <div>这是一个对话框内容</div>
              </template>
              <template #action>
                <n-button @click="showDialog = false">取消</n-button>
                <n-button type="primary" @click="showDialog = false">确认</n-button>
              </template>
            </n-modal>
          </n-space>
        </n-card>

        <n-card title="消息提示 Message" class="shadow-sm">
          <n-space>
            <n-button @click="showInfo">信息</n-button>
            <n-button @click="showSuccess">成功</n-button>
            <n-button @click="showWarning">警告</n-button>
            <n-button @click="showError">错误</n-button>
          </n-space>
        </n-card>

        <n-card title="加载和进度" class="shadow-sm">
          <div class="space-y-4">
            <n-spin size="medium" />
            <n-progress type="line" :percentage="progressValue" :indicator-placement="'inside'" />
            <n-button @click="increaseProgress">增加进度</n-button>
          </div>
        </n-card>
      </div>
    </n-card>

    <n-card title="导航组件" class="mb-8" :bordered="false" size="large">
      <div class="grid grid-cols-1 gap-6">
        <n-card title="菜单 Menu" class="shadow-sm">
          <n-menu
            :options="menuOptions"
            :default-value="selectedMenu"
            @update:value="handleMenuUpdate"
            mode="horizontal"
          />
        </n-card>
      </div>
    </n-card>

    <n-card title="表单组件" class="mb-8" :bordered="false" size="large">
      <n-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        label-placement="left"
        label-width="100px"
      >
        <n-form-item label="用户名" path="username">
          <n-input v-model:value="formModel.username" placeholder="请输入用户名" />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input
            v-model:value="formModel.password"
            type="password"
            placeholder="请输入密码"
            show-password-on="click"
          />
        </n-form-item>
        <n-form-item label="年龄" path="age">
          <n-input-number v-model:value="formModel.age" placeholder="请输入年龄" />
        </n-form-item>
        <n-form-item label="爱好" path="hobbies">
          <n-checkbox-group v-model:value="formModel.hobbies">
            <n-space>
              <n-checkbox value="coding">编程</n-checkbox>
              <n-checkbox value="reading">阅读</n-checkbox>
              <n-checkbox value="gaming">游戏</n-checkbox>
            </n-space>
          </n-checkbox-group>
        </n-form-item>
        <n-form-item>
          <n-space>
            <n-button type="primary" @click="handleSubmit">提交</n-button>
            <n-button @click="handleReset">重置</n-button>
          </n-space>
        </n-form-item>
      </n-form>
    </n-card>

    <n-card title="图标展示" class="mb-8" :bordered="false" size="large">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><HomeOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">HomeOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><PersonOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">PersonOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><SettingsOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">SettingsOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><GridOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">GridOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><CalendarOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">CalendarOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><DocumentOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">DocumentOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><NotificationsOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">NotificationsOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><ChatbubbleOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">ChatbubbleOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><HeartOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">HeartOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><StarOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">StarOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><PeopleOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">PeopleOutline</span>
        </div>
        <div class="flex flex-col items-center">
          <n-icon size="24" class="mb-2"><StorefrontOutline /></n-icon>
          <span class="text-sm text-gray-700 dark:text-gray-300">StorefrontOutline</span>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, h, reactive } from 'vue';
import {
  NButton, NCard, NInput, NInputGroup, NInputGroupLabel, NInputNumber,
  NSelect, NCascader, NDatePicker, NDataTable, NTag, NBadge, NAvatar,
  NSpace, NModal, NSpin, NProgress, NMenu, NForm, NFormItem,
  NCheckboxGroup, NCheckbox, NIcon, useMessage, useDialog
} from 'naive-ui';
import type { DataTableColumns, MenuOption, FormInst, FormRules } from 'naive-ui';

import {
  SearchOutline,
  CreateOutline,
  HomeOutline,
  PersonOutline,
  SettingsOutline,
  GridOutline,
  CalendarOutline,
  DocumentOutline,
  NotificationsOutline,
  ChatbubbleOutline,
  HeartOutline,
  StarOutline,
  PeopleOutline,
  StorefrontOutline,
  SpeedometerOutline
} from '@vicons/ionicons5';

const message = useMessage();
const dialog = useDialog();
const showInfo = () => message.info('这是一条信息提示');
const showSuccess = () => message.success('操作成功');
const showWarning = () => message.warning('警告信息');
const showError = () => message.error('发生错误');

const showDialog = ref(false);
const showConfirm = () => {
  dialog.warning({
    title: '确认',
    content: '确定要执行此操作吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('操作已确认');
    }
  });
};

const inputValue = ref('');
const inputUrl = ref('');
const password = ref('');
const inputNumber = ref(0);

const selectedValue = ref(null);
const selectOptions = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' }
];

const cascaderValue = ref(null);
const cascaderOptions = [
  {
    label: '广东省',
    value: 'guangdong',
    children: [
      {
        label: '广州市',
        value: 'guangzhou',
        children: [
          { label: '天河区', value: 'tianhe' },
          { label: '海珠区', value: 'haizhu' }
        ]
      },
      {
        label: '深圳市',
        value: 'shenzhen',
        children: [
          { label: '南山区', value: 'nanshan' },
          { label: '福田区', value: 'futian' }
        ]
      }
    ]
  },
  {
    label: '浙江省',
    value: 'zhejiang',
    children: [
      {
        label: '杭州市',
        value: 'hangzhou',
        children: [
          { label: '西湖区', value: 'xihu' },
          { label: '余杭区', value: 'yuhang' }
        ]
      }
    ]
  }
];

const dateValue = ref(null);

interface TableRowData {
  id: number;
  name: string;
  age: number;
  address: string;
}

const createColumns = (): DataTableColumns<TableRowData>  => {
  return [
    {
      title: 'ID',
      key: 'id'
    },
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '地址',
      key: 'address'
    },
    {
      title: '操作',
      key: 'actions',
      render(row: TableRowData) {  // 添加了类型注解
        return h(
          NSpace,
          {},
          {
            default: () => [
              h(
                NButton,
                {
                  size: 'small',
                  type: 'primary',
                  onClick: () => message.info(`编辑: ${row.name}`)
                },
                { default: () => '编辑' }
              ),
              h(
                NButton,
                {
                  size: 'small',
                  type: 'error',
                  onClick: () => message.info(`删除: ${row.name}`)
                },
                { default: () => '删除' }
              )
            ]
          }
        );
      }
    }
  ];
};

const tableColumns = createColumns();
const tableData = [
  { id: 1, name: '张三', age: 28, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 32, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 26, address: '广州市天河区' },
  { id: 4, name: '赵六', age: 35, address: '深圳市南山区' },
  { id: 5, name: '钱七', age: 29, address: '杭州市西湖区' }
];

const progressValue = ref(30);
const increaseProgress = () => {
  progressValue.value = (progressValue.value + 10) % 110;
};

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const selectedMenu = ref('dashboard');
const menuOptions: MenuOption[] = [
  {
    label: '仪表盘',
    key: 'dashboard',
    icon: renderIcon(SpeedometerOutline)
  },
  {
    label: '用户管理',
    key: 'user-management',
    icon: renderIcon(PersonOutline),
    children: [
      { label: '用户列表', key: 'user-list' },
      { label: '添加用户', key: 'add-user' }
    ]
  },
  {
    label: '设置',
    key: 'settings',
    icon: renderIcon(SettingsOutline),
    children: [
      { label: '系统设置', key: 'system-settings' },
      { label: '个人设置', key: 'personal-settings' }
    ]
  }
];

const handleMenuUpdate = (key: string) => {
  selectedMenu.value = key;
  message.info(`选择了: ${key}`);
};

const formRef = ref<FormInst | null>(null);
const formModel = reactive({
  username: '',
  password: '',
  age: null as number | null,
  hobbies: [] as string[]
});

const formRules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度应在3-20之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ],
  age: [
    { type: 'number', required: true, message: '请输入年龄', trigger: ['blur', 'change'] },
    {
      type: 'number',
      min: 18,
      max: 65,
      message: '年龄必须在18-65之间',
      trigger: ['blur', 'change']
    }
  ],
  hobbies: [
    { type: 'array', min: 1, message: '请至少选择一个爱好', trigger: 'change' }
  ]
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('表单验证通过');
      console.log(formModel);
    } else {
      message.error('表单验证失败');
    }
  });
};

const handleReset = () => {
  formRef.value?.restoreValidation();
  formModel.username = '';
  formModel.password = '';
  formModel.age = null;
  formModel.hobbies = [];
};
</script>

<style scoped>
</style>
