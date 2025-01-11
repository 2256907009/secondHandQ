<script setup>

import {ref} from "vue";

import { Search,Avatar,Shop } from '@element-plus/icons-vue'
let searchProduct = ref()

</script>

<template>
<div>
  <div class="header">
    <div class="title"><el-icon style="transform: translateY(25%)" size="30px"><Shop /></el-icon>二手校园市场</div>
    <div class="item">
      <div>校园资讯</div>
      <div>公告栏</div>
      <div>关于我们</div>
      <div>常见问题</div>
      <div>联系我们</div>
    </div>

    <div class="search">
      <el-input
          v-model="searchProduct"
          style="width: 150px;height: 30px"
          placeholder="搜索商品..."
          :prefix-icon="Search"
          class="input"

      />
      <el-button :icon="Avatar" color="black" style="width: 100px" class="login">登录/注册</el-button>
    </div>
  </div>

  <div class="container">
    <div class="play">
        <h1 class="main-play-h1">欢迎来到校园二手交易平台</h1>
        <h5 class="main-play-h5">在这里，你可以轻松买卖二手商品，为校园生活增添便利与乐趣</h5>
        <div>
          <el-button color="black" style="width: 80px">开始浏览</el-button>
          <el-button color="white" style="width: 80px;border: 1px solid #e1e1e1">发布商品</el-button>
        </div>
    </div>
  </div>

  <div class="hot-product">
    <h3 class="product-title">热门商品</h3>
    <div class="product-list">
      <el-card style="width: 480px" shadow="hover">Always</el-card>
      <el-card style="width: 480px" shadow="hover">Hover</el-card>
      <el-card style="width: 480px" shadow="hover">Never</el-card>
    </div>

  </div>


</div>
</template>

<style scoped>

*{
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.header{
  z-index:20;
  display: flex;
  padding-left: 20px;
  line-height: 10vh;
  width: calc(100vw - 20px);
  height: 10vh;
  font-size: 14px;
  border-bottom: 1px solid #c8c8c8;
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  .item{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    transform:  translateY(2%) translateX(-40%);
  }
  .search{
    padding-left: 200px;
  }
  .login{
    margin-left: 10px;
  }
}

/* 设置容器的样式 */
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  /* 设置主要播放区域的样式 */
  .play {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* 设置标题的样式 */
    .main-play-h1 {
      font-size: 2em;
      color: #333;
      margin-bottom: 10px;
    }
    /* 设置副标题的样式 */
    .main-play-h5 {
      font-size: 1em;
      color: #666;
      margin-bottom: 20px;
    }
  }
}

.hot-product{

  .product-title{
    margin-bottom: 10px;
  }
  .product-list{
    display: flex;
  }
  .product-list el-card {
    width: 30px;
    height: 50px;
    background-color: #3c98f4;
  }
}





</style>
