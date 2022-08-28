<template>
  <div>
    <h1>Sign Up</h1>

    <form>
      <label for="name">Name</label>
      <input id="name" type="text" v-model="name" required />
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" required />
      <label for="password">Password</label>
      <input type="text" id="password" v-model="password" required />
    </form>
    <router-link to="/mainPage">
      <button @click="consoleEvent">Sign Up</button>
    </router-link>
  </div>
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
