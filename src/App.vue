<template>
  <div id="app">
    <HeaderDark v-if="colorMode === 'dark'" />
    <HeaderLight v-else />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import HeaderDark from './components/HeaderDark.vue'
import HeaderLight from './components/HeaderLight.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderDark,
    HeaderLight,
    Footer
  },
  data() {
    return {
      colorMode: 'dark'
    }
  },
  beforeUpdate() {
    if (this.$route.name === 'index') {
      this.colorMode = 'dark'
    } else {
      this.colorMode = 'light'
    }
  }
}
</script>

<style lang='scss'>
@import 'assets/scss/reset.scss';
@import 'assets/scss/main.scss';

body {
  font-family: $mainFont;
}
</style>
