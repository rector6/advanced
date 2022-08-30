<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-8">
        <div class="section-img">
          <img src="../assets/font-img.png" class="" width="500" height="500" />
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="reg-section">
          <h5 class="text-left">Set Up Your Account</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
}
.section-img {
  float: left;
}
.reg-section {
  float: right;
  background: red;
  height: 100vh;
  width: 100%;
  position: relative;
}
</style>
