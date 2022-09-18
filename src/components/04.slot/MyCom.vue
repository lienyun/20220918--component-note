<template>
  <div class="com-container">
    <h3>slot用法</h3>
    <hr>
    <p>這是一個p</p>
    <slot>預設內容</slot>
    <p>最後一個p</p>
  </div>
</template>

<script>
  export default {
    name: "MyCom",
    
  }
</script>

<style lang="less" scoped>
.com-container {
  border: 1px solid #efefef
}
</style>