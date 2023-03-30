import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createApp } from "vue";
import "./index.css";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import PlayersResponse from "./components/PlayersResponse.vue";
import VueSplitter, { VueSplitterV } from "vue-splitter-pane";
// import Splitter from 'primevue/splitter';
// import SplitterPanel from 'primevue/splitterpanel';
// import VueSplitView from "vue-split-view";

createApp(App)
  .component("base-card", BaseCard)
  .component("base-button", BaseButton)
  .component("players-response", PlayersResponse)
  .component("vue-splitter", VueSplitter)
  .component("vue-splitter-v", VueSplitterV)
  // .component("splitter", Splitter)
  // .component("splitter-panel", SplitterPanel)
  // .component("vue-split-view", VueSplitView)
  .use(router)
  .mount("#app");
