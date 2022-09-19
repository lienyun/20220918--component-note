<template>
  <div>
    <h3>MyTest</h3>
    <slot :info="information" :msg="message"></slot>
    <hr>
    
  </div>
</template>

<script>
export default {
  name: "MyTest",
  data() {
    return {
      information: {
        phone: '0900000000',
        address: 'Taipei'
      },
      message: 'abc'
    }
  },
  
}
</script>