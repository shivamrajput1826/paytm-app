<template>
  <div class="item-action">
    <img :src="link" />
  </div>
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
  height: 80%;
  width: 80%;
  object-fit: cover;
}
.item-action {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
