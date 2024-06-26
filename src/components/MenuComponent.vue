<template>
  <div class="container-fluid site-header position-relative pl-0">
    <div class="container-xl d-none d-md-block">
      <div class="row py-4 cascade__menu-top">
        <MenuNavigation
          :activeSubmenu="activeSubmenu"
          @update:activeSubmenu="updateActiveSubmenu"
        />
      </div>
    </div>
    <MenuNavigationMobile />
    <div
      class="cascade__menu-expanded d-none d-sm-block w-100 pb-2"
      @mouseleave="closeSubmenu"
    >
      <div class="container">
        <div v-if="activeSubmenu === 'products'" class="row justify-content-center">
          <
          <div class="col-6 col-lg-3">
            <MenuSection :menuProducts="productsMenuFirst" />
          </div>
          <div class="col-6 col-lg-3">
            <MenuSection :menuProducts="productsMenuSecond" />
          </div>
          <div class="offset-1 col-lg-3">
            <MenuSection :menu="teaserImagesFirst" />
          </div>
        </div>
        <div v-if="activeSubmenu === 'articles'" class="row justify-content-center">
          <div class="col-6 col-lg-3">
            <MenuSection :menuArticle="articlesMenuFirst" />
          </div>
          <div class="col-6 col-lg-3">
            <MenuSection :menuArticle="articlesMenuSecond" />
          </div>
          <div class="offset-1 col-lg-3">
            <MenuSection :menu="teaserImagesSecond" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuSection from "./MenuDropdownSection.vue";
import MenuNavigation from "./MenuNavigation.vue";
import MenuNavigationMobile from "./MenuNavigationMobile.vue";
import axios from "axios";

export default {
  components: {
    MenuNavigation,
    MenuSection,
    MenuNavigationMobile,
  },
  data() {
    return {
      activeSubmenu: null,
      articlesMenuFirst: { title: "", menuItems: [] },
      articlesMenuSecond: { title: "", menuItems: [] },
      productsMenuFirst: { title: "", menuItems: [] },
      productsMenuSecond: { title: "", menuItems: [] },
      teaserImagesFirst: [],
      teaserImagesSecond: [],
    };
  },
  mounted() {
    this.fetchMenu();
  },
  methods: {
    async fetchMenu() {
      try {
        const response = await axios.get("/api/frontendapi/getmenu");
        const menuData = response.data.desktopMenu;
        this.productsMenuFirst = menuData.products.first;
        this.productsMenuSecond = menuData.products.second;
        this.teaserImagesFirst = menuData.teaserImages.first;
        this.teaserImagesSecond = menuData.teaserImages.second;
        this.articlesMenuFirst = menuData.category;
        this.articlesMenuSecond = menuData.article;
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    },
    updateActiveSubmenu(menu) {
      this.activeSubmenu = menu;
    },
    closeSubmenu() {
      this.activeSubmenu = null;
    },
  },
};
</script>

<style scoped>
.site-header {
  background: #333;
  top: 0;
  transition: top 0.25s ease-in-out;
  width: 100%;
  z-index: 210;
}
.cascade__menu-top,
.cascade__menu-expanded {
  background-color: #333;
}
.cascade__menu-expanded {
  z-index: 120;
}
</style>
