<template>
  <Header />
  <router-view v-slot="{ Component }" class="body__view">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import 'animate.css'
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
  height: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'ABeeZee', sans-serif;
}
.body__view {
  padding: 38px 28px;
  min-height: calc(100vh - 300px);
}
.route-enter-form {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition:  0.4s ease-out;
}
.route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}
.route-leave-active {
    transition: all 0.3 ease-in;
}
</style>
