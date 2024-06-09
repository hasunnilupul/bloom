<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Pusher from "pusher-js";
import { signOut } from "firebase/auth";

definePageMeta({
  middleware: ["auth"],
});

const runtimeConfig = useRuntimeConfig();
const auth = useFirebaseAuth();
const user = await getCurrentUser();
const headers = await useHeaders();
const pusher = ref(null);
const privateChannel = ref(null);
const logs = ref([]);
const inputValue = ref("");

const logout = async () => {
  await signOut(auth)
    .then(() => navigateTo("/login"))
    .catch((reason) => {
      console.error("Failed sign out", reason);
    });
};

const sendMessage = async () => {
  try {
    const requestBody = {
      receiver: "john",
      message: inputValue.value,
    };

    const resp = await $fetch(
      "http://localhost:8000/api/private-chat/messages",
      {
        method: "POST",
        body: requestBody,
        headers,
      }
    );

    // append response to the logs
    logs.value.push(resp);
    inputValue.value = "";
  } catch (error) {
    console.error(error);
  }
};

const initPusher = () => {
  // create pusher instance
  pusher.value = new Pusher(runtimeConfig.app.PUSHER_APP_KEY, {
    cluster: runtimeConfig.app.PUSHER_APP_CLUSTER,
    authEndpoint: runtimeConfig.app.PUSHER_AUTH_ENDPOINT,
    auth: { headers },
    channelAuthorization: {
      endpoint: runtimeConfig.app.PUSHER_AUTH_CHANNEL_ENDPOINT,
      headers,
    },
  });
};

const subscribeToChannel = (channel) => {
  // subscribe to private channel
  privateChannel.value = pusher.value.subscribe(channel);
};

onMounted(() => {
  initPusher();
  subscribeToChannel(`private-chat-${user?.uid}`);
  // listen to events
  privateChannel.value.bind("newMessage", (data) => {
    console.log(data);
    logs.value.push(data);
  });
});

onUnmounted(() => {
  // unbind events
  privateChannel.value.unbind("newMessage");
  // disconnect from pusher
  pusher.value.disconnect();
});
</script>

<template>
  <div>
    <button type="button" @click="logout()">Logout</button>
    <br />
    <div>
      <input type="text" v-model="inputValue" required />
      <button type="button" @click="sendMessage()">Send</button>
    </div>
    <h1>Event Logs</h1>
    <ul>
      <li v-for="log in logs">
        {{ log.message }}
      </li>
    </ul>
  </div>
</template>
