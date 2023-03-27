// import { createApp } from 'vue';

// import App from './App.vue';
// import AuctionPlayer from './components/AuctionPlayer.vue';
// // import BaseCard from './components/UI/BaseCard.vue';
// // import BaseButton from './components/UI/BaseButton.vue';
// import 'bootstrap/dist/css/bootstrap.css'

// const app = createApp(App);

// app.component('auction-player', AuctionPlayer);
// // app.component('base-card', BaseCard);
// // app.component('base-button', BaseButton);

// app.mount('#app');

// import 'bootstrap/dist/js/bootstrap.js'

import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import './index.css'

createApp(App).use(router).mount('#app')