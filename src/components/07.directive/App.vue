<template>
  <div>
    <h1>App</h1>

    <input type="text" class="form-control" v-focus>

    <hr>
    <MyHome></MyHome>
  </div>
</template>

<script>
import MyHome from './Home.vue'

export default {
  name: "MyApp",

  components: {
    MyHome
  }
}
</script>