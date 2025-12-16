<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
      <div class="text-center">
        <img src="../../assets/images/Vector.png" alt="Logo" />
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details to use all the app features.</p>
      </div>
      <form class="mt-3" @submit.prevent="register">
        <div class="row">
          <div class="col-6 pe-2">
            <base-input type="text" identity="firstname" placeholder="Ex: Jack" label="Firstname" v-model="signupData.firstname"/>
          </div>
          <div class="col-6 ps-2">
            <base-input type="text" identity="lastname" placeholder="Ex: Daniel" label="Lastname" v-model="signupData.lastname"/>
          </div>
        </div>
        <base-input type="text" identity="username" placeholder="Your username" label="Username" v-model="signupData.username"/>
        <base-input type="email" identity="email" placeholder="Your email" label="Email" v-model="signupData.email"/>
        <base-input type="password" identity="password" placeholder="Your password" label="Password" v-model="signupData.password" @keyInput="passwordCheck"/>
        <p class="text-danger mt-1 fw-medium" style="font-size: 11px;" :style="{ display: passwordStatusDisplay }">The password field must be at least 8 characters</p>
        <base-input type="password" identity="confirmPassword" placeholder="Same with password" label="Confirmation Password" v-model="signupData.confirmationPassword" @keyInput="confirmationPasswordCheck"/>
        <p class="text-danger mt-1 fw-medium" style="font-size: 11px;" :style="{ display: confirmationPasswordDoesMatch }">
          The password confirmation does not match.
        </p>
        <p class="text-success mt-1 fw-medium" style="font-size: 11px;" :style="{ display: confirmationPasswordMatch }">
          The password confirmation does match.
        </p>
        <div class="my-4">
          <base-input type="file" identity="recipeImage" label="Profile Photo" isImage="true" @input="checkImage">
            <div>
              <div class="border p-1 mt-2 rounded-circle">
                <img :src="signupData.imageLink" class="rounded-circle" width="140" height="140" style="object-fit: cover;"/>
              </div>
              <div class="text-center" style="transform: translateY(-24px);">
                <i class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white"></i>

              </div>
            </div>
          </base-input>
        </div>
        <base-button type="submit" class="btn btn-primary w-100 my-3">Register</base-button>
      </form>
      
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have account?<span style="color: #4c4ddc"
            ><RouterLink to="/login" class="text-decoration-none"> Login</RouterLink></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import BaseInput from '../ui/BaseInput.vue';
  import BaseButton from '../ui/BaseButton.vue';
  import { reactive, ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';

  const store = useStore ()
  const router = useRouter ()

  
  const signupData = reactive({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmationPassword: "",
    isLogin: false,
    imageLink: "",
  });

  const passwordCheck = () => {
    if ( signupData.password.length < 8 ) {
      passwordStatusDisplay.value = "block";
    } else {
      passwordStatusDisplay.value = "none";
    }
  }

  const passwordStatusDisplay = ref("none");
  const confirmationPasswordDoesMatch = ref("none");
  const confirmationPasswordMatch = ref("none");

  const confirmationPasswordCheck = () => {
    if ( signupData.confirmationPassword === "" ) {
      confirmationPasswordDoesMatch.value = "none";
      confirmationPasswordMatch.value = "none";
      return
    }

    if ( signupData.password !== signupData.confirmationPassword) {
      confirmationPasswordDoesMatch.value = "block";
      confirmationPasswordMatch.value = "none";
      return
    }
    
    confirmationPasswordDoesMatch.value = "none";
    confirmationPasswordMatch.value = "block";
  }
  
  const checkImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.addEventListener ("load", () => {
      signupData.imageLink = reader.result;
    });
  }
  const register = async () => {
    if (
      signupData.password.length < 8 ||
      signupData.password !== signupData.confirmationPassword
    ) {
      signupData.confirmationPassword = "";
      signupData.password = "";
      confirmationPasswordDoesMatch.value = "none";
      confirmationPasswordMatch.value = "none";
    } else {
      await store.dispatch("auth/getRegisterData", signupData); // FIXED
      router.push("/");
    }
  };

</script>