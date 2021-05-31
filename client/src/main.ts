import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/index.css";

//Global components
import Button from "./components/base/Button.vue"
import Avatar from "./components/base/Avatar.vue"
import ProgressBar from "./components/base/ProgressBar.vue"


const app = createApp(App);

app.component('BaseButton', Button);
app.component('Avatar', Avatar);
app.component('ProgressBar', ProgressBar);
app.use(store).mount("#app");
