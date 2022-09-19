<template>
  <div>
    <h1>App</h1>
    <hr>
    <MyTest>
      <template #default="{msg, info}">
        <p>{{ msg }}</p>
        <p>{{ info.address }}</p>

      </template>
    </MyTest>
    <hr>
    <MyTable>
      <template #default="{user}">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>
          <input type="checkbox" :checked="user.state">
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTest from './MyTest.vue'
import MyTable from './MyTable.vue'

export default {
  name: "MyApp",
  data() {
    return {
      count: 0
    };
  },
  components: {
    MyTest,
    MyTable
  }
}
</script>