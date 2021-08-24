<template>
  <div class="single">
    <section class="banner"></section>
    <section class="topic">
      <div class="title">Woden Public Realm Improvements Works Package 1 Including Lift & Stairs</div>
      <div class="description">
        <div class="description-title">
          Award
        </div>
        <div class="description-content">
          <div class="description-content-left">
            <div class="description-item">
              <p class="subject">CLENT</p>
              <p class="subject-content">ACT Government</p>
            </div>
            <div class="description-item">
              <p class="subject">SUMMARY</p>
              <p class="subject-content">On time and on budget - 2017 MBA Award Winning Project</p>
            </div>
          </div>
          <div class="description-content-right">
            <div class="description-item">
              <p class="subject">STATUS</p>
              <p class="subject-content">Completed 2017</p>
            </div>
            <div class="description-item">
              <p class="subject">LOCATION</p>
              <p class="subject-content">Woden Bus Interchange Bradely Street Phillip ACT 2606</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <section class="intro">
        <div class="text">
          Acclaim Contractors Pty Ltd were engaged by the ACT Government to complete the Woden Public Realm Improvements (Works Package 1 Including Lift & Stairs) project under Contract No. 21646.340. The project was initiated to improve the user experience at the existing Woden Bus Interchange and provide a connection to the Woden Town Square. The works provided an improvement to public safety, pedestrian and cyclist movements, lighting and provide improved user access.
        </div>
        <div class="picture"></div>
      </section>
      <section class="story">
        <div class="text">The nominated works were described as the partial demolition of the upper and lower area including overhead walkway and roof slab, public toilets and cafe and the construction of new stairs and provision of an external public lift at the Woden Bus Interchange.The nominated works were described as the partial demolition of the upper and lower area including overhead walkway and roof slab, public toilets and cafe and the construction of new stairs and provision of an external public lift at the Woden Bus Interchange.</div>
        <div class="picture"></div>
      </section>
      <section class="video-wrapper">
        <div @click.stop="toggleVideoPlayer" class="player-button"></div>
        <Video :is-video-open="isVideoOpen" @close-video="toggleVideoPlayer" />
      </section>
      <section class="tail">
        <p>
          Woden Public Realm Improvements Works Package 1 Including Lift & Stairs.
        </p>
      </section>
    </section>
    <div class="pagination">
      <div class="prev"><span>Previous</span></div>
      <div class="next"><span>Next</span></div>
    </div>
  </div>
</template>

<script>
import Video from './components/Video.vue'

export default {
  components: {
    Video
  },
  data() {
    return {
      isVideoOpen: false,
    }
  },
  methods: {
    toggleVideoPlayer() {
      this.isVideoOpen = !this.isVideoOpen
    }
  }
}
</script>

<style lang='scss' scoped>
@import './../../assets/scss/main.scss';

.single {
  position: relative;
  width: 100%;
  height: 100%;

  .banner {
    width: 100%;
    height: 780px;
    padding-top: 100px;
    background-image: url('./../../assets/images/single_img_banner 1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .topic {
    width: 100%;
    padding: 90px 120px 45px 120px;
    display: flex;
    justify-content: space-between;
    background: $lightGray_02;
    background-image: url('./../../assets/images/logo_single_topic.png');
    background-repeat: no-repeat;
    background-position: top 40px left 32px;

    .title {
      width: 580px;
      font-size: $h2;
    }
    .title::after {
      content: '';
      display: block;
      width: 280px;
      height: 2px;
      margin-top: 20px;
      background: $black;
    }

    .description {
      width: 490px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      .description-title {
        font-size: $h4;
      }
      .description-content {
        display: flex;
        justify-content: space-between;
        font-size: $b2;
        line-height: 26px;

        .description-content-left {
          margin-right: 40px;
        }
        .subject {
          position: relative;
          color: $lightGray_01;
        }
        .description-item {
          margin-top: 45px;
        }
        .description-item::before {
          content: '';
          display: block;
          width: 23px;
          height: 1px;
          position: relative;
          top: -10px;
          background: $black;
        }
      }
    }
  }
  
  .content {
    width: 100%;
    padding: 77px 120px 0px 120px;

    .intro {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 120px;
      
      .text {
        max-width: 587px;
        font-size: $b2;
        line-height: 26px;
      }
      .text::before {
        content: 'INTRO';
        display: block;
        margin-bottom: 8px;
        color: $lightGray_01;
      }
      .picture {
        width: 486px;
        height: 364px;
        background: url('./../../assets/images/single_img 1.png')
      }
    }
    .story {
      width: 100%;
      position: relative;
      margin-bottom: 150px;
      
      .text {
        width: 690px;
        height: 300px;
        padding: 72px 50px 60px 50px;
        background: $white;
        position: absolute;
        left: 510px;
        top: 210px;
        font-size: $b2;
        line-height: 26px;
        
      }
      .text::before {
        content: '';
        display: block;
        width: 23px;
        height: 2px;
        background: $black;
        margin-bottom: 12px;
      }
      .text::after {
        content: '';
        display: block;
        width: 152px;
        height: 152px;
        position: absolute;
        top: 150px;
        right: 15px;
        background: linear-gradient(
          to bottom right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - .6px),
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) calc(50% + .6px),
          rgba(0, 0, 0, 0) 100%
        );
      }
      .picture {
        width: 690px;
        height: 453px;
        background: url('./../../assets/images/index_img_03 2.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    .video-wrapper {
      position: relative;
      width: 100%;
      height: 675px;
      background-image: url('./../../assets/images/full-bg 1.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin-bottom: 93px;

      .player-button {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 88px;
        height: 88px;
        border-radius: 50%;
        background: $darkGray_02;
        transition: background-color .3s;
        cursor: pointer;

        &::after {
          content: '';
          display: block;
          width: 40px;
          height: 40px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: $white;
          transition: background-color .3s;
          clip-path: polygon(25% 0%, 100% 50%, 25% 100%, 25% 0%);
        }
      }
      .player-button:hover {
        background: $white;

        &::after {
          background: $darkGray_01;
        }
      }
    }
    .tail {
      margin-bottom: 150px;
      display: flex;
      justify-content: center;

      p {
        max-width: 672px;
        text-align: center;
        font-size: $h4;
        color: $darkGray_02;

        &::before {
          content: '';
          display: block;
          width: 1px;
          height: 137px;
          background: $darkGray_02;
          position: relative;
          left: 50%;
          margin-bottom: 20px;
        }
      }
    }
  }
  .pagination {
    display: flex;
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: $h6;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      &.prev {
        width: 50%;
        height: 100%;
        position: relative;
        border: 1px solid $darkGray_01;
        color: $darkGray_01;

        span {
          position: relative;

          &::before {
            content: '';
            display: block;
            width: 28px;
            height: 28px;
            position: absolute;
            top: 0px;
            left: -100px;
            background: url('./../../assets/images/arrow_prev.png')
          }
        }
      }
      &.next {
        width: 50%;
        height: 100%;
        position: relative;
        background: $darkGray_01;
        color: $white;

        span {
          position: relative;

          &::after {
            content: '';
            width: 28px;
            height: 28px;
            position: absolute;
            top: 0px;
            right: -100px;
            background: url('./../../assets/images/arrow_next.png')
          }
        }

      }
    }
  }
}

</style>