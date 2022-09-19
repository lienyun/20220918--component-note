<template>
  <table>
    <thread>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>State</th>
      </tr>
    </thread>

    <tbody>
      <tr v-for="item in list" :key="item.id">
        <slot :user="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: "MyTable",
  data() {
    return {
      list: [
        {id: 1, name: 'Kelly', state: true},
        {id: 2, name: 'Shin', state: false},
        {id: 3, name: 'Clara', state: false}


      ]
    }
  }
}
</script>