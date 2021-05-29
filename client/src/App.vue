<template>
  <div>
      <NavBar/> 
      <section class="container w-full mx-auto pt-20">
        <BodyPanel/>
      </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/header/NavBar.vue";
import BodyPanel from "./components/body/BodyPanel.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar, 
    BodyPanel
  },
});
</script>
