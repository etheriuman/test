<template>
  <div v-show="isVideoOpen" class="video">
    <iframe width="1200" height="675" src="https://www.youtube.com/embed/PlCbgZxonJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div @click.stop="closeVideo" class="video-close"></div>
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
  display: flex;
  justify-content: center;
  align-items: center;

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