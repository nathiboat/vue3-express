<template>
  <div>
      <component :is="currentPage"> </component>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex"
import { defineComponent } from "vue"
import UerProfile from "./components/pages/UserProfile.vue"
import HomePage from "./components/pages/HomePage.vue"

export default defineComponent({
  name: "App",
  components: {
    UerProfile,
    HomePage
  },
  data() {
    return { count: 1 }
  },
  computed: {
    ...mapGetters({
      currentPage: 'currentPage',
    }),
  }


});
</script>
