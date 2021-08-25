<template>
  <div v-show="isVideoOpen" class="video">
    <div class="iframe-wrapper">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/PlCbgZxonJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div @click.stop="closeVideo" class="video-close"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVideoOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeVideo() {
      this.$emit('close-video')
    }
  }
}
</script>

<style lang='scss' scoped>
@import './../../../assets/scss/main.scss';

.video {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba($black, .6);

  .iframe-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 120px 40px 120px;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .video-close {
    display: block;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 35px;
    right: 100px;
    background: url('./../../../assets/images/x_side_menu.png')
  }
}
</style>