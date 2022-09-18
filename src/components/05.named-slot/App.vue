<template>
  <div>
    <h1>App</h1>
    <hr>
    <MyArticle>
      <template #header>
        <h1>登 鸛 鵲 樓</h1>
      </template>

      <template #default>
        <p>白日依山盡，黃河入海流。</p>
        <p>欲窮千里目，更上一層樓。</p>
      </template>

      <template #footer>
        <p>作者:王之渙</p>
      </template>
    </MyArticle>
  </div>
</template>

<script>
import MyArticle from './MyArticle.vue';

export default {
  name: "MyApp",
  data() {
    return {
      count: 0
    };
  },
  components: {
    MyArticle,
  }
}
</script>