<template>
  <base-card>
    <h1>name={{ name }}</h1>
    <h2>rank={{ rank }}</h2>

    <img :src="link" />
  </base-card>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["id", "name", "rank", "url"],

  setup(props) {
    const link = ref("");
    function getLink() {
      link.value = props.url.imageUrl;
      console.log("props", props);
    }
    getLink();

    return { link };
  },
};
</script>
<style scopes>
img {
  max-width: 40rem;
}
</style>
