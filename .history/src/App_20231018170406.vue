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

  height: 600vh;
  margin-bottom: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: "ABeeZee", sans-serif;
}
/* .header-app {
  position: sticky;
  top: 0;
} */

</style>
