<!--  -->
<template>
  <div class="index">
      <!-- 左侧导航 -->
      <div class="nav">
          <ul style="list-style:none">
              <li>
                  <router-link to="/discovery">发现音乐</router-link>
             </li>
              <li>
                  <router-link to="/playlists">推荐歌单</router-link>
              </li>
              <li>
                  <router-link to="/songs">最新音乐</router-link>
              </li>
              <li>
                  <router-link to="/mvs">发现mv</router-link>
              </li>
          </ul>
      </div>
      <!-- 右侧容器 -->
      <div class="main">
          <!-- 路由出口 -->
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
// import discovery from './discovery'
export default {
    components: {
        // discovery
    }
}

</script>

<style scoped>
    .index{
        display: flex;
        height: 830px;
    }
    .index .nav{
        width: 200px;
        background-color: #ededed;
    } 
    .index .nav li{
        text-align: center;
        margin: 10px;
    }
    .main{
        background-color: orange;
        /* 使用剩余尺寸 */
        flex: 1;
    }
    /* 点击高亮的效果 */
    a.router-link-active{
        color: white;
        background-color: orange;
    }
</style>
