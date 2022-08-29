<template>
  <base-card>
    <div>
      <div class="action">
        <h1>Sign Up</h1>
      </div>

      <form>
        <div class="action">
          <label for="name"></label>
          <input
            class="form-action"
            id="name"
            type="text"
            v-model="name"
            required=""
            placeholder="UserName"
          />
        </div>
        <div class="action">
          <label for="email"></label>
          <input
            class="form-action"
            id="email"
            type="email"
            v-model="email"
            required
            placeholder="Email Address"
          />
        </div>
        <div class="action">
          <label for="password"></label>
          <input
            class="form-action"
            type="text"
            id="password"
            v-model="password"
            required
            placeholder="Password"
          />
        </div>
      </form>
      <div class="action">
        <router-link to="/mainPage">
          <base-button @click="consoleEvent">Sign Up</base-button>
        </router-link>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  setup() {
    const userName = "";
    const userEmail = "";
    const userPassword = "";
    function consoleEvent() {
      console.log(userName);
      console.log(userEmail);
      console.log(userPassword);
    }
    return { userName, userEmail, userPassword, consoleEvent };
  },
};
</script>
<style scoped>
div {
  margin: 10px;
}
.action {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-action {
  width: 40%;
}
</style>
