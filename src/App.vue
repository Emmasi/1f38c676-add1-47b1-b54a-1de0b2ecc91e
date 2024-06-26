<template>
  <MenuTop />
  <MenuComponent />
  <BreadCrumb />
  <Forlustanmalan />
  <Footer />
</template>

<script>
import MenuTop from "./components/MenuTop.vue";
import MenuComponent from "./components/MenuComponent.vue";
import BreadCrumb from "./components/BreadCrumb.vue";
import Forlustanmalan from "./components/Forlustanmalan.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    MenuTop,
    MenuComponent,
    BreadCrumb,
    Forlustanmalan,
    Footer,
  },
}
 
</script>

