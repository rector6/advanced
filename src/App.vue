<template>
  <nav>
    <div class="navbar-brand">
      <img src="./assets/clinikli.png" width="30" height="30" />
      <span>Clinikli</span>
    </div>
    <router-link to="/">Learn More</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/testimonia">SignIn</router-link>
  </nav>
  <router-view />
</template>

<style scoped lang="scss">
nav {
  position: sticky;
  height: 70px;
  width: 100%;
  z-index: 10;
  text-align: right;
  text-decoration: none;
  padding: 10px;
}
nav a {
  text-decoration: none;
  color: rgb(21, 21, 145);
  font-family: sans-serif;
  font-weight: 700;
}
.navbar-brand {
  float: left;
}
.navbar-brand img {
}
.navbar-brand span {
  color: darkblue;
  font-size: 20px;
  font-family: cursive;
  font-weight: 700;
}
a {
  font-weight: 700;
  color: rgb(21, 21, 145);
  text-transform: capitalize;
  text-decoration: none;
  list-style: none;
  margin: 10px;
  // padding-right: 30px;
  &.router-link-exact-active {
    color: black;
  }
}
@media only screen and (min-width: 700px) {
  a {
    font-weight: 800;
    color: rgb(21, 21, 145);
    text-transform: capitalize;
    text-decoration: none;
    list-style: none;
    margin: 8px;
    // padding-right: 30px;
    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
