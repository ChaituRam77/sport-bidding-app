<template >
  <section>
    <base-card>
      <div>
        <div class="d-flex justify-content-between align-items-center my-3">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="basePriceDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ selectedPrice ? selectedPrice.label : 'Select base price' }}
            </button>
            <div class="dropdown-menu" aria-labelledby="basePriceDropdown">
              <button v-for="(price, index) in prices" :key="index" class="dropdown-item" @click="selectedPrice = price">{{ price.value }}</button>
            </div>
          </div>

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="categorieDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ selectedCategory ? selectedCategory.label : 'Select category' }}
            </button>
            <div class="dropdown-menu" aria-labelledby="categoryDropdown">
              <button v-for="(categorie, index) in categories" :key="index" class="dropdown-item" @click="selectedCategory = categorie">{{ categorie.value }}</button>
            </div>
          </div>

          <button @click.prevent="makeApiCall" class="btn btn-primary">Get Player</button>
        </div>

        <br> <!-- Add a line break before the form -->

        <div v-if="player">
          <h2></h2>
          <form>
            <!-- <div class="mb-3 row">
              <label for="name" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="name" v-model="player.name" disabled>
            </div>
            </div> -->

            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" id="name" v-model="player.name" disabled>
            </div>

            <div class="input-group mb-3">
            <div class="input-group">
                <span class="input-group-text">Team</span>
                <input type="text" class="form-control" id="team" v-model="player.team" disabled>
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group">
                <span class="input-group-text">Country</span>
                <input type="text" class="form-control" id="team" v-model="player.country" disabled>
            </div>
          </div>  
            
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Owner</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
            <span class="input-group-text">€</span>
            <input type="text" class="form-control" placeholder="Purchased for..."  aria-label="Text input with dropdown button">
            <button class="btn btn-outline-secondary" type="button">Assign</button>
            </div>

          </form>
      
        </div>
      </div>
    </base-card>
  </section> 
</template>


<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      selectedCategory: null,
      selectedPrice: null,
      prices: [
        { label: 'Base price : 1', value: '1' },
        { label: 'Base price : 3', value: '3' },
        { label: 'Base price : 5', value: '5' },
        { label: 'Base price : 10', value: '10' },
      ],
      categories: [
        { label: 'Category : Batsman', value: 'batsman' },
        { label: 'Category : Bowler', value: 'bowler' },
        { label: 'Category : WicketKeeper', value: 'WicketKeeper' },
        { label: 'Category : Allrounder', value: 'Allrounder' },
      ],
      player: null,
    };
  },
  methods: {
    makeApiCall() {
      const category = this.selectedCategory ? this.selectedCategory.value : '';
      const price = this.selectedPrice ? this.selectedPrice.value : '';

      console.log('this.selectedCategory' +this.selectedCategory)
      console.log('this.selectedCategory.value' +this.selectedCategory.value)
      console.log('category' +category)


      fetch(`https://teatapp.onrender.com/getRandomPlayer?basePrice=${price}&category=${category}`)
        .then(response => response.json())
        .then(data => {
          this.player = data;
          this.detailsAreVisible = true
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
<style>
  .dropdown-toggle {
  width: 190px; /* or whatever width you want */
}

/* * {
  box-sizing: border-box;
} */
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
/* #app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
} */
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #001aff;
  background-color: #001aff;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
