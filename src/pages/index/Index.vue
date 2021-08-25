<template>
  <div class="index">
    <section class="banner">
      <div class="center-content">
        <p class="topic">Commercial builders with pride – 
workmanship that values quality.</p>
        <p class="description">Acclaim Contractors are a highly specialised local business with over 20 years building and civil industry experience with many accolades, commendations and awards recognising their workmanship.Acclaim Contractors are a highly specialised local business with over 20 years building .</p>
        <p class="hint">Scroll</p>
      </div>
      <div class="side-content">Block Studio©2018 Copyright. All Rights Reserved.</div>
      <ul class="contact">
        <li class="icon facebook"></li>
        <li class="icon instagram"></li>
        <li class="icon youtube"></li>
      </ul>
    </section>
    <section class="works">
      <p class="title">Works</p>
      <Gallery />
      <div class="tail">
        <p>Woden Public Realm Improvements Works Package 1 Including Lift & Stairs.</p>
        <button class="see-more">
          More
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue'

export default {
  components: {
    Gallery
  }
}
</script>

<style lang='scss' scoped>
@import './../../assets/scss/main.scss';

.index {
  position: relative;
  width: 100%;
  height: 100%;

  .banner {
    position: relative;
    width: 100%;
    height: 780px;
    background-image: url('./../../assets/images/full-bg 1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: $white;

    .center-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 200px;
      text-align: center;

      .topic {
        font-size: $h1;
        margin-top: 300px;
        margin-bottom: 30px;
      }
      .description {
        max-width: 755px;
        font-size: $b1;
        line-height: 26px;
        margin-bottom: 130px;
      }
      .hint {
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translate(-50%, 0px);
        font-size: $b2;
      }
      .hint::after {
        content: '';
        display: block;
        margin: 10px auto;
        width: 1px;
        height: 60px;
        background: $white;
      }
    }
    .side-content {
      position: absolute;
      font-size: $b2;
      writing-mode: vertical-lr;
      top: 270px;
      left: 40px;
    }
    .contact {
      position: absolute;
      width: 188px;
      display: flex;
      justify-content: space-between;
      left: 40px;
      bottom: 30px;

      .icon {
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        
        &.facebook {
          background-image: url('./../../assets/images/facebook.png');
        }
        &.instagram {
          background-image: url('./../../assets/images/instagram.png');
        }
        &.youtube {
          background-image: url('./../../assets/images/youtube.png');
        }
      }
      
    }
  }

  .works {
    width: 100%;
    padding: 97px 120px 138px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .title {
      font-size: $h1;
      margin-bottom: 95px;
    }
    .tail {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p {
        font-size: $h4;
        color: $darkGray_02;
        max-width: 672px;
        margin-bottom: 20px;
        line-height: 36px;

        &::before {
          content: '';
          display: block;
          width: 1px;
          height: 137px;
          background: $black;
          position: relative;
          left: 50%;
          margin-bottom: 20px;
        }
      }
      .see-more {
        display: block;
        width: 250px;
        height: 50px;
        border: 1px solid $black;
        border-radius: 2px;
        font-size: $h6;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .center-content {
    padding: 30px 100px !important;
  }
  .topic {
    font-size: $h2 !important;
  }
}

@media screen and (max-width: 768px) {
  .center-content .description {
    display: none;
  }
  .topic {
    font-size: $h3 !important;
  }
}
</style>