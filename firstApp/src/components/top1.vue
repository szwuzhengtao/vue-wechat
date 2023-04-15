<template>
     <div class="top">
                    <div class="dropdown">
                        <button class="top_button"><span style="font-size:17px">不限</span><img mode="withFix" src="../assets/down.png"></button>
                        <div class="dropdown-content">
                            <a>不限</a>
                            <a>名称</a>
                            <a>手机号</a>
                            <a>邮箱</a>
                            <a>客户状态</a>
                            <a>城市</a>
                        </div>
                    </div>
                    <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="input2" 
                        class="my-input"
                        >
                      </el-input>
                    <span class="other">更多搜索</span>
                    <span class="other">撞客查询</span>
                    <div class="icon">
                        <img mode="withFix" src="../assets/increase2.png">
                        <img mode="withFix" src="../assets/more3.png">
                        <img mode="withFix" src="../assets/reminder.png">
                        <img mode="withFix" src="../assets/message.png">
                        <img mode="withFix" src="../assets/phone.png">
                    </div>
                </div>
</template>
<script>

export default ({
    data() {
    return {
      input2:"123",
    }
  },
  methods: {
    
  }
})
</script>


<style>
.top{
  display: flex;
  width: 100%;
  height: 6%;
  align-items: center;
  height: 100%;
}
.my-input{
  border: none; overflow: hidden;width: 20rem;
}
.my-input .el-input__inner {
 /* 设置输入框的宽度 */
  height: 47px; /* 设置输入框的高度 */
}

.top_button {
    background-color: rgb(22,132,252);
    border: none;
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    align-items: center;
    margin-left: 0%;
}

.dropdown {
    display: flex;
    width:10%;
    height:75%;
   padding-left: 15%;
    display: inline-block;
    border: none;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        display: block;
    }

        .dropdown-content a:hover {
            background-color: #f1f1f1
        }

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
.top_button img{
  width: 1vw;
  margin-left: auto;
}

.top_button span{
  margin-left: 30%;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: small;
}

.top .search-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  overflow: hidden;
  width:29%;
  height: 75%;
  border-radius: 5px;
}
.top .search-box img{
    width: 1vw;
} 

.top .search-button {
  border: none;
  margin-right: 1px;
  background-color: white;
}

.top .search-input {
  border: none;
  flex: 1;
  outline: none; /* 去掉搜索框聚焦时的默认边框 */
  font-size: 8px;
}

.top .other{
  font-size: 10px;
  margin-left: 1%;
  font-family: 'Montserrat', sans-serif;
  opacity: 0.5;
}

.top .icon{
  margin-left: 10%;
  padding-left:  5%;
  padding-right: 0;
  width: 20%;
  height: 55%;
  display: flex;
  text-align: center;

}

.top .icon img{
  margin-left: 5%;
  padding: 0;
  margin-right: auto;
  margin-top:10px;
}
</style>