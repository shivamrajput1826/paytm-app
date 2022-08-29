<template>
  <base-card>
    <div v-if="disableHead == false">
      <h1>Welcome to My Movie</h1>
      <div>
        <h2>New User?</h2>
        <router-link to="/signup">
          <base-button @click="disableHeader">Sign Up</base-button>
        </router-link>
      </div>

      <div>
        <h2>Already a User?</h2>
        <router-link to="/login">
          <base-button @click="enableLogin">Login</base-button></router-link
        >
      </div>
    </div>
  </base-card>
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
