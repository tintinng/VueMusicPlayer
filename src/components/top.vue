<!--  -->
<template>
  <div class="top">
      <input type="text" v-model="inputValue" @keyup.enter="toSearch">
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: ""
        }
    },
    methods: {
        toSearch() {
            // 如果为空，提示
            if(this.inputValue == '') {
                alert('请输入内容：')
            } else {
                // 携带参数
                this.$router.push(`/result?key=${this.inputValue}`)
            }
        }
    }
}

</script>

<style scoped>
.top{
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
}
</style>
