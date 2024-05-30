<template>
  <div>
    <button type="button" @click="logout()">Logout</button>
    <h1>Event Logs</h1>
    <ul>
      <li v-for="log in logs" :key="log.id">
        {{ log.message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Pusher from "pusher-js";
import { signOut } from "firebase/auth";

definePageMeta({
  middleware: ["auth"],
});

const auth = useFirebaseAuth();
const user = await getCurrentUser();
const pusher = ref(null);
const privateChannel = ref(null);
const logs = ref([]);

const logout = async () => {
  await signOut(auth)
    .then(() => navigateTo("/login"))
    .catch((reason) => {
      console.error("Failed sign out", reason);
    });
};

onMounted(() => {
  // create pusher instance
  pusher.value = new Pusher("c29b5096c331591f36f0", {
    cluster: "ap1",
  });

  // subscribe to private channel
  privateChannel.value = pusher.value.subscribe(`chat-${user?.uid}`);
  //   listen to events
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
