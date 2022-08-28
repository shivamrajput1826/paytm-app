<template>
  <div v-if="disableHead == false">
    <h1>Welcome to My Movie</h1>
    <div>
      <h2>New User?</h2>
      <router-link to="/signup">
        <button @click="disableHeader">Sign Up</button>
      </router-link>
    </div>

    <div>
      <p>Already a User?</p>
      <router-link to="/login">
        <button @click="enableLogin">Login</button></router-link
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const disableHead = ref(false);
    function disableHeader() {
      disableHead.value = true;
    }

    return { disableHead, disableHeader };
  },
};
</script>
