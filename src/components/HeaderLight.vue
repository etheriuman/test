<template>
  <div class="header">
    <div class="logo"></div>
    <nav class="nav">
      <div class="nav-item">
        <router-link to="">About</router-link>
      </div>
      <div class="nav-item">
        <router-link to="">Website</router-link>
      </div>
      <div class="nav-item">
        <router-link to="">Branding</router-link>
      </div>
      <div class="side-menu-toggle-backspace"></div>
    </nav>
    <div class="side-menu-toggle">
      <div  @click.stop="toggleSideMenu" class="icon-wrapper">
        <span class="side-menu-toggle-icon"></span>
      </div>
    </div>
    <SideMenu :is-side-menu-open="isSideMenuOpen" @closeButtonClicked="toggleSideMenu" />
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue'

export default {
  components: {
    SideMenu
  },
  data() {
    return {
      isSideMenuOpen: false
    }
  },
  methods: {
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen
    }
  }
}
</script>

<style lang='scss' scoped>
@import './../assets/scss/main.scss';

.header {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background: $white;

  .logo {
    width: 115px;
    height: 100%;
    background: url('./../assets/images/logo_light.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  .nav {
    display: flex;
    justify-content: flex-end;

    .nav-item a {
      padding: 8px 0px;
      margin: 0px 30px;
      font-size: $h7;
      color: $black;
      line-height: 100px;
    }
    .nav-item a:hover {
      border-bottom: 1px solid $black;
    }
    .side-menu-toggle-backspace {
      width: 95px;
      height: 100px;
    }
  }
  .side-menu-toggle {
    position: fixed;
    top: 0px;
    right: 0px;
    background: $white;
    width: 95px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-wrapper {
      position: relative;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;

      .side-menu-toggle-icon {
        display: block;
        position: relative;
        width: 18px;
        height: 1px;
        background: $black;
      }
      .side-menu-toggle-icon::before {
        content: '';
        display: block;
        position: absolute;
        width: 18px;
        height: 1px;
        background: $black;
        bottom: 8px;
      }
      .side-menu-toggle-icon::after {
        content: '';
        display: block;
        position: absolute;
        width: 18px;
        height: 1px;
        background: $black;
        top: 8px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .nav-item {
    display: none;
  }
}
</style>