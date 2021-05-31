<template>
  <div>
    <div>
      <NavBar/> 
      <section class="container w-full mx-auto pt-20">
        <BodyPanel/>
       
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../sections/NavBar.vue";
import BodyPanel from "../sections/UserInfo.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar, 
    BodyPanel,
  },
});
</script>
