<template>
  <nav id="navbar" class="navbar navbar-expand-lg">
    <div class="container">
      <a
        class="navbar-brand"
        href="#"
        style="font-size: 40px
        color:#ffff;
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
        aria-expanded="false"
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
        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-primary">SignUp</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
// #navbar {
//   position: fixed;
//   height: 70px;
//   width: 100%;
//   z-index: 999;
// }
// .navbar {
//   margin-bottom: 30em;
// }
// .navbar-brand {
//   font-weight: 600;
//   font-family: Gill;
//   font-size: 50px;
//   color: rgb(29, 29, 216);
// }
// .navbar-nav li {
//   padding: 0 10px;
//   text-align: center;
// }
// .navbar-nav li a {
//   color: blue !important;
//   font-weight: 300;
//   font-style: italic;
//   float: center;
//   text-align: center;
// }
// a {
//   font-weight: 300;
//   color: blue;
//   text-transform: capitalize;
//   margin: 10px;
//   text-align: center;
//   &.router-link-exact-active {
//     color: #42b983;
//   }
//   float: right;
// }
// ul li {
//   text-align: right;
//   float: right;
// }
// .navbar li {
//   padding: 0 !important;
// }
// .navbar-toggler {
//   outline: none;
// }
// .d-flex button {
//   background: darkblue;
//   font-family: cursive;
// }
// .btn:hover {
//   background-color: black;
// }
</style>
