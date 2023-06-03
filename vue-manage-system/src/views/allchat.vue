<template>
	<div>
		<div class="container">
			<div class="handle-box">
				<el-input v-model="query.name" placeholder="输入群聊名或群号" class="handle-input mr10"></el-input>
				<el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
				<el-button type="primary" :icon="Plus">新建群</el-button>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column label="头像" align="center">
					<template #default="scope">
						<el-image
							class="table-td-thumb"
							:src="scope.row.thumb"
							:z-index="10"
							:preview-src-list="[scope.row.thumb]"
							preview-teleported
                         @click="gotochatdetail(scope.$index, scope.row)"
						>
						</el-image>
					</template>
				</el-table-column>
                <el-table-column prop="id" label="群ID"  align="center"></el-table-column>
				<el-table-column prop="name" label="群名"></el-table-column>
				<el-table-column label="人数">
					<template #default="scope">￥{{ scope.row.money }}</template>
				</el-table-column>
				

				<el-table-column prop="date" label="建群时间"></el-table-column>
                <el-table-column prop="date" label="发展程度"></el-table-column>
                <el-table-column prop="date" label="最近"></el-table-column>
				<el-table-column label="操作" width="220" align="center">
					<template #default="scope">
						<el-button text :icon="Edit" @click="handleEdit(scope.$index, scope.row)" v-permiss="15">
							编辑
						</el-button>
						<el-button text :icon="Delete" class="red" @click="handleDelete(scope.$index)" v-permiss="16">
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					background
					layout="total, prev, pager, next"
					:current-page="query.pageIndex"
					:page-size="query.pageSize"
					:total="pageTotal"
					@current-change="handlePageChange"
				></el-pagination>
			</div>
		</div>

		<!-- 编辑弹出框 -->
		<el-dialog title="修改群聊信息" v-model="editVisible" width="50%">
			<el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="120px"
                    class="demo-ruleForm"
                    :size="formSize"
                    status-icon
            >
            <el-form-item label="群聊账号" prop="name">
                <el-input v-model="ruleForm.name" style="width: 20rem;" />
                </el-form-item>
                <el-form-item label="群聊名称">
					<el-input v-model="form.name" style="width: 10rem;" ></el-input>
				</el-form-item>
                <el-form-item label="群聊人数">
					<el-input v-model="form.name" style="width: 100px;"></el-input>
				</el-form-item>
                <el-form-item label="建群时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                    <el-date-picker
                        v-model="ruleForm.date1"
                        type="date"
                        label="Pick a date"
                        placeholder="Pick a date"
                        style="width: 100%"
                    />
                    </el-form-item>
                </el-col>
                <el-col class="text-center" :span="2">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                    <el-time-picker
                        v-model="ruleForm.date2"
                        label="Pick a time"
                        placeholder="Pick a time"
                        style="width: 100%"
                    />
                    </el-form-item>
                </el-col>
                </el-form-item>
                <el-form-item label="发展程度" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="高" name="type" />
                    <el-checkbox label="中" name="type" />
                    <el-checkbox label="低" name="type" />
                </el-checkbox-group>
                </el-form-item>
        
                <el-form-item label="群聊简介" prop="desc">
                <el-input v-model="ruleForm.desc" type="textarea" />
                </el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="editVisible = false">取 消</el-button>
					<el-button type="primary" @click="saveEdit">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts" name="basetable">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Delete, Edit, Search, Plus } from '@element-plus/icons-vue';
import { fetchData } from '../api/index';
import type { FormInstance, FormRules } from 'element-plus'
import router from '../router';
interface TableItem {
	id: number;
	name: string;
	money: string;
	state: string;
	date: string;
	address: string;
}

const query = reactive({
	address: '',
	name: '',
	pageIndex: 1,
	pageSize: 10
});
const tableData = ref<TableItem[]>([]);
const pageTotal = ref(0);
// 获取表格数据
const getData = () => {
	fetchData().then(res => {
		tableData.value = res.data.list;
		pageTotal.value = res.data.pageTotal || 50;
	});
};
getData();

// 查询操作
const handleSearch = () => {
	query.pageIndex = 1;
	getData();
};
// 分页导航
const handlePageChange = (val: number) => {
	query.pageIndex = val;
	getData();
};

// 删除操作
const handleDelete = (index: number) => {
	// 二次确认删除
	ElMessageBox.confirm('确定要删除吗？', '提示', {
		type: 'warning'
	})
		.then(() => {
			ElMessage.success('删除成功');
			tableData.value.splice(index, 1);
		})
		.catch(() => {});
};

// 表格编辑时弹窗和保存
const editVisible = ref(false);
let form = reactive({
	name: '',
	address: ''
});
let idx: number = -1;
const handleEdit = (index: number, row: any) => {
	idx = index;
	form.name = row.name;
	form.address = row.address;
	editVisible.value = true;
};
const saveEdit = () => {
	editVisible.value = false;
	ElMessage.success(`修改第 ${idx + 1} 行成功`);
	tableData.value[idx].name = form.name;
	tableData.value[idx].address = form.address;
};


// 点击头像具体跳转
const gotochatdetail=(index:number,row:any)=>{
    console.log(row.id);
    router.push({
        path:'./chatdetail',
        query:{id:row.id}
    })
}

//修改弹出框
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  ID:'',
  name: '纯ikun',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules>({
  ID:[
  { required: true, message: '请输入群聊账号', trigger: 'blur' },
    { min: 5, max: 12, message: '长度应该大于5小于12', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入群聊名称', trigger: 'blur' },
    { min: 2, max: 10, message: '长度应该大于2小于10', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})


const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<style scoped>
.handle-box {
	margin-bottom: 20px;
}

.handle-select {
	width: 120px;
}

.handle-input {
	width: 300px;
}
.table {
	width: 100%;
	font-size: 14px;
}
.red {
	color: #F56C6C;
}
.mr10 {
	margin-right: 10px;
}
.table-td-thumb {
	display: block;
	margin: auto;
	width: 40px;
	height: 40px;
}
</style>


