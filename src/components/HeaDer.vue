<template>
  <div class="full" id="homepage bg-danger">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-8 pt-5 first-section">
          <h2>
            You a click away<br />
            from getting Health services!
          </h2>
          <p class="pt-3">
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
        <div class="col-6 col-md-4">
          <div class="second-section">
            <img
              src="../assets/font-img.png"
              class="img-fluid w-1/2"
              style="border:none margin-left: 30px width: 100% background-color: rgba(60, 109 ,167,255)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#homepage {
  background-color: rgba(254, 254, 254, 255);
  width: 100vw;
  height: 80vh;
}
.first-section {
  margin-top: 3em;
  text-align: left;
}
.second-section {
  margin-top: 4em;
  width: 100%;
}
strong {
  font-size: 45px;
  color: rgba(60, 109, 167, 270);
  font-family: sans-serif;
  font-weight: 500;
  text-align: left;
}
.first-text {
  width: 50%;
}
.img-fluid {
  width: 70em;
  height: auto;
}
h2 {
  font-family: sans-serif;
  font-size: 60px;
  padding: 20px;
  font-weight: 700;
  text-align: left;
  color: rgba(60, 109, 167, 255);
}
.front-img {
  width: 40%;
  padding-left: 10em;
  margin-bottom: 20em;
}
</style>
