<template>
  <div>
    <h3>Home --- {{count}}</h3>
    <hr>
    <!-- 想要邊+1 input也能focus->updated -->
    <input type="text" class="form-control" v-focus />
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
  }

}
</script>