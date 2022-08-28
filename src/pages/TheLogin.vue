<template>
  <div>
    <h1>Login</h1>
    <form>
      <label for="name">Name</label>
      <input id="name" type="text" required />
      <label for="password">Password</label>
      <input type="text" id="password" required />
    </form>
    <router-link to="/mainPage">
      <button>Log In</button>
    </router-link>
  </div>
</template>
<script setup></script>
