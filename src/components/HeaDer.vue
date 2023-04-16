<template>
  <div class="banner">
    <div class="row">
      <div class="banner-section">
        <div class="text-area">
          <h1>
            You a click away <br />
            from getting Health Service
          </h1>
          <p class="pt-3 pb-5">
            Lorem ipsum dolor sit amet consetertur sadipcing tyorue nonnamy
            airmad tempor<br />invidunt ut labour magna aliqyuamim
          </p>
          <button
            type="submit"
            title="Signup button"
            class="btn1 btn-light active"
          >
            Sign Up Now
          </button>
        </div>
        <div class="image-area">
          <img src="../assets/font-img.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.banner {
  width: 100vw;
  min-height: 80vh;
  background-color: rgba(254, 254, 254, 255);
  margin: 30px;
}
.banner-section {
  display: flex;
}
.text-area {
  width: 100%;
  margin: 70px;
  display: block;
  text-align: left;
}
h1 {
  font-display: block;
  font-size: 50px;
  line-height: 70px;
  font-weight: 550;
  color: rgb(94, 94, 191);
}
.image-area {
  width: 100%;
  margin: 10px;
}
img {
  width: 100%;
  height: 50vh;
}
@media screen and (max-width: 750px) {
  .banner {
    width: 100vw;
    min-height: 80vh;
  }
  .row {
    flex-direction: column;
  }
  .first-section {
    margin-top: 3em;
    text-align: left;
    width: 100%;
  }
  .second-section {
    margin-top: 3em;
    width: 100%;
  }
  img {
    width: 100%;
  }
}
</style>
