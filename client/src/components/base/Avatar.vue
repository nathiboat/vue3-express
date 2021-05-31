<template>
    <div class="flex flex-col justify-center items-center ">
        <div
            class="w-28 h-28  uppercase font-medium shadow"
            :class="avatarClasses"
        >
            <img class="w-full h-full overflow-hidden shadow" src="http://i.pravatar.cc/300" alt="Avatar of User"> 
          
        </div>
         <button class="uppercase p-3 flex items-center bg-gray-500 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12" style="margin-top: -12px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="fill-current text-white" d="M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "teal"
    },
    size: {
      type: String,
      default: "md" //sm, md, lg
    },
    round: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    sizeClasses() {
      const sizeMappings = {
        sm: `h-12 w-12`,
        md: `h-16 w-16 text-xl`,
        lg: `text-lg h-24 w-24 text-2xl`
      };
      return sizeMappings[this.size] || sizeMappings.md;
    },
    roundClasses() {
      return this.round ? "rounded-full" : "rounded";
    },
    avatarClasses() {
      return `bg-${this.color}-500 ${this.roundClasses} ${this.sizeClasses}`;
    },
    avatarText() {
      if (!this.name || typeof this.name !== "string" || !this.name.length) {
        return "";
      }
      return this.name.charAt(0);
    }
  }
};
</script>