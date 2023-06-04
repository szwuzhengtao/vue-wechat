<template>
	<div class="container">
		<!-- <div class="plugins-tips">通过 v-permiss 自定义指令实现权限管理，使用非 admin 账号登录，可查看效果。</div> -->
		<div class="mgb20">
			<span class="label">角色：</span>
			<el-select v-model="role" @change="handleChange">
				<el-option label="超级管理员" value="admin"></el-option>
				<el-option label="普通用户" value="user"></el-option>
			</el-select>
		</div>
		<div class="mgb20 tree-wrapper">
			<el-tree
				ref="tree"
				:data="data"
				node-key="id"
				default-expand-all
				show-checkbox
				:default-checked-keys="checkedKeys"
			/>
		</div>
		<el-button type="primary" @click="onSubmit">保存权限</el-button>
	</div>
</template>

<script setup lang="ts" name="permission">
import { ref } from 'vue';
import { ElTree } from 'element-plus';
import { usePermissStore } from '../store/permiss';
import {gethad} from '../api/index'
const role = ref<string>('admin');

interface Tree {
	id: string;
	label: string;
	children?: Tree[];
}

const data: Tree[] = [
	{
		id: '1',
		label: '客户管理',
		children: [
			{
				id: '15',
				label: '修改客户信息'
			},
			{
				id: '16',
				label: '添加新客户'
			},
			{
				id: '15',
				label: '删除客户'
			},
			{
				id: '16',
				label: '获取客户信息'
			},
			{
				id: '15',
				label: '联系跟进'
			}
		]
	},
	{
		id: '2',
		label: '员工管理',
		children: [
			{
				id: '15',
				label: '修改员工信息'
			},
			{
				id: '6',
				label: '获取员工信息'
			},
			{
				id: '6',
				label: '添加新员工'
			},
			{
				id: '16',
				label: '分发低级权限'
			},
			{
				id: '6',
				label: '移除员工账号'
			},
			{
				id: '16',
				label: '下发代办任务'
			}
		]
	},

	{
		id: '4',
		label: '群聊管理',
		children: [
			{
				id: '5',
				label: '获取群聊消息'
			},
			{
				id: '6',
				label: '查找群聊记录'
			},
			{
				id: '6',
				label: '导入新群聊'
			},
			{
				id: '6',
				label: '群聊信息导入'
			},
			{
				id: '6',
				label: '群聊信息备注'
			}
		]
	},

];

const permiss = usePermissStore();

// 获取当前权限
const checkedKeys = ref<string[]>([]);
const getPremission = () => {
	// 请求接口返回权限
	checkedKeys.value = permiss.defaultList[role.value];
};
getPremission();

const getData = () => {
   gethad('超级管理员').then(res=>{
	   console.log(res);
	  
  })
}
getData();

// 保存权限
const tree = ref<InstanceType<typeof ElTree>>();
const onSubmit = () => {
	// 获取选中的权限
	console.log(tree.value!.getCheckedKeys(false));
};

const handleChange = (val: string[]) => {
	tree.value!.setCheckedKeys(permiss.defaultList[role.value]);
};
</script>

<style scoped>
.tree-wrapper {
	max-width: 500px;
}
.label {
	font-size: 14px;
}
</style>
