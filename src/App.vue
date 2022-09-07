<template>
  <nav id="navbar" class="navbar navbar-expand-lg">
    <div class="container">
      <a
        class="navbar-brand"
        href="#"
        style="font-size: 40px
        color: rgba(60, 109, 167, 255);;
        margin-top: 20px"
      >
        <img
          src="@/assets/clinikli.png"
          width="150px"
          height="150px"
        />Clinkli</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="False"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link class="nav-link" to="/">Learn More</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/footerbox">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/footerbox">Signin</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-primary">SignUp</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style scoped lang="scss">
#navbar {
  height: 70px;
  width: 100%;
  z-index: 999;
}
.navbar {
  margin-bottom: 30px;
}
.navbar-brand {
  font-weight: 700;
  font-size: 50px;
  color: rgba(60, 109, 167, 255);
}
.navbar-nav li {
  padding: 0 10px;
}
.navbar-nav li a {
  color: rgba(60, 109, 167, 255);
  font-weight: 500;
}
a {
  font-weight: 300;
  color: blue;
  text-transform: capitalize;
  margin: 10px;
  text-align: center;
  &.router-link-exact-active {
    color: #42b983;
  }
}
ul li {
  text-align: right;
  float: right;
}
.navbar li {
  padding: 0 !important;
}

button {
  background: rgba(60, 109, 167, 255);
  height: 50px;
  margin: 20px;
}
.Btn {
  background: rgba(60, 109, 167, 255);
}
.btn:hover {
  background-color: black;
}
</style>
