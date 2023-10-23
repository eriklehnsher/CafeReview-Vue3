<template>
  <Header class="header-app" />
  <HomePage class="homepage-app" />
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
    Header,
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
.header-app {
  position: sticky;
  top: 0;
}
.homepage-app {
  margin-top: 100px;
  padding: 10px 5%;
  margin-right: 50px;
  background-color: #fff;
}
</style>
