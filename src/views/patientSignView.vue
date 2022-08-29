<template>
  <div class="container">
    <div class="row">
      <div class="sign-section">
        <h1 class="text-center">Sign Up</h1>
        <p class="text-center">
          Create account as a patient<br />
          Get health Service as a finger Snap.
        </p>
        <form action="" method="Get">
          <div class="row">
            <div class="col">
              <h5 class="" for="">First Name</h5>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col">
              <h5 class="" for="">Last Name</h5>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h5 class="" for="">Email</h5>
              <input
                type="email"
                class="form-control"
                placeholder="Email@gmail.com"
              />
            </div>
            <div class="col">
              <h5 class="" for="">Password</h5>
              <input
                type="password"
                class="form-control"
                placeholder="Pss********"
              />
            </div>
            <h5 class="" for="">Phone Number</h5>
            <input
              type="text"
              class="form-control2"
              placeholder="Phone number"
              style="width: 50%"
            />
          </div>
          <div>
            <label>
              <input type="checkbox" class="checkbox" id="checkid" />
              Teams and Conditions
            </label>
          </div>
          <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
  align-items: center;
  display: block;
  min-height: 100vh;
}
p {
  color: blue;
  opacity: 15px;
}
h1 {
  color: blue;
  font-size: 2em;
}
h5 {
  font-size: 15px;
  margin: 10px;
  color: blue;
}
.login-section {
  margin: 20px;
}
.form-control {
  margin: 10px;
}
.form-control2 {
  margin: 20px;
  padding: 15px;
  border-radius: 5px;
  width: 100px;
  margin-left: 2%;
}
input {
  height: 60px;
  outline: none;
  // padding-right: 30px;
  border: 1px solid black;
}
::placeholder {
  color: blue;
  font-size: 15px;
  font-weight: 800;
  font-family: cursive;
}
.label {
  display: block;
  padding-left: 15px;
  text-indent: -15px;
  margin-bottom: 10px;
}
button {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: cursive;
}
.btn {
  width: 50%;
  margin-top: 20px;
  margin-left: 30%;
}
.btn:hover {
  background-color: black;
}
input:hover {
  background-color: pink;
}
.checkbox label {
  margin: 15px;
  margin-top: 20px;
}
@media (max-length: 700px) {
  .form-control2 {
    margin: 35px;
    padding: 18px;
    border-radius: 5px;
    width: 100px;
    margin-left: 40px;
    
  }
}
</style>
