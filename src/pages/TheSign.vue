<template>
  <div class="signupBody">
    <div class="signupCard">
      <div>
        <div class="action">
          <h1 class="font-bold text-2xl">Sign Up</h1>
        </div>

        <form>
          <div class="action" :class="{ invalid: !userName.isValid }">
            <label for="name"></label>
            <input
              class="form-action"
              id="name"
              type="text"
              v-model.trim="userName.val"
              required=""
              placeholder="UserName"
            />

            <p v-if="!userName.isValid">Username must not be empty.</p>
          </div>
          <div class="action" :class="{ invalid: !userEmail.isValid }">
            <label for="email"></label>
            <input
              class="form-action"
              id="email"
              type="email"
              v-model.trim="userEmail.val"
              required
              placeholder="Email Address"
            />
            <p v-if="!userEmail.isValid">Email Address must be valid.</p>
          </div>

          <div class="action" :class="{ invalid: !userPassword.isValid }">
            <label for="password"></label>
            <input
              class="form-action"
              type="password"
              id="password"
              v-model.trim="userPassword.val"
              required
              placeholder="Password"
            />
            <p v-if="!userPassword.isValid">Password must be valid.</p>
          </div>
          <div class="action">
            <button type="button" @click="submitForm">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useSignup from "../../src/composable/useSignup";
export default {
  setup() {
    const {
      userName,
      userEmail,
      userPassword,
      consoleEvent,
      formIsValid,
      validateForm,
      submitForm,
      check,
    } = useSignup();

    return {
      userName,
      userEmail,
      userPassword,
      consoleEvent,
      formIsValid,
      validateForm,
      submitForm,
      check,
    };
  },
};
</script>
<style scoped>
* {
  border: border-box;
}
div {
  margin: 10px;
}
.signupBody {
  display: flex;
  align-items: center;
  justify-content: center;
}
.action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form-action {
  width: 40%;
}
.signupCard {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
}
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}
</style>
