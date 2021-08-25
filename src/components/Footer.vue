<template>
  <div class="footer">
    <div class="content">
      <div class="info-wrapper">
        <div class="logo"></div>
        <div class="info">
          <ul class="subjects">
            <li class="subject">About</li>
            <li class="subject">Website</li>
            <li class="subject">Branding</li>
          </ul>
          <div class="text">
            T. 02-2885-8586<br>
            E. info@blockstudio.tw<br>
            3F., No.2, Ln. 80, Sec. 4, Chengde Rd., Shilin Dist., Taipei City 111, Taiwan
          </div>
        </div>
      </div>
      <ul class="contact">
        <li class="icon facebook"></li>
        <li class="icon instagram"></li>
        <li class="icon youtube"></li>
      </ul>
    </div>
    <div class="copyright">
      Block Studio©2018 Copyright. All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
@import './../assets/scss/main.scss';

.footer {
  width: 100%;
  background: $black;
  min-height: 100px;
  color: $white;

  .content {
    width: 100%;
    padding: 50px 120px 40px 120px;
    display: flex;
    justify-content: space-between;

    .info-wrapper {
      display: flex;

      .logo {
        width: 17px;
        height: 31px;
        background: url('./../assets/images/logo_footer.png');
        margin-right: 63px;
      }
      .info {
        max-width: 455px;
        display: flex;
        flex-direction: column;

        .subjects {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: $h7;
          margin-bottom: 12px;
        }
        .text {
          width: 100%;
          line-height: 26px;
          font-size: $b2;
        }
      }
    }
    .contact {
      width: 150px;
      display: flex;
      justify-content: space-between;

      .icon {
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

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

  .copyright {
    width: 100%;
    height: 42px;
    border-top: 1px solid $white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $b2;
  }
}

@media screen and (max-width: 1000px) {
  .contact {
    display: none !important;
  }
}
</style>