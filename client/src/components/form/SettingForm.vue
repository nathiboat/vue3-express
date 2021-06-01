<template>
    <div class="mt-5 md:mt-0 md:col-span-2 flex-1">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <h2 class="text-lg"><b>Settings</b></h2>
            <div class="col-span-6 sm:col-span-3">
                <label for="default-interface" :class="labelClass">Default Interface</label> 
                <select 
                  id="default-interface" 
                  name="default-interface" 
                  autocomplete="default-interface" 
                  :class="selecteInputClass"
                  v-model="selectedDefaultInterface"
                >
                  <option v-for="item in defaultInterface" :key="item">{{item}}</option>
                </select>
            </div>
           <div class="col-span-6 sm:col-span-3">
                <label for="languages" :class="labelClass">Prefered Language</label> 
                <select 
                  id="languages" 
                  name="languages" 
                  autocomplete="languages" 
                  :class="selecteInputClass"
                  v-model="selectedLanguage"
                >
                   <option v-for="lang in languages" :key="lang">{{lang}}</option>
                </select>
            </div>
    
            <fieldset>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input id="push_everything" name="push_notifications" type="checkbox" :class="checkboxClass">
                  <label for="push_everything" :class="labelClass">
                    Account locked
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="push_email" name="push_notifications" type="checkbox" :class="checkboxClass">
                  <label for="push_email" :class="labelClass">
                    User must change password at next login
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="push_nothing" name="push_notifications" type="checkbox" :class="checkboxClass">
                  <label for="push_nothing" :class="labelClass">
                    Passwords never expire
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="push_nothing" name="push_notifications" type="checkbox" :class="checkboxClass">
                  <label for="push_nothing" :class="labelClass">
                    Super user
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  data () {
    return {
      selectedDefaultInterface: "ETH",
      selectedLanguage: "English",
      selecteInputClass: "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
      checkboxClass: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300",
      labelClass: "ml-4 block text-md font-medium text-gray-700",
    }
  },
  computed:{
    ...mapGetters({
      languages: 'languages',
      defaultInterface: 'defaultInterface'
    }),
  },
  methods: {
    ...mapActions({
      requestLanguages : 'requestLanguages'
    }),
  },
  mounted () {
    // @ts-ignore
    this.requestLanguages()
  }
}
</script>




