import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default function useSignup() {
  const router = useRouter();
  const userName = reactive({
    val: "",
    isValid: true,
  });
  const userEmail = reactive({
    val: "",
    isValid: true,
  });
  const userPassword = reactive({
    val: "",
    isValid: true,
  });
  const formIsValid = ref(true);
  function consoleEvent() {
    console.log(userName);
    console.log(userEmail);
    console.log(userPassword);
  }
  function check() {
    console.log("form validity", formIsValid.value);
    router.replace("/mainPage");
  }
  function validateForm() {
    formIsValid.value = true;
    if (userName.val === "") {
      userName.isValid = false;
      formIsValid.value = false;
    }
    if (userPassword.val === "") {
      userPassword.isValid = false;
      formIsValid.value = false;
    }
    if (userEmail.val === "") {
      userEmail.isValid = false;
      formIsValid.value = false;
    }
  }
  function submitForm() {
    validateForm();
    console.log("form validity", formIsValid.value);
    if (!formIsValid.value) {
      return;
    }
    router.replace("/mainPage");
  }
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
}
