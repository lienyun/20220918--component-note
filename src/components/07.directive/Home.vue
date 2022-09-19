<template>
  <div>
    <h3>Home</h3>
    <hr>
    <!-- 想一進入頁面input就被focus -->
    <input type="text" class="form-control" v-focus>
  </div>
</template>

<script>


export default {
  name: "MyHome",
  directives: {
    focus: {
      //當被綁定的元素插入到DOM中時，自動觸發mounted()
      mounted(el) {
        //el是原生DOM，指向那個input
        el.focus()
      }
    }
  }

}
</script>