<template>
  <div>
    <h1>App</h1>
    <hr>
    <MyCom>
      <!-- 這裡輸入的東西就會被填充到MyCom.vue的slot中 -->
      <p>SLOT</p>
    </MyCom> 
  </div>
</template>

<script>

import MyCom from './MyCom.vue';
  export default {
    name: "MyCounter",
    data() {
        return {
            count: 0
        };
    },
    components: { MyCom }
}
</script>