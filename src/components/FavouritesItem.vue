<template>
  <div class="item-action">
    <img :src="link" class="h-[80%] w-[80%] object-cover" />
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
      "props", props;
    }
    getLink();
    return { link };
  },
};
</script>
<style scopes>
.item-action {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 5px;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
