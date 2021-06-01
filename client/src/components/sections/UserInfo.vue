<template>
    <section class="w-full p-3">   
        <div class="flex bg-white border shadow p-5">
          
            <div class="w-2/12">
                <Avatar/>
                
            </div>
            <div class="w-6/12 mt-6">
                <h3 class="text-3xl">Austin Fisher</h3>
                <div class="mt-5 w-3/6 flex flex-wrap">
                    <ProgressBar color="red" :percentage="25" class="mx-2 mb-2 h-5">
                    </ProgressBar>
                </div>
                <p class="text-md mt-3">Your Profile is 25% Complete</p>
            </div>
            <div class="flex flex-col-reverse  w-3/6">
                <div class="flex flex-row-reverse">
                    <base-button color="green">Save All</base-button>
                    <base-button color="red" class="mr-3">Reset Password</base-button>
                </div>
            </div>
        </div>  

        <div id="forms" class="p-51 mt-3">
            <div class="flex">
               
                <div class="mr-8  w-8/12">
                    <UserDetailsForm/>
                </div>
                <div class=" w-6/12">
                    <SettingForm/>
                </div>
               
            </div>  
        </div>   
    </section>
</template>

<script lang="ts">

import SettingForm from "../form/SettingForm.vue";
import UserDetailsForm from "../form/UserDetailsForm.vue";


export default {
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
    }
};
</script>