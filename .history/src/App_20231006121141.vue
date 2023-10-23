<template>
  <Header class="header" />
  <HomePage msg="Welcome to Your Vue.js App" />
</template>

<script >
import Header from "./components/Header.vue";
import HomePage from "./components/HomePage.vue";

window.addEventListener("scroll", function() {
 var header = document.querySelector("header");
 header.classList.toggle("sticky", window.scrollY >0);
})
export default {
  name: "App",
  components: {
    HomePage,
    Header,
  },
};
</script >

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
/* .header-app {
  z-index: -1000;
} */
</style>
