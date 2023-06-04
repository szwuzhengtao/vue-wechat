<template>
	<div>
		<div class="container">
			<div class="handle-box">
				<!-- <el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
					<el-option key="1" label="广东省" value="广东省"></el-option>
					<el-option key="2" label="湖南省" value="湖南省"></el-option>
				</el-select> -->
				<el-input v-model="query.name" placeholder="请输入关键字" class="handle-input mr10"></el-input>
				<el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
				<el-button type="primary" :icon="Plus">新增</el-button>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="staffId" label="员工账号" width="105" align="center"></el-table-column>
				<el-table-column prop="staffName" label="员工名称"></el-table-column>
				<el-table-column prop="staffGender" label="员工性别"></el-table-column>
				<el-table-column label="状态" align="center">
					<template #default="scope">
						<el-tag
							:type="scope.row.isActive === '1' ? 'success' : scope.row.state === '0' ? 'danger' : ''"
						>
							{{ scope.row.isActive }}
						</el-tag>
					</template>
				</el-table-column>
				
				<el-table-column prop="staffJob" label="员工职位"></el-table-column>
				<el-table-column prop="department" label="员工部门"></el-table-column>

		
				<el-table-column label="操作" width="350" align="center">
					<template #default="scope" >
						<el-button style="background-color: rgb(22,132,252); color: white;"  @click="handleEdit2(scope.$index, scope.row)" v-permiss="21">
							分配角色
						</el-button>
						<el-button style="background-color: rgb(210,152,55); color: white;"  @click="handleEdit(scope.$index, scope.row)" v-permiss="21">
							编辑
						</el-button>
						<el-button style="background-color: rgb(223,91,99); color: white;"  @click="handleDelete(scope.$index)" v-permiss="21">
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
		<el-dialog title="编辑用户" v-model="editVisible" width="40%">
			<el-form label-width="90px" style="display: flex;flex-wrap: wrap; ">
				<el-form-item label="用户名">
					<el-input style="width:200px; margin-left:10px;" v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-input style="width:200px; margin-left:10px;" v-model="form.address"></el-input>
				</el-form-item>
				<el-form-item label="员工部门">
					<el-input style="width:200px; margin-left:10px;" v-model="form.address"></el-input>
				</el-form-item>
				<el-form-item label="员工职位">
					<el-input style="width:200px; margin-left:10px;" v-model="form.address"></el-input>
				</el-form-item>
				<el-form-item label="员工地址">
					<el-input style="width:200px; margin-left:10px;" v-model="form.address"></el-input>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="editVisible = false">取 消</el-button>
					<el-button type="primary" @click="saveEdit">确 定</el-button>
				</span>
			</template>
		</el-dialog>

		<el-dialog title="分配角色" v-model="editVisible2" width="30%">
			<div >
			  <el-checkbox v-model="checked1" style="display:block; " label="超级管理员" size="large" />
			  <el-checkbox v-model="checked2" label="普通成员" style="display:block; " size="large" />
			</div>
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
import { Delete, Edit, Search, Plus, Memo } from '@element-plus/icons-vue';
import { getuser } from '../api/index';
import { useRouter } from 'vue-router';
import router from '../router';
import { usingToken } from '../store/token';
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
/* const getData = () => {
	fetchData().then(res => {
		tableData.value = res.data.list;
		pageTotal.value = res.data.pageTotal || 50;
	});
}; */
const getData = () => {
   getuser().then(res=>{
	   console.log(res.data.data);
	   tableData.value=res.data.data;
	   pageTotal.value=50;
  })
}
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

//权限管理弹窗和保存
const editVisible2 = ref(false);
let form2 = reactive({
	name: '',
	address: ''
});
let idx2: number = -1;
const handleEdit2 = (index: number, row: any) => {
	idx = index;
	form.name = row.name;
	form.address = row.address;
	editVisible2.value = true; 
};
const saveEdit2 = () => {
	editVisible2.value = false;
	ElMessage.success(`修改第 ${idx + 1} 行成功`);
	tableData.value[idx].name = form.name;
	tableData.value[idx].address = form.address;
};
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
