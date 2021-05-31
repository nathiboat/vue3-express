<template>
  <div>
      <UerProfile/> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UerProfile from "./components/pages/UserProfile.vue";

export default defineComponent({
  name: "App",
  components: {
    UerProfile
  },
});
</script>
