import { createApp } from "vue";
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";
import { createPinia } from "pinia";
import PiniaHistoryPlugin from "./plugins/PiniaHistoryPlugin";

const pinia = createPinia().use(PiniaHistoryPlugin);

// Init App
createApp(App).use(BoilerplatePlugin).use(pinia).mount("#app");
