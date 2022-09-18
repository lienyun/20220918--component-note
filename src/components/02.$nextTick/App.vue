<template>
  <div>
    <h1>App</h1>
    <hr>

    <input type="text" class="form-control" v-if="inputVisible" ref="ipt">
    <button type="button" class="btn btn-primary" v-else @click="showInput">展示Input</button>
  </div>
</template>

<script>
  
  
    export default {
      name: "MyApp",
      data() {
        return {
          inputVisible: false
        }
      },
      methods: {
        showInput() {
          this.inputVisible = true
          
          //this.$refs.ipt.focus()//undefined
          //DOM更新是異步的，執行this.$refs.ipt.focus()的那瞬間，DOM還沒完成更新，input還沒被顯示，所以會是undefined
          this.$nextTick(() => {
            this.$refs.ipt.focus()
          })
        }
      }

    }
  </script>

  <style lang="less" scoped>
    input.form-control {
      width: 280px;
      display: inline;
      vertical-align: bottom;
    }
  </style>