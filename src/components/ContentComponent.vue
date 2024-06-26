<template>
  <div v-if="content">
    <component
      :is="getComponentByType(content.contentType)"
      :content="content"
      :child-content-link-ids="childContentLinkIds"
      :content-areas="contentAreas"
    >
      <template v-slot:default="{ contentId, contentAreas, childContentLinkIds }">
        <ContentComponent
          v-for="id in childContentLinkIds"
          :key="id"
          :contentId="id"
          :contentAreas="contentAreas"
        />
      </template>
    </component>
  </div>
</template>

<script>
import { ContentLoader } from "@episerver/content-delivery";
import FullImageCardComponent from "./ContentAreas/FullImageCardComponent.vue";
import ArticleComponent from "./ContentAreas/ArticleComponent.vue";
import HeroComponent from "./ContentAreas/HeroComponent.vue";
import ArticleContainerComponent from "./ContentAreas/ArticleContainerComponent.vue";

export default {
  props: {
    contentId: Number,
    contentAreas: Array,
  },
  data() {
    return {
      content: null,
      childContentLinkIds: [],
    };
  },
  components: {
    FullImageCardComponent,
    ArticleComponent,
    HeroComponent,
    ArticleContainerComponent,
  },
  mounted() {
    this.fetchContentById(this.contentId);
  },
  methods: {
    async fetchContentById(id) {
      try {
        const response = await new ContentLoader({
          apiUrl: "/api",
        }).getContent(id, { expand: ["*"] });
        this.content = response;
        this.extractChildIds(response);
      } catch (error) {
        console.error("Error fetching content by ID:", error);
      }
    },
    extractChildIds(content) {
      this.childContentLinkIds = this.contentAreas.reduce((acc, area) => {
        if (content[area]?.expandedValue) {
          acc.push(...content[area].expandedValue.map((x) => x.contentLink.id));
        }
        return acc;
      }, []);
    },
    getComponentByType(type) {
      if (!type) return null;

      //TODO: support multiple contentTypes
      switch (type[1]) {
        case "FullImageCardBlock":
          return "FullImageCardComponent";
        case "ButtonBlock":
          return "ButtonComponent";
        case "ArticleContentBlock":
          return "ArticleComponent";
        case "HeroBlock":
          return "HeroComponent";
        case "ArticleContentContainerBlock":
          return "ArticleContainerComponent";
        default:
          throw new Error(`Content Type not supported${type[1]}`, type);
      }
    },
  },
};
</script>
