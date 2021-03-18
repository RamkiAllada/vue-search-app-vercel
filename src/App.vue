<template>
  <div id="app">
    <Container />
  </div>
</template>
<script>
import Container from "./components/Container/Container.vue";

export default {
  name: "app",
  components: {
    Container
  }
};
</script>
<style lang="less">
@import url(../node_modules/bootstrap/less/bootstrap.less);
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
