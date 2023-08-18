import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";

// import "primevue/resources/themes/lara-light-indigo/theme.css";

createApp(App).use(PrimeVue).mount("#app");
