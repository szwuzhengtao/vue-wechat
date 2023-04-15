<template>
    <div>
    <div class="search-box">
                <button type="submit" class="search-button"><img mode="withFix" src="../assets/search.png"></button>
                <input type="text" class="search-input" name="q" placeholder="输入搜索词">
                </div>
                <div class="list" v-for="(item,index) in statelist" :key="index">
                    <span  :class="{ list_span_active:index===Indexstate,list_span:index!==Indexstate }" @click="ChangeIndex(index)">
                        <img mode="withFix" :src="item.imgs">
                        <a >{{item.name}}</a>
                    </span>    
                </div>
            </div>     
</template>
<script>
export default ({
    props:{
            statelist:{
                type:Array,
                required:true,
                default: [],
            }
        },
    data(){
        return{

           Indexstate: 0,
        }
    },
    methods: {
      ChangeIndex(index){
     this.Indexstate = index;
       this.$emit('getMsgFormSon',this.Indexstate);
   },
  
}
})
</script>

<style>
.search-box {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 40px;
    width: 87.8%;
    height:4%;
    overflow: hidden;
    margin-left: 6.1%;
    margin-top: 20px;
  }
 
  .search-box img{
      width: 1vw;
  } 

  .search-button {
    background-color: transparent;
    border: none;
    margin-right: 1px;
  }
   
  .search-input {
    border: none;
    flex: 1;
    outline: none; /* 去掉搜索框聚焦时的默认边框 */
    font-size: 8px;
  }

  .list{
    margin-top: 20px;
    width: 100%;
  }
 .list img{
    width: 1vw;
    padding-right: 1vw;
 }
  .list_span{
    height:20%;
    padding-top: 8px;
    padding-left: 10%;
    padding-bottom: 8px;
    font-size: small;
    font-family: "微软雅黑", Arial, sans-serif;
    font-weight: lighter;
    opacity: 0.8;
    display: flex;
    margin-bottom: 4vh;
    background-color: rgb(249, 249, 249);
  }
  .list_span_active{
    height:20%;
    padding-top: 8px;
    padding-left: 10%;
    padding-bottom: 8px;
    font-size: small;
    font-family: "微软雅黑", Arial, sans-serif;
    font-weight: lighter;
    opacity: 0.8;
    display: flex;
    margin-bottom: 4vh;
    background-color: rgb(227, 235, 255);
    color: rgb(72, 129, 244);
  }
</style>