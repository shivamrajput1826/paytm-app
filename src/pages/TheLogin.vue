<template>
  <div>
    <base-card>
      <div class="action">
        <h1>Login to your Account</h1>
      </div>
      <form>
        <div class="action">
          <label for="name"></label>
          <input
            class="form-action"
            id="name"
            type="text"
            required=""
            placeholder="Username"
          />
        </div>
        <div class="action">
          <label for="password"></label>
          <input
            type="text"
            class="form-action"
            id="password"
            required=""
            placeholder="Password"
          />
        </div>
      </form>
      <div class="action">
        <router-link to="/mainPage">
          <base-button>Log In</base-button>
        </router-link>
      </div>
    </base-card>
  </div>
</template>
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
