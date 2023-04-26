<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="banner-section">
          <div class="col-md text-area">
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
          <div class="col-md-6 image-area">
            <img src="../assets/font-img.png" class="image-fluid" />
          </div>
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
  padding: 30px;
}
.text-area {
  margin: 10px;
  padding: 20px;
}
.image-area {
  padding: 30px;
  margin: 20px;
}
.btn1 {
  height: 45px;
  width: 200px;
  color: rgb(21, 21, 145);
  font-weight: 700;
  box-shadow: 0px 20px 40px rgba(80, 78, 78, 0.34);
  background-color: white;
  border: none;
  font-size: 16px;
  font-family: sans-serif;
  border-radius: 5px;
  max-width: 150px;
  min-width: 150px;
  outline: none;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
}
h1 {
  font-display: block;
  font-size: 50px;
  line-height: 70px;
  font-weight: 550;
  color: rgb(94, 94, 191);
}
img {
  width: 50%;
  height: 50vh;
}
img.image-area .mage-fluid {
  padding: 30px;
  margin: 30px;
}
.mage-fluid {
  margin-left: 100px;
  padding: 20px;
}
@media screen and (max-width: 490px) {
  .banner {
    width: 100vw;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
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
