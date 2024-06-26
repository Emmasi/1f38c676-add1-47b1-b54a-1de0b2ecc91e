<template>
  <section class="hero mt-4 position-relative">
    <img
      :src="'https://www1.minuc.se' + content.backgroundImageDesktop.value.url"
      alt="Hero Background"
      class="w-100 h-100"
    />
    <div class="text-white rounded position-absolute top-0">
      <div
        v-html="content.text.value"
        class="text-content w-75 mx-auto text-center"
      ></div>
    </div>
    <slot
      :contentId="content.id"
      :contentAreas="contentAreas"
      :childContentLinkIds="childContentLinkIds"
    ></slot>
  </section>
</template>

<script>
export default {
  props: {
    content: Object,
    contentAreas: Array,
    childContentLinkIds: Array,
  },
  mounted() {},
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}
.text-content {
  margin-top: 10em;
}
@media (max-width: 768px) {
  .hero{
    height:300px;
  }
  .text-content {
    margin-top: 1em;
  }
}
</style>
