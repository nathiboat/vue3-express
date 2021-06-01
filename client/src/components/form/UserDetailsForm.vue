<template>
    <div class="mt-5 md:mt-0 md:col-span-2 flex-1">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
             <h2 class="text-lg mb-5"><b>User Details</b></h2>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" :class="labelClass">First Name</label>
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" :class="inputClass">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" :class="labelClass">Last Name</label>
                <input type="text" name="last_name" id="last_name" autocomplete="family-name" :class="inputClass">
              </div>

               <div class="col-span-6 sm:col-span-3">
                <label for="street_address" :class="labelClass">User Name</label>
                <input type="text" name="street_address" id="street_address" autocomplete="street-address" :class="inputClass">
              </div>


              <div class="col-span-6 sm:col-span-3">
                <label for="email_address" :class="labelClass">Default Email</label>
                <input type="text" name="email_address" id="email_address" autocomplete="email" :class="inputClass">
              </div>

             <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Title</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Mr.</option>
                  <option>Mrs.</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                <label for="state" :class="labelClass">Designation</label>
                <input type="text" name="state" id="state" :class="inputClass">
              </div>

            
            </div>
          </div>
        
        </div>
      </form>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import { mapMutations } from "vuex"

export default defineComponent ({
  data () {
    return { 
      inputClass: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
      labelClass: 'ml-4 block text-md font-medium text-gray-700'
    }
  },
  methods: {
    ...mapMutations({
      
    })
  }
})
</script>




