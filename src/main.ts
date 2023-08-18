import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVueComponentsPlugin from "@/plugin/primeVuePlugin";

const app = createApp(App);
app.use(PrimeVueComponentsPlugin);

app.mount("#app"); // mount the app
