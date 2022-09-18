<template>
  <div>
    <h1 ref="myh1">APP</h1>
    <hr>
    <button type="button" class="btn btn-primary" @click="getRefs">getRefs</button>
  </div>
  <MyCounter ref="counterRef"/>
</template>

<script>
import MyCounter from './Counter.vue'

  export default {
    name: "MyApp",
    methods: {
      getRefs() {
        this.$refs.counterRef.reset()
      }
    },
    components: {
      MyCounter,
    }
  }
</script>