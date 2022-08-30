<template>
  <div class="header">
    <div class="card">
      <div v-if="disableHead == false" class="head-action">
        <h1>Welcome to MovieApp</h1>

        <h2>New User?</h2>
        <router-link to="/signup">
          <base-button @click="disableHeader">Sign Up</base-button>
        </router-link>

        <h2>Already a User?</h2>
        <router-link to="/login">
          <base-button @click="enableLogin">Login</base-button>
        </router-link>
      </div>
    </div>
    <div class="card">
      <img
        src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png"
        class="headerimage"
      />
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
<style scoped>
body {
  background-color: black;
}
h1 {
  margin-bottom: 10px;
}
h2 {
  margin-bottom: 5px;
}
.header {
  display: flex;
  margin-left: 15%;

  margin-top: 15%;
}
.head-action {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 40%;
  margin-top: 50px;
  margin-left: 0px;

  margin-right: 0px;
}
.headerimage {
  width: 100%;
  border-radius: 2%;
  object-fit: cover;
  box-shadow: 0 0 0;
  height: 100%;
}
</style>
