<!--  -->
<template>
  <div>
      <!-- 顶部 -->
      <top></top>
      <!-- 主体组件 -->
      <index></index>
  </div>
</template>

<script>
import top from './components/top.vue'
import index from './components/index.vue'

export default {
  components: {
    top,
    index
  }
}

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
