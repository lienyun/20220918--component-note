<template>
  <div>
    <h1>App</h1>
    <hr>
    <MyTest>
      <template v-slot:default="scope">
        <p>{{ scope.info.address }}</p>
      </template>
    </MyTest>
  </div>
</template>

<script>
import MyTest from './MyTest.vue'

export default {
  name: "MyApp",
  data() {
    return {
      count: 0
    };
  },
  components: {
    MyTest,
  }
}
</script>