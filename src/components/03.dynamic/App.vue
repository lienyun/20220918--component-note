<template>
  <div>
    <h1 class="mb-4">App</h1>


    <button type="button" class="btn btn-primary" @click="comName='MyHome'">Home</button>
    <button type="button" class="btn btn-info ml-2" @click="comName='MyMovie'">Movie</button>
    <hr>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>

  </div>
</template>

<script>
import MyHome from './Home.vue'
import MyMovie from './Movie.vue'

export default {
  name: "MyApp",
  data() {
    return {
      comName: 'MyHome'
    }
  },
  components: {
    MyHome,
    MyMovie
  }

}
</script>

<style lang="less" scoped>

</style>