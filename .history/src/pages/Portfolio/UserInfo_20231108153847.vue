<template>
  <div class="userinfo">
    <h1>User Info:</h1>
    <span>{{ user }}</span>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axiosIns from "@/libs/axiosConfig";

export default {
  setup() {
    const user = ref({});

    onMounted(() => {
      const user_email = localStorage.getItem("email");
      axiosIns
        .get("/user/email/" + user_email)
        .then((response) => {
          console.log("response", response);
          user.value = response.data;
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });

    return {
      user,
    };
  },
};
</script>


<style>
</style>