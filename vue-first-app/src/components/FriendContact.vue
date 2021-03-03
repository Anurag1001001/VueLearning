<template>
  <li>
    <h2>{{ name }} {{ Fav === "1" ? "(Favourite)" : null }}</h2>

    <button @click="toggleDetails">
      {{ mayVisible ? "Hide" : "show" }}
    </button>
    <button @click="toggleFav">
      {{ Fav === "1" ? "unfav" : "Fav" }}
    </button>
    <ul v-if="mayVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavourite"],
  data() {
    return {
      mayVisible: true,
      Fav: this.isFavourite,
      friend: {
        id: "anurag",
        name: "Anurag Tripathi",
        email: "anurag@localhost.com",
        phone: "9876541230",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.mayVisible = !this.mayVisible;
    },
    toggleFav() {
      if (this.Fav === "1") {
        this.Fav = "0";
      } else {
        this.Fav = "1";
      }
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

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

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
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
