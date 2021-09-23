<template>
  <section>
    <img :src="imageUrl" :alt="imageTitle" />
  </section>
</template>

<script>
import FigmaService from "@/services/figmaService";
export default {
  name: "DefaultLayout",
  props: {
    imageTitle: {
      type: String,
      default: ""
    },
    fileKey: {
      type: String,
      required: true
    },
    ids: {
      type: String,
      default: null
    },
    query: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      imageUrl: ""
    };
  },
  created() {
    this.getImageByFigma();
  },
  methods: {
    getImageByFigma() {
      const queryParams = `ids=${this.ids}${this.query}`;
      FigmaService.getImage(this.fileKey, queryParams).then(response => {
        this.imageUrl = response.data.images[this.ids];
      });
    }
  }
};
</script>

<style></style>
