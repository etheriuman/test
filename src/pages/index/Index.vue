<template>
  <div class="index">
    <section class="banner">
      <div class="center-content">
        <p class="topic">Commercial builders with pride – 
workmanship that values quality.</p>
        <p class="description">Acclaim Contractors are a highly specialised local business with over 20 years building and civil industry experience with many accolades, commendations and awards recognising their workmanship.Acclaim Contractors are a highly specialised local business with over 20 years building .</p>
        <p class="hint">Scroll</p>
      </div>
      <div class="side-content"></div>
      <div class="contact"></div>
    </section>
    
  </div>
</template>

<script>
export default {}
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
      justify-content: flex-end;
      align-items: center;
      padding: 30px 200px;
      text-align: center;

      .topic {
        font-size: $h1;
        margin-bottom: 30px;
      }
      .description {
        max-width: 755px;
        font-size: $b1;
        line-height: 26px;
        margin-bottom: 130px;
      }
      .hint {
        position: relative;
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
  }
}
</style>