<template>
  <div class="article-container">
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
.article-container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
:deep(div:nth-child(1)) {
  grid-column: span 2;
}
:deep( div:nth-child(2)) {
  grid-column: 1;
}
:deep( div:nth-child(3)) {
  grid-column: 2;
  min-height: 7em;
}

@media (max-width: 767px) {
  .article-container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  :deep( div:nth-child(1)),
  :deep( div:nth-child(2)),
  :deep( div:nth-child(3)) {
    grid-column: span 1;
  }
}
</style>
