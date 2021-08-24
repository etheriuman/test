<template>
  <div v-show="isSideMenuOpen" class="side-menu-wrapper">
    <div class="side-menu">
      <button @click.stop="closeSideMenu" class="side-menu-close"></button>
      <ul class="nav">
          <li class="nav-item"><router-link to="">About</router-link></li>
          <li class="nav-item"><router-link to="">Website</router-link></li>
          <li class="nav-item"><router-link to="">Branding</router-link></li>
      </ul>
      <div class="big-logo"></div>
      <div class="side-menu-footer">
        <div class="info">
          T. 02-2885-8586<br>
          E. info@blockstudio.tw<br>
          3F., No.2, Ln. 80, Sec. 4, Chengde Rd., Shilin Dist., Taipei City 111, Taiwan
        </div>
        <ul class="contact">
          <li class="icon facebook"></li>
          <li class="icon instagram"></li>
          <li class="icon youtube"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSideMenuOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeSideMenu() {
      this.$emit('closeButtonClicked')
    }
  }
}
</script>

<style lang='scss' scoped>
@import './../assets/scss/main.scss';

.side-menu-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background: rgba($white, .66);

  .side-menu {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    right: 0px;
    top: 0px;
    width: 400px;
    height: 100%;
    background-color: $darkGray_01;
    background-image: url('./../assets/images/logo_side_menu.png');
    background-position: top 175px right 44px;
    background-repeat: no-repeat;

    .side-menu-close {
      position: absolute;
      top: 40px;
      right: 40px;
      width: 15px;
      height: 15px;
      background: url('./../assets/images/x_side_menu.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .nav {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0px 0px 130px 40px;

      .nav-item a {
        padding: 5px 2px;
        margin-bottom: 60px;
        font-size: $h5;
        color: $white;
      }
      .nav-item a:hover {
        color: $black;
        background: $white;
      }
    }
    .big-logo {
      position: absolute;
    }
    .side-menu-footer {
      width: 100%;
      background: $black;
      padding: 40px;

      .info {
        font-size: $b2;
        color: $white;
        line-height: 26px;
        margin-bottom: 30px;
      }
      .contact {
        width: 120px;
        display: flex;
        justify-content: space-between;
        
        .icon {
          width: 16px;
          height: 16px;
          
          &.facebook {
            background-image: url('./../assets/images/facebook.png');
          }
          &.instagram {
            background-image: url('./../assets/images/instagram.png');
          }
          &.youtube {
            background-image: url('./../assets/images/youtube.png');
          }
        }
      }
    }
  }
}
</style>