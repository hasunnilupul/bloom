<script setup>
import { object, string } from "yup";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

definePageMeta({
    layout: "auth"
});

const auth = useFirebaseAuth();
const googleAuthProvider = new GoogleAuthProvider();

const validationSchema = object({
  email: string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Password is required"),
});

const formState = reactive({
  email: "",
  password: "",
});
const error = ref(null);

const handleOnSubmit = () => {};

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

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- Logo -->
      <i-logo class="mx-auto text-5xl !mb-0" filled="false" />
      <!-- Title -->
      <h2
        class="mt-5 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900"
      >
        Welcome back!
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <UForm class="space-y-3" :state="formState" :schema="validationSchema" @submit="handleOnSubmit">
        <!-- Email address -->
        <UFormGroup
          id="email_address"
          name="email"
          label="Email address"
          required
          v-slot="{ error }"
        >
          <UInput
            v-model="formState.email"
            color="gray"
            variant="outline"
            type="email"
            autocomplete="email_address"
            placeholder="johndoe@example.com"
            class="w-full rounded-md border-0 shadow-sm sm:text-sm sm:leading-6"
            :trailing-icon="
              error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined
            "
          />
        </UFormGroup>

        <!-- Password -->
        <UFormGroup
          id="password"
          name="password"
          label="Password"
          required
          v-slot="{ error }"
        >
          <UInput
            v-model="formState.password"
            color="gray"
            variant="outline"
            type="password"
            autocomplete="password"
            class="w-full rounded-md border-0 shadow-sm sm:text-sm sm:leading-6"
            :trailing-icon="
              error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined
            "
          />
        </UFormGroup>

        <div>
          <div class="flex items-center justify-between">
            <!-- Remember me -->
            <UFormGroup id="remember_me" name="remember_me">
              <UCheckbox
                v-model="formState.rememberMe"
                :ui="{ label: 'text-xs font-medium' }"
                label="Remember me"
              />
            </UFormGroup>
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
      </UForm>

      <UDivider
        label="or"
        class="my-3"
        :ui="{ label: 'text-gray dark:text-primary-400' }"
      />

      <div class="space-y-3">
        <!-- Google signin -->
        <UButton
          block
          type="button"
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
          Not registered yet?
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
