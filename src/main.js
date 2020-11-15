import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import LoGo from "./Logo.vue";
import BaseButton from "./components/ui/BaseButton.vue"
import store from "./store/index";
import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component('lo-go',LoGo);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
