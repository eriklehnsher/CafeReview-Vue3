<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {

    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');

#app {
  height: 100vh;
  margin-bottom: 50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: 'ABeeZee', sans-serif;
}
/* .header-app {
  position: sticky;
  top: 0;
} */
</style>
