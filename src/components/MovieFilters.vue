<template>
  <base-card>
    <h2>Find Your Movies</h2>
    <h3>Filter By</h3>
    <span class="filter-option">
      <input type="checkbox" id="rankByAsc" @change="setFilter" name="rank" />
      <label for="rankByAsc">RankByAsc</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="rankByDesc" @change="setFilter" name="rank" />
      <label for="rankByDesc">RankByDesc</label>
    </span>
  </base-card>
</template>

<script>
import { reactive } from "vue";
export default {
  emits: ["change-filters"],
  setup(props, context) {
    const filters = reactive({
      rankByAsc: false,
      rankByDesc: false,
    });
    function setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updateFilters = {
        ...filters,
        [inputId]: isActive,
      };

      console.log(updateFilters, inputId);
      Object.assign(filters, updateFilters);
      console.log("filters", filters);
      context.emit("change-filters", updateFilters);
    }
    return { filters, setFilter };
  },
};
</script>
