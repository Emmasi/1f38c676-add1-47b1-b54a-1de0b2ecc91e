<template>
  <div v-if="menuProducts">
    <h3 class="text-white">{{ menuProducts.title }}</h3>
    <ul>
      <li v-for="item in menuProducts.menuItems" :key="item.name" class="d-flex">
        <!-- todo add icons -->
        <!-- <i v-if="menu.menuItems && menu.menuItems.length" :class="['fa-fw', item.fontAwesomeClass]"></i> -->
        <span>
          <a :href="item.url" class="text-decoration-none">
            <h4 class="text-white">{{ item.title }}</h4>
          </a>
          <p class="color-silver mt-1 pl-4 ml-2">{{ item.teaserText }}</p>
        </span>
      </li>
    </ul>
  </div>
  <div v-if="menuArticle">
    <h3 class="text-white">{{ menuArticle.title }}</h3>
    <ul>
      <li v-for="item in menuArticle.menuItems" :key="item.name" class="d-flex">
        <!-- todo add icons -->
        <!-- <i v-if="menu.menuItems && menu.menuItems.length" :class="['fa-fw', item.fontAwesomeClass]"></i> -->
        <span>
          <a :href="item.url" class="text-decoration-none">
            <h5 class="text-white mt-1">{{ item.title }}</h5>
          </a>
        </span>
      </li>
    </ul>
  </div>
  <div v-if="menu">
    <div
      v-for="item in menu"
      :key="item.index"
      class="menu-image rounded position-relative"
    >
      <img
        :src="'https://www1.minuc.se' + item.BackgroundImage"
        alt="Blue background image"
        class="w-100 h-100"
      />
      <div class="text-white rounded position-absolute text-center top-0">
        <h3 class="text-white pt-5">{{ item.Heading }}</h3>
        <p v-html="item.SectionText"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: false,
    },
    menuProducts: {
      type: Object,
      required: false,
    },
    menuArticle: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.menu-image {
  background-size: cover;
  background-position: center;
}
</style>
