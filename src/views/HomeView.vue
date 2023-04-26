<template>
  <div class="home">
    <HelloWorld />
    <HeaDer />
    <CarD />
    <MidDle />
    <WorK />
    <SignIn />
    <AsK />
    <FooTer />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AsK from "@/components/AsK.vue";
import CarD from "@/components/CarD.vue";
import FooTer from "@/components/FooTer.vue";
import HeaDer from "@/components/HeaDer.vue";
import SignIn from "@/components/SignIn.vue";
import WorK from "@/components/WorK.vue";
import MidDle from "@/components/MidDle.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    AsK,
    CarD,
    FooTer,
    HeaDer,
    SignIn,
    WorK,
    MidDle,
  },
};
</script>
<style>
.home {
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>
