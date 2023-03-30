<template>
  <h1 class='fs-3 app-title'><strong>IPL 2023 Auction</strong></h1>
  <nav>
    <router-link to="/">Teams</router-link> &nbsp;&nbsp;
    <router-link to="/auctionPlayer">Auction Area</router-link> &nbsp;&nbsp;&nbsp;
    <router-link to="/auctionBay"><i class="bi bi-three-dots-vertical"></i></router-link>
  </nav>
  <router-view/>
  <!-- <auction-player></auction-player> -->
</template>

<script>
// import AuctionPlayer from './components/AuctionPlayer.vue';

export default {
  components: {
    // AuctionPlayer
    },
  
};
</script>

<!-- <style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style> -->