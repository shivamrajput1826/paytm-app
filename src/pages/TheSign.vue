<template>
  <base-card>
    <div>
      <h1>Sign Up</h1>
      <div>
        <form>
          <div>
            <label for="name">Name</label>
            <input id="name" type="text" v-model="name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" type="email" v-model="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="text" id="password" v-model="password" required />
          </div>
        </form>
      </div>
      <router-link to="/mainPage">
        <base-button @click="consoleEvent">Sign Up</base-button>
      </router-link>
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
