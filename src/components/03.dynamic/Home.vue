<template>
  <div>
    <h3>Home --- {{ count }}</h3>
    <button type="button" class="btn btn-primary" @click="count+=1">+1</button>
    

    
  </div>
</template>

<script>
  
  
    export default {
      name: "MyHome",
      data() {
        return {
          count: 0
        }
      },
      
      

    }
  </script>

  <style lang="less" scoped>

  </style>