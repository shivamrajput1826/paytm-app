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
    userName;
    userEmail;
    userPassword;
  }
  function check() {
    "form validity", formIsValid.value;
    router.replace("/mainPage");
  }
  function validateForm() {
    formIsValid.value = true;
    if (userName.val === "") {
      userName.isValid = false;
      formIsValid.value = false;
    }
    if (userPassword.val === "" || userPassword.val.length < 6) {
      userPassword.isValid = false;
      formIsValid.value = false;
    }
    if (userEmail.val === "" || !userEmail.val.includes("@")) {
      userEmail.isValid = false;
      formIsValid.value = false;
    }
  }
  function submitForm() {
    validateForm();
    "form validity", formIsValid.value;
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
