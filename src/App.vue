<template>
  <nav>
    <div class="navbar-brand"></div>
    <router-link to="/">Learn More</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/testimonia">SignIn</router-link>
  </nav>
  <router-view />
</template>

<style scoped lang="scss">
nav {
  position: absolute;
  height: 70px;
  width: 100%;
  z-index: 10;
  text-align: right;
  text-decoration: none;
  padding: 10px;
}
nav a {
  text-decoration: none;
  color: rgba(60, 109, 167, 255);
  font-family: cursive;
  font-weight: 400;
}
.navbar-brand {
  font-weight: 900;
  font-family: Gill;
  font-size: 50px;
  color: darkblue;
}
a {
  font-weight: 600;
  color: #071a41;
  text-transform: capitalize;
  text-decoration: none;
  list-style: none;
  margin: 10px;
  padding-right: 30px;
  &.router-link-exact-active {
    color: #42b9836e;
  }
}
</style>
