<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="banner-section">
          <div class="text-area">
            <h1>You a click away from getting<br />Health Service</h1>
            <p class="pt-3 pb-5">
              Lorem ipsum dolor sit amet consetertur sadipcing tyorue nonnamy
              airmad tempor invidunt ut labour magna aliqyuamim airmad tempor
              invidunt ut labour magna aliqyuamim
            </p>
            <button
              type="submit"
              title="Signup button"
              class="btn1 btn-light active"
            >
              Sign Up Now
            </button>
          </div>
          <div class="col-6">
            <div class="image-area">
              <img src="../assets/font-img.png" class="image-fluid" />
            </div>
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
.container {
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(254, 254, 254, 255);
  padding: 20px;
}
.banner-section {
  display: flex;
  width: 100vw;
}
.text-area {
  margin: 10px;
  padding: 20px;
  width: 100%;
}
.image-area {
  padding: 30px;
  margin: 20px;
  width: 100%;
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
  font-size: 60px;
  line-height: 70px;
  font-weight: 550;
  color: rgb(94, 94, 191);
}
img {
  width: 50%;
  height: 50vh;
}
img.image-area .mage-fluid {
  padding: 10px;
  margin: 10px;
}
.mage-fluid {
  margin-left: 100px;
  padding: 20px;
}
@media screen and (max-width: 600px) {
  .banner {
    width: 100vw;
    min-height: 80vh;
  }
  .banner-section {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .image-area {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .image-fluid {
    width: 300px;
    margin-right: 10em;
  }
}
</style>
