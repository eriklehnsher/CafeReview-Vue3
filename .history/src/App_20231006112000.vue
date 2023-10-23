<template>
<Header />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  
</template>

<script>
import Header from "./components/Header.vue"
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&display=swap");

body {
  margin: 0px;
}
#app {
  background: #d9d9d9;
  height: 1000vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "ABeeZee", sans-serif;
}
</style>
