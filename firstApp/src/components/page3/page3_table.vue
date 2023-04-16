<template>
    <div style="margin-left: 1.5%;">
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 99%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="员工ID"
        width="120">
        <template slot-scope="scope">{{ scope.row.staffId }}</template>
      </el-table-column>
      <el-table-column
        prop="staffname"
        label="员工名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="staffsex"
        label="员工性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="staffphone"
        label="员工电话"
        width="120">
      </el-table-column>
      <el-table-column
        prop="staffemile"
        label="员工邮箱"
        width="120">
      </el-table-column>
      <el-table-column
        prop="staffstate"
        label="员工状态"
        width="120">
        <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
      </el-table-column>
      <el-table-column
        prop="staffwork"
        label="员工职位"
        width="120">
      </el-table-column>
      <el-table-column
        prop="staffsite"
        label="员工部门"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)" style="background-color: rgb(22,132,252); color: white;">分配权限</el-button>
      </template>
    </el-table-column>
    </el-table>
   </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          tableData: [{
            staffId:"101",
            staffname:"wzy",
            staffsex:"男",
            staffphone:"1234564897",
            staffemile:"1223907588@wy.com",
            staffstate:true,
            staffwork:"经理",
            staffsite:"销售部"
          },{
            staffId:"101",
            staffname:"wzy",
            staffsex:"男",
            staffphone:"1234564897",
            staffemile:"1223907588@wy.com",
            staffstate:true,
            staffwork:"经理",
            staffsite:"销售部"
          },
          {
            staffId:"101",
            staffname:"wzy",
            staffsex:"男",
            staffphone:"1234564897",
            staffemile:"1223907588@wy.com",
            staffstate:true,
            staffwork:"经理",
            staffsite:"销售部"
          },
          {
            staffId:"101",
            staffname:"wzy",
            staffsex:"男",
            staffphone:"1234564897",
            staffemile:"1223907588@wy.com",
            staffstate:true,
            staffwork:"经理",
            staffsite:"销售部"
          }],
          multipleSelection: [],
          value:true
        }
      },
  
      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleEdit(index, row) {
        console.log(index, row);
        this.$emit('getMsgFormSon2',row);
      },
      }
    }
  </script>