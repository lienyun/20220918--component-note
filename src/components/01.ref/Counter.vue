<template>
  <div>
    <h3>Counter ---- {{ count }}</h3>
    <hr>
    <button type="button" class="btn btn-info" @click="count += 1">+1</button>
  </div>
</template>

<script>
  export default {
    name: "MyCounter",
    data() {
      return {
        count: 0
      }
    },
    methods: {
      reset() {
        this.count = 0
      }
    }
  }
</script>