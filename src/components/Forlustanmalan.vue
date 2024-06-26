<template>
  <div class="py-6">
    <div class="container">
      <div class="row">
        <ContentComponent
          v-if="childContentLinkIds.length > 0"
          v-for="id in childContentLinkIds"
          :contentId="id"
          :contentAreas="[
            'mainContentArea',
            'firstContentArea',
            'secondContentArea',
            'buttonContentArea',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ContentComponent from "./ContentComponent.vue";

export default {
  components: {
    ContentComponent,
  },
  data() {
    return {
      content: null,
      childContentLinkIds: [],
    };
  },
  mounted() {
    this.fetchContent();
  },
  methods: {
    async fetchContent() {
      try {
        const response = await axios.get("/api/forlustanmalan?expand=*", {
          headers: {
            Accept: "application/json",
          },
        });
        const expandedValues = response.data.mainContentArea.expandedValue;
        this.childContentLinkIds = expandedValues.map((x) => x.contentLink.id);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    },
  },
};
</script>
