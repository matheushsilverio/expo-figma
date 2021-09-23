<template>
  <DefaultLayout title="" :file-key="filekey" :ids="id" :query="queryParams"></DefaultLayout>
</template>

<script>
export default {
  nome: "Default",
  computed: {
    filekey() {
      return this.$route.params.fileKey;
    },
    id() {
      return this.$route.params.id;
    },
    queryParams() {
      const parameters = [
        "scale",
        "format",
        "svg_include_id",
        "svg_simplify_stroke",
        "use_absolute_bounds",
        "version"
      ];
      const queryFormatted = Object.entries(this.$route.query)
        .filter(([key, value]) => parameters.includes(key))
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      return queryFormatted !== "" ? `&${queryFormatted}` : "";
    }
  }
};
</script>

<style></style>
