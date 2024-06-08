<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <!-- Title -->
      <h2
        class="mt-5 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900"
      >
        Welcome back!
      </h2>
      <!-- Sub Title -->
      <p
        class="mt-2 text-center text-sm font-medium leading-3 tracking-wide text-gray-400"
      >
        Please enter your details to get started
      </p>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-3" action="#" method="POST">
        <!-- Email address -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-1">
            <UInput
              id="email_address"
              color="gray"
              variant="outline"
              name="email_address"
              type="email"
              autocomplete="email_address"
              required=""
              placeholder="Enter your email address"
              class="w-full rounded-md border-0 shadow-sm sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-1">
            <UInput
              id="password"
              color="gray"
              variant="outline"
              name="password"
              type="password"
              autocomplete="password"
              required=""
              placeholder="**************"
              class="w-full rounded-md border-0 shadow-sm sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <!-- Remember me -->
            <UCheckbox
              v-model="rememberMe"
              :ui="{ label: 'text-xs font-medium' }"
              name="notifications"
              label="Remember me"
            />
            <!-- Forgot password -->
            <div class="text-xs">
              <a
                href="#"
                class="font-semibold text-primary hover:text-primary-600"
                >Forgot password?</a
              >
            </div>
          </div>
        </div>

        <!-- Sign in button -->
        <div>
          <UButton
            block
            type="submit"
            color="primary"
            variant="solid"
            class="flex justify-center rounded-md text-sm font-semibold leading-6"
          >
            Sign in
          </UButton>
        </div>
      </form>

      <UDivider
        label="OR"
        class="my-3"
        :ui="{ label: 'text-gray dark:text-primary-400' }"
      />

      <div class="space-y-3">
        <!-- Google signin -->
        <UButton
          block
          type="submit"
          color="white"
          variant="solid"
          class="flex justify-center rounded-md text-sm font-semibold leading-6 text-gray-600"
          @click="handleGoogleSignIn()"
        >
          <template #leading>
            <!-- pass filled attribute as false to the component remove the theme color from filling the svg  -->
            <i-google class="text-lg me-1 !mb-0" filled="false" />
          </template>
          Sign In with Google
        </UButton>
        <!-- Go to Signup -->
        <p class="text-center text-sm font-normal text-gray-400">
          Already have an account?
          {{ " " }}
          <NuxtLink
            to="/register"
            class="font-medium text-primary hover:text-primary-400"
          >
            Sign up
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
// import IconGoogle from "~/assets/svg/google-logo.svg";

const auth = useFirebaseAuth();
const googleAuthProvider = new GoogleAuthProvider();
const error = ref(null);

const rememberMe = ref(false);

const handleGoogleSignIn = async () => {
  await signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      navigateTo("/");
    })
    .catch((reason) => {
      console.error("Failed signinPopup", reason);
      error.value = reason;
    });
};
</script>

<style>
.nuxt-icon--fill {
  fill: none;
}
</style>
