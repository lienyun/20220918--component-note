<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    
  </div>
</template>

<script>


  export default {
    name: "MyArticle",
    data() {
        return {
            count: 0
        };
    },
}
</script>

<style lang="less" scoped>
header,main,footer {
  border: 1px solid #efefef;
}

</style>