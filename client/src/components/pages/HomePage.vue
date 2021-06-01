<template>
  <div>
    <div>
      <NavBar/> 
      <section class="container w-full mx-auto pt-20">
        <div class="flex justify-center">
            <base-button 
                color="green" 
                class="mr-3"
                @click="handlePageChange('UerProfile')"
            >
            Add</base-button>
            <base-button color="blue" >Edit</base-button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import { defineComponent } from "vue"

export default defineComponent({
    name: 'HomePage',
    methods: {
        ...mapMutations({
            setCurrentPage: 'setCurrentPage'
        }),
        handlePageChange (page) {
            this.setCurrentPage(page)
        }
    },
    
})
</script>
