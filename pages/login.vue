<template>
  <div v-if="error">{{ error }}</div>
  <button @click="handleGoogleSignin()">SignIn with Google</button>
</template>

<script setup>
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const auth = useFirebaseAuth();
const googleAuthProvider = new GoogleAuthProvider();
const error = ref(null);

const handleGoogleSignin = async () => {
  await signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      navigateTo("/");
    })
    .catch((reason) => {
      console.error("Failed signinPopup", reason);
      error.value = reason;
    });
};
</script>
