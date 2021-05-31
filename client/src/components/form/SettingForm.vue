<template>
    <div class="mt-5 md:mt-0 md:col-span-2 flex-1">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <h2 class="text-lg"><b>Settings</b></h2>
            <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Default Interface</label> 
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>EHS</option>
                  <option>Compliance</option>
                </select>
            </div>
           <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Prefered Language</label> 
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>EHS</option>
                </select>
            </div>
    
            <fieldset>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input id="push_everything" name="push_notifications" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">
                    Account locked
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="push_email" name="push_notifications" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700">
                    User must change password at next login
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="push_nothing" name="push_notifications" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
                    Passwords never expire
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="push_nothing" name="push_notifications" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
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



