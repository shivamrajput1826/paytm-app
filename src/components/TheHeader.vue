<template>
  <div class="header">
    <div class="card">
      <div v-if="disableHead == false" class="head-action">
        <h1 class="font-bold text-2xl mb-3 mt-8 border-2 p-1 rounded-lg">
          Welcome to MovieApp
        </h1>
        <table class="flex flex-col justify-center items-center">
          <tr class="flex flex-row mt-4 justify-center">
            <td>
              <h2
                class="mt-1 font-medium border-2 p-1 rounded-lg mr-6 ml-4 py-2"
              >
                New User?
              </h2>
            </td>
            <td>
              <router-link to="/signup">
                <base-button class="p-0 mt-1" @click="disableHeader"
                  >Sign Up</base-button
                >
              </router-link>
            </td>
          </tr>
          <tr class="flex flex-row mt-4">
            <td>
              <h2 class="mt-2 font-medium border-2 p-1 rounded-lg mr-2 py-2">
                Already a User?
              </h2>
            </td>
            <td>
              <router-link to="/login">
                <base-button class="mt-1" @click="enableLogin"
                  >Login</base-button
                >
              </router-link>
            </td>
          </tr>
        </table>
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
/* h1 {
  margin-bottom: 10px;
} */
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
