<template>
  <div class="filter mt-1">
    <base-button
      class="font-bold text-2xl text-center p-0"
      @click="enableFilter"
      >Filter</base-button
    >
    <div class="filter-container border-2 m-3 rounded-lg p-2" v-if="enable">
      <span class="filter-option">
        <input type="checkbox" id="rankByAsc" @change="setFilter" />
        <label for="rankByAsc">RankByAsc</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="rankByDesc" @change="setFilter" />
        <label for="rankByDesc">RankByDesc</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="movie" @change="setFilter" />
        <label for="movie">Movie</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="tvShows" @change="setFilter" />
        <label for="tvShows">TV Shows</label>
      </span>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  emits: ["change-filters"],
  setup(props, context) {
    const enable = ref(false);
    function enableFilter() {
      if (enable.value) {
        enable.value = false;
      } else {
        enable.value = true;
      }
    }
    const filters = reactive({
      rankByAsc: false,
      rankByDesc: false,
      movie: false,
      tvShows: false,
    });
    function setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updateFilters = {
        ...filters,
        [inputId]: isActive,
      };

      updateFilters, inputId;
      Object.assign(filters, updateFilters);
      "filters", filters;
      context.emit("change-filters", updateFilters);
    }
    return { enable, enableFilter, filters, setFilter };
  },
};
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}
.filter {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.filter-option {
  margin-right: 1rem;
}
/* .filter-container {
  margin-left: 8rem;
} */

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
h3 {
  padding-left: 50%;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
