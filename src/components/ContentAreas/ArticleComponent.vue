<template>
  <div class="w-75 w-md-100 mx-auto">
    <div v-html="content.description.value" class="my-5"></div>
    <slot
      :contentId="content.id"
      :contentAreas="contentAreas"
      :childContentLinkIds="childContentLinkIds"
    ></slot>
  </div>
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
:deep(.toggle p:nth-child(3)) {
  margin-top: 5em;
}
:deep(.toggle ul) {
  list-style-type: none;
  margin-bottom: 4em;
}
:deep(.toggle ul li) {
  margin-bottom: 1em;
}
:deep(.toggle ul li:before) {
  content: "✓ ";
}
</style>
