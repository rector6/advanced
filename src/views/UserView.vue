<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-8">
        <div class="section-img">
          <img src="../assets/user.png" class="" width="500" height="500" />
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="reg-section">
          <h5 class="setup text-left">Set Up Your Account</h5>

          <h5 class="pt-5 Display-3" style="color: blue">
            Choose a Service type
          </h5>
          <p5 class="pb-5 mb-5">
            Select an account type so we can help you setup an account</p5
          >
          <select
            class="form-select form-select-lg mb-3"
            aria-label="from-select-lg example"
          >
            <option selected class=""><img src="" />Choose account</option>
            <option value="Clinicain"><a href="">Clinicain</a></option>
            <option value="Patients"><a href="">Patients</a></option>
            <option value="Lab"><a href="">Labolatory</a></option>
            <option value="Hospital"><a href="">Hospital</a></option>
            <option value="Phamarcy"><a href="">Pharmacy</a></option>
            <option value="Ambulance"><a href="">Ambulance</a></option>
          </select>
        </div>
        <hr />
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
  height: 100vh;
  width: 80vh;
  position: relative;
}
.reg-section .setup {
  margin-top: 6em;
  font-size: 25px;
  font-family: cursive;
  color: blue;
  font-weight: 600;
}
p5 {
  font-size: 13px;
  color: black;
  padding-left: 10em;
}
select {
  margin: 25px;
  float: left;
  padding: 20px;
  width: 50%;
  font-size: 16px;
  color: blue;
  font-family: cursive;
  box-shadow: 0 20px 30px rgb(0, 0, 0, 0.15);
  border: 1px solid blue;
}
hr {
  color: blue;
}
</style>
