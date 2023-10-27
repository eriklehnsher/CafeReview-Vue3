<template>
  <Header />

  <router-view v-slot="{ Component, route }">
    <!-- Use any custom transition and  to `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
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
/* page-fade animation */
.page-opacity-enter-form,
.page-opacity-leave-to {
  opacity: 0;
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 600ms ease all;
}

/* page-slide animation */
.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}
.page-opacity-enter-form,
.page-opacity-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>
