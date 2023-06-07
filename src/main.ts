import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "virtual:uno.css";
import "./styles/index.scss";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).mount("#app");
