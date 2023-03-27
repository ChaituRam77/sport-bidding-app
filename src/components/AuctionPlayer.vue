<template>
  <div>
    <div class="d-flex justify-content-between align-items-center my-3">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="basePriceDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Base Price: {{ basePrice }}
        </button>
        <div class="dropdown-menu" aria-labelledby="basePriceDropdown">
          <a class="dropdown-item" href="#" @click="setBasePrice(1)">1</a>
          <a class="dropdown-item" href="#" @click="setBasePrice(3)">3</a>
          <a class="dropdown-item" href="#" @click="setBasePrice(5)">5</a>
          <a class="dropdown-item" href="#" @click="setBasePrice(10)">10</a>
        </div>
      </div>

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="categoryDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Category: {{ category }}
        </button>
        <div class="dropdown-menu" aria-labelledby="categoryDropdown">
          <a class="dropdown-item" href="#" @click="setCategory('batsman')"
            >Batsman</a
          >
          <a class="dropdown-item" href="#" @click="setCategory('bowler')"
            >Bowler</a
          >
          <a class="dropdown-item" href="#" @click="setCategory('wicketkeeper')"
            >Wicketkeeper</a
          >
          <a class="dropdown-item" href="#" @click="setCategory('allrounder')"
            >Allrounder</a
          >
        </div>
      </div>

      <button class="btn btn-primary" @click.prevent="callAPI2">Call API</button>
    </div>

    <div v-if="playerData">
      <h3>{{ playerData.name }}</h3>
      <p>Team: {{ playerData.team }}</p>
      <p>Country: {{ playerData.country }}</p>
      <img :src="playerData.picture" alt="Player Picture" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      basePrice: 3,
      category: "batsman",
      playerData: null,
    };
  },
  methods: {
    setBasePrice(price) {
      this.basePrice = price;
    },
    setCategory(category) {
      this.category = category;
    },
    callAPI() {
      const apiUrl = "http://localhost:8080/getRandomPlayer";
      const queryParams = {
        basePrice: this.basePrice,
        category: this.category,
      };
      const url = new URL(apiUrl);
      Object.keys(queryParams).forEach((key) =>
        url.searchParams.append(key, queryParams[key])
      );
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.playerData = data;
          console.log(data);
        })
        .catch((error) => console.error(error));
    },
    async getAllUsers() {
      const response = await fetch("getOwnersTeam", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log("RESPONSE..." + response);
      return await response.json();
    },

    async createUser(data) {
      const response = await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: data }),
      });
      return await response.json();
    },

    async callAPI2() {
      console.log("Calliing");
      const options = {
        method: "GET",
        // url: "https://teatapp.onrender.com/getRandomPlayer",
        // url: "http://localhost:8080/getRandomPlayer",
        url: "getRandomPlayer",
        params: { basePrice: this.basePrice, category: this.category },
        headers: {
          // "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      await axios
        .request(options)
        .then((response) => {
          this.apiScore = response.data;
          console.log(this.apiScore);
        })
        .catch((error) => {
          console.log("ERORR FACEED");
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}

.dropdown-menu {
  box-shadow: none;
}

.dropdown-item.active,
.dropdown-item:active {
  background-color: #007bff;
  color: #fff;
}
</style>
