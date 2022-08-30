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
                style="height: 60px
                height: 20px;
                outline: none;
                border: 1px solid black;
                "
              />
            </div>
            <div class="col">
              <h5 class="" for="">Last Name</h5>
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                style="height: 60px
                height: 20px;
                outline: none;
                border: 1px solid black;
              "
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h5 class="" for="">Email</h5>
              <input
                type="email"
                class="form-control"
                placeholder="Email@gmail.com"
                style="height: 60px
                height: 20px;
                outline: none;
                border: 1px solid black;
              "
              />
            </div>
            <div class="col">
              <h5 class="" for="">Password</h5>
              <input
                type="password"
                class="form-control"
                placeholder="Pss********"
                style="height: 60px
                height: 20px;
                outline: none;
                border: 1px solid black;
                "
              />
            </div>
            <div class="col">
              <h5 class="" for="">Password</h5>
              <input
                type="password"
                class="form-control"
                placeholder="Pss********"
                style="height: 60px
                height: 20px;
                outline: none;
                border: 1px solid black;
                "
              />
            </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
              style="
                outline: none;
                margin: 10px
                padding: 10px
              "
            />
            <label class="form-check-label" for="flexCheckIndeterminate">
              i agree and accept the <a href="">Teams and Condition</a>and
              <a href="">Private and policy</a>
            </label>
          </div>
          <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
        <hr />
        <p class="text-center">Already have an account?<a href="">Login</a></p>
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
  width: 70%;
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
// input {
//   height: 20px;
//   outline: none;
//   // padding-right: 30px;
//   border: 1px solid black;
// }
::placeholder {
  color: blue;
  font-size: 15px;
  font-weight: 800;
  font-family: cursive;
}
// .label {
//   display: block;
//   padding-left: 15px;
//   text-indent: -15px;
//   margin-bottom: 10px;
// }
.form-check {
  margin: 10px;
}
.form-check-input {
  display: inline;
  font-size: 10px;
}
.form-check .form-check-input {
  font-size: 15px;
}
.form-check a {
  text-decoration: none;
  font-size: 12px;
}
.form-check .form-check-label {
  display: inline;
  font-size: 14px;
}
button {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: cursive;
}
.btn {
  width: 100%;
  margin: 20px;
  // margin-left: 50px;
}
.btn:hover {
  background-color: black;
}
input:hover {
  background-color: pink;
}
a {
  text-decoration: none;
}
// .checkbox {
//   margin: 15px;
//   margin-top: 50px;
// }
// label {
//   padding: 20px;
// }
@media (max-length: 600px) {
  .form-control2 {
    margin: 35px;
    padding: 18px;
    border-radius: 5px;
    width: 100px;
    margin-right: 40px;
  }
  .container {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    width: 100%;
  }
}
</style>
