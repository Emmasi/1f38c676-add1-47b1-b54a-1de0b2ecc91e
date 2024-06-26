<template>
  <div class="shadow p-4 mb-5 rounded">
    <h2 v-html="content.heading.value"></h2>
    <div v-html="content.sectionText.value"></div>
    <div v-if="buttonContentAreas.length">
      <button
        v-for="(buttonContent, index) in buttonContentAreas"
        :key="index"
        class="btn btn-primary mt-5"
        @click="handleButtonClick(buttonContent.ctaUrl)"
      >
        {{ buttonContent.heading }}
      </button>
    </div>
    <slot
      v-if="content.id"
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
  data() {
    return {
      buttonContentAreas: [],
    };
  },
  mounted() {
    if (this.content.buttonContentArea?.expandedValue) {
      this.buttonContentAreas = this.content.buttonContentArea.expandedValue.map(
        (value) => ({
          heading: value.heading.value,
          ctaUrl: value.ctaUrl.value,
        })
      );
    }
  },
  methods: {
    handleButtonClick(ctaUrl) {
      alert(`https://www1.minuc.se${ctaUrl}`);
    },
  },
};
</script>
