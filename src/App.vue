<template>
  <header :class="{ 'scrolled-nav sticky': scrolledNav }">
    <nav class="navbar sticky">
      <div class="logo">
        <h1>Clinikli</h1>
      </div>
      <div class="nav-link">
        <ul v-show="!mobile" class="navigation">
          <li><router-link to="/">Learn</router-link></li>
          <li>
            <router-link to="/about">About Us</router-link>
          </li>
          <li>
            <router-link to="{ name: 'SignIn' }">SignIn</router-link>
          </li>
          <li>
            <router-link to="{ name: 'Blog' }">Blog</router-link>
          </li>
          <li>
            <router-link to=""> <i class="fa fa-search"></i></router-link>
          </li>
        </ul>
        <div class="icon">
          <i
            @click="toggleMobileNav"
            v-show="mobile"
            class="fa fa-bars"
            :class="{ 'icon-active': mobileNav }"
          ></i>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <div class="logo">
              <h1>Clinikli</h1>
            </div>
            <li><router-link to="{ name: 'Home' }">Learn</router-link></li>
            <li>
              <router-link to="{ name: 'About Us' }">About Us</router-link>
            </li>
            <li>
              <router-link to="{ name: 'signin' }">SignIn</router-link>
            </li>
            <li>
              <router-link to="{ name: 'Blog' }">Blog</router-link>
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
  <router-view />
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 950) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Lato, HelveticaNeue, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}
/* header {
  z-index: 99;
  position: fixed;
  transition: 0.5s ease all;dr4
} */
/* nav {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  width: 100%;
  margin: 0 auto;
} */
li {
  list-style: none;
}
li a {
  text-decoration: none;
  list-style: none;
  font-size: 15px;
  font-family: "poppins";
  color: blue;
  margin: 50px;
}
ul li a {
  font-weight: 400;
  text-decoration: none;
  font-family: "Oxygen", sans-serif;
  line-height: 50px;
  color: rgb(245, 238, 238);
  display: flex;
  margin: 15px;
  margin-top: 10px;
  text-align: right;
}
li:hover {
  border-bottom: 2px solid blue;
  transition: 0.5s ease-out;
}
.icon {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  right: 24px;
  height: 100%;
}
.fa {
  font-size: 18px;
  font-weight: 500;
  margin: 10px;
  color: white;
}
.icon-active {
  transform: rotate(180dg);
}
.navbar {
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  background: rgb(21, 21, 145);
  scroll-behavior: none;
  color: #fff;
  top: 0;
  height: 70px;
  padding: 0 10px;
  z-index: 99;
  line-height: 20em;
  position: sticky;
  @media (min-width: 1140px) {
    min-width: 1140px;
  }
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
.nav-link ul {
  display: flex;
  color: white;
  font-size: 100px;
  margin-right: 100px;
}
.logo {
  margin: 20px;
}
h1 {
  font-size: 25px;
}
.logo img {
  font-size: 30px;
  color: black;
  width: 200px;
  height: 50px;
}
i {
  color: #4fcaff;
  font-size: 30px;
  margin: 10px;
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: 250px;
  background-color: rgb(21, 21, 145);
  color: white;
  top: 0;
  left: 0;

  li a {
    margin-left: 30px;
    text-align: right;
    color: white;
    .link {
      color: black;
      text-align: center;
    }
    h1 {
      margin: 20px;
    }
    .mobile-nav-enter-active,
    .mobile-nav-enter-active {
      transition: 1s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }
    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
  .scrolled-nav {
    background-color: black;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
      padding: 8px 0;
    }
    .logo {
      width: 50px;
    }
  }
}
</style>
