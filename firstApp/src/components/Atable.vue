<template>
    <div style="height: 620px;margin-top: 2px;width: 98%;padding: 1%;padding-top: 10px;background-color: #fff;">
        <table class="table">
            <thead>
                <tr >
                    <th v-for="(item, index) in tabletitle" :key="index" >{{ item.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in paginatedData" :key="index">
                    <td>{{ item.customerId }}</td>
                    <td>{{ item.customerName }}</td>
                    <td>{{ item.customerGender }}</td>
                    <td>{{ item.customerPhone }}</td>
                    <td>{{ item.customerEmail }}</td>
                    <td>{{ item.customerAddress }}</td>
                    <td>{{ item.customerJointime }}</td>
                    <td>{{ item.chargeStaff }}</td>
                    <td v-if="item.customerName!=null" style="width:13%">
                        <div class="table_bottom" style="display: flex;">
                            <button type="button" onclick="parent.dianwo()" style="background-color:white; border:none">
                                <img style="width:30%; " src="../assets/edit.png">
                            </button>

                            <button type="button" onclick="parent.dianwo2()" style="background-color:white; border:none;">
                                <img style="width:30%;" src="../assets/delete.png">

                            </button>
                        </div>
                    </td>
                    <td v-else></td>
                </tr>
            </tbody>
        </table>
        <div style="width: 100%;height: 50px;background-color: rgb(239,239,239);">
      <ul class="pagination" style="text-align:center; width: 60%;background-color: rgb(239,239,239);">
            <li :class="{ disabled: currentPage === 1 }">
                <a  @click.prevent="goToPage(1)">首页</a>
            </li>
            <li :class="{ disabled: currentPage === 1 }">
                <a  @click.prevent="goToPage(currentPage - 1)">上一页</a>
            </li>
            <li>
                <span>第{{ currentPage }}/{{ totalPages }}页</span>
            </li>
            <li :class="{ disabled: currentPage === totalPages }">
                <a  @click.prevent="goToPage(currentPage + 1)">下一页</a>
            </li>
            <li :class="{ disabled: currentPage === totalPages }">
                <a  @click.prevent="goToPage(totalPages)">尾页</a>
            </li>
        </ul>
    </div>
    </div>
  </template>
  
  
  <script>
    export default {
        props:{
            tabletitle:{
                type:Array,
                required:true,
                default: [],
            },
            tableData:{
                type:Array,
                required:true,
                default: [],
            }
        },
      data() {
        return {

                    pageSize: 8, // 每页显示的数据条数
                currentPage: 1 // 当前页码
                }
      },
 
      /* created() { // make an AJAX request to retrieve the data
                /*fetch('/api/data') .then(response => response.json()) .then(data => {
                    // set the tableData to the retrieved data
                    this.tableData = data; }) .catch(error => { console.error('Error retrieving data:', error); }); },*/
            computed: {
                totalPages: function () {
                    // 总页数
                    return Math.ceil(this.tableData.length / this.pageSize);
                },
                paginatedData: function () {
                    // 分页后的数据
                    var start = (this.currentPage - 1) * this.pageSize;
                    var end = start + this.pageSize;
                    var data = this.tableData.slice(start, end);

                    // 如果当前页显示的数据不足8条，则用空对象补齐
                    var fillCount = this.pageSize - data.length;
                    if (fillCount > 0) {
                        var emptyData = Array.from({ length: fillCount }, () => ({}));
                        data = data.concat(emptyData);
                    }

                    return data;
                },
                pages: function () {
                    // 页码数组
                    var pages = [];
                    for (var i = 1; i <= this.totalPages; i++) {
                        pages.push(i);
                    }
                    return pages;
                }
            },
            methods: {
                goToPage: function (page) {
                    // 跳转到指定页码
                    if(page>=1&&page<=this.totalPages)
                    this.currentPage = page;
                },
                prevPage: function () {
                    // 上一页
                    if (this.currentPage > 1) {
                        console.log(this.currentPage);
                        this.currentPage--;
                    }
                },
                nextPage: function () {
                    // 下一页
                    if (this.currentPage < this.totalPages) {
                        this.currentPage++;
                    }
                }
            }
    }
  </script>


<style>


        .table {
            border-collapse: collapse;
            width: 100%;
            height: 100%;
            background-color: #fff;
        }

            .table th,
            .table td{
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
                height: 40px;
            }



        .pagination {
            display: flex;
            background-color: #fff;
            height: 10px;
            margin-left: 30% ;
        }

            .pagination li {
                display: inline-block;
                vertical-align: middle;
                padding: 5px;
                background-color: rgb(255,255,255);
                margin-right: 2rem;
                margin-top: 0.5rem;
                height: 20px;
            }



                .pagination li.disabled {
                    color: #ccc;
                    cursor: not-allowed;
                }

            .pagination a {
                text-decoration: none;
                color: black;
               margin-top:0;
               padding: 0;
               
            }
           .el-table-column{
             display: flex;
            align-items: center;
             
           }
    </style>