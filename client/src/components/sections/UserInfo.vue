<template>
    <section class="w-full p-3">   
        <div class="flex flex-col sm:flex-col md:flex-row bg-white border shadow p-5">
          
            <div class="w-full sm:w-auto md:w-2/12">
                <Avatar/>
            </div>
            <div class="w-full sm:w-auto md:w-6/12 mt-6 sm:w-auto">
                <h3 class="text-center lg:text-left text-3xl">Austin Fisher</h3>
                <div class="mt-5 w-full md:w-3/6 flex justify-center">
                    <ProgressBar color="red" :percentage="25" class="mx-2 mb-2 h-5">
                    </ProgressBar>
                </div>
                <p class="text-center md:text-left text-md my-3">Your Profile is 25% Complete</p>
            </div>
            <div class="flex flex-row sm:flex-col md:flex-col-reverse w-full sm:w-auto md:w-3/6">
                <div class="flex flex-col sm:flex-auto md:flex-row-reverse w-full ">
                    <base-button color="green" class="mb-3" @click="handleSendUserData">Save All</base-button>
                    <base-button color="red" class="md:mr-3">Reset Password</base-button>
                </div>
            </div>
        </div>  

        <div id="forms" class="p-51 mt-3">
            <div class="flex flex-col sm:flex-col md:flex-row">
               
                <div class="lg:mr-8  w-full sm:w-auto lg:w-8/12 mb-3">
                    <UserDetailsForm/>
                </div>
                <div class="w-full sm:w-auto lg:w-6/12 ">
                    <SettingForm/>
                </div>
               
            </div>  
        </div>   
    </section>
</template>

<script lang="ts">
import { mapActions } from "vuex"
import { defineComponent } from "vue";
import SettingForm from "../form/SettingForm.vue";
import UserDetailsForm from "../form/UserDetailsForm.vue";


export default defineComponent({
    components:{
        SettingForm, 
        UserDetailsForm
    },
    inheritAttrs: false,
    props: {
        color: {
            type: String,
            default: "teal"
        },
        size: {
            type: String,
            default: "md" //sm, md, lg
        },
        outline: Boolean,
        icon: Boolean,
        round: Boolean
    },
    methods: {
        ...mapActions({
            requestSendUserData: 'requestSendUserData'    
        }),
        handleSendUserData () {
            this.requestSendUserData()
        }
    }
});
</script>