<template>
  <div class="gallery">
    <div class="card-ninja"></div>
    <div class="card-ninja"></div>
    <div class="card-ninja"></div>
    <div class="card card-text">
      <p class="title">
        Award winning civil contractors that partner with all levels of government.
      </p>
      <p class="description">
        The Australian Treasury Building & King Edward TCE Barton Canberra City.
      </p>
      <div class="arrow"></div>
    </div>
    <div class="card card-text">
      <p class="title">
        Known for their innovation in providing solutions.
      </p>
      <p class="description">
        The Australian Treasury Building & King Edward TCE Barton Canberra City.
      </p>
      <div class="arrow"></div>
    </div>
    <div class="card card-text">
      <p class="title">
        Woden Public Realm Improvements Works Package 1
      </p>
      <p class="description">
        The Australian Treasury Building & King Edward TCE Barton Canberra City.
      </p>
      <div class="arrow"></div>
    </div>
    <div class="card card-picture">
      <div class="picture picture1"></div>
      <div class="text-wrapper">
        <div class="tag">Award</div>
        <div class="title">
          Woden Public Realm Improvements Works Package 1 Including Lift & Stairs
        </div>
        <div class="description">
          Urban Public Realm Refurbishment.
        </div>
        <div class="subjects">
          <div class="subject clent">
            <div class="subject-title">CLENT</div>
            <div class="subject-content">ACT Government</div>
          </div>
          <div class="subject tatus">
            <div class="subject-title">STATUS</div>
            <div class="subject-content">Completed 2017</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-picture">
      <div class="picture picture2"></div>
      <div class="text-wrapper">
        <div class="tag">Award</div>
        <div class="title">
          Woden Public Realm Improvements Works Package 1 Including Lift & Stairs
        </div>
        <div class="description">
          Urban Public Realm Refurbishment.
        </div>
        <div class="subjects">
          <div class="subject clent">
            <div class="subject-title">CLENT</div>
            <div class="subject-content">ACT Government</div>
          </div>
          <div class="subject tatus">
            <div class="subject-title">STATUS</div>
            <div class="subject-content">Completed 2017</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-picture">
      <div class="picture picture3"></div>
      <div class="text-wrapper">
        <div class="tag">Award</div>
        <div class="title">
          Woden Public Realm Improvements Works Package 1 Including Lift & Stairs
        </div>
        <div class="description">
          Urban Public Realm Refurbishment.
        </div>
        <div class="subjects">
          <div class="subject clent">
            <div class="subject-title">CLENT</div>
            <div class="subject-content">ACT Government</div>
          </div>
          <div class="subject tatus">
            <div class="subject-title">STATUS</div>
            <div class="subject-content">Completed 2017</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
@import './../../../assets/scss/main.scss';

.gallery {
  width: 100%;
  display: grid;
  margin-bottom: 115px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 386px);
  grid-auto-rows: 4px;

  .card {
    margin: 10px;
    
    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);  
    }

    &.card-text {
      position: relative;
      grid-row-end: span 97;
      padding: 32px 27px 52px 27px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        width: 100%;
        font-size: $h3;
        line-height: 38px;
      }
      .description {
        width: 100%;
        font-size: $b2;
        line-height: 26px;
        position: relative;
        
        &::before {
          content: '';
          display: block;
          width: 19px;
          height: 3px;
          background: $black;
          position: absolute;
          top: -17px;
        }
      }
      .arrow {
        position: absolute;
        width: 28px;
        height: 28px;
        right: 26px;
        bottom: 24px;
        background-image: url('./../../../assets/images/arrow.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    &.card-picture {
      grid-row-end: span 153;

      .picture {
        width: 100%;
        height: 360px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        &.picture1 {
          background-image: url('./../../../assets/images/index_img_01 1.png');
        }
        &.picture2 {
          background-image: url('./../../../assets/images/index_img_02 1.png');
        }
        &.picture3 {
          background-image: url('./../../../assets/images/index_img_03 2.png');
        }
      }
      .text-wrapper {
        width: 100%;
        padding: 20px 20px 0px 20px;
        color: $black;

        .tag {
          width: 70px;
          height: 30px;
          border-radius: 2px;
          background: $black;
          font-size: $b2;
          line-height: 30px;
          color: $white;
          text-align: center;
          margin-bottom: 12px;
        }
        .title {
          font-size: $h6;
          line-height: 24px;
        }
        .description {
          font-size: $b2;
          line-height: 26px;
          margin-bottom: 12px;
        }
        .subjects {
          width: 100%;
          display: flex;
          font-size: $b2;
          line-height: 26px;

          .subject {
            width: 110px;
            
            &.clent {
              margin-right: 80px;
            }

            .subject-title {
              color: $lightGray_01;
            }
          }
        }
      }
    }
  }
  .card-ninja {
    &:nth-child(1) {
      grid-row-end: span 0;
    }
    &:nth-child(2) {
      grid-row-end: span 9;
    }
    &:nth-child(3) {
      grid-row-end: span 17;
    }
  }
}

@media screen and (max-width: 1000px) {
  .card-ninja {
    display: none;
  }
}
</style>