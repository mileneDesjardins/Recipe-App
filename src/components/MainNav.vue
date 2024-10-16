<template>
  <div>
    <v-app-bar :elevation="2">
      <v-app-bar-title>Find a recipe</v-app-bar-title>
      <input v-model="searchQuery" placeholder="Search for recipes" class="search-input" />
      <v-btn class="search-button" @click="handleSearch">Search</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'MainNav',
  props: {
    searchRecipes: {
      type: Function,
      required: true,
    },
    searchQuery: { // Ajoutez une nouvelle prop pour la valeur de recherche
      type: String,
      required: true,
    },
  },
  setup(props) {
    const searchQuery = ref(props.searchQuery);

    // Mettez à jour la valeur de recherche lorsque la prop change
    watch(() => props.searchQuery, (newVal) => {
      searchQuery.value = newVal;
    });

    const handleSearch = () => {
      props.searchRecipes(searchQuery.value);
      searchQuery.value = '';
    };

    return {
      searchQuery,
      handleSearch,
    };
  }
}
</script>

<style scoped>
.search-button {
  background-color: #1976d2;
  /* Couleur de fond */
  color: white;
  /* Couleur du texte */
  border-radius: 4px;
  /* Coins arrondis */
  padding: 8px 16px;
  /* Espacement interne */
  transition: background-color 0.3s;
  /* Transition pour le survol */

}

.search-button:hover {
  background-color: #155a8a;
  /* Couleur au survol */
}

.search-input {
  border: 1px solid #ccc;
  /* Bordure */
  border-radius: 4px;
  /* Coins arrondis */
  padding: 8px;
  /* Espacement interne */
  margin-right: 10px;
  /* Espace à droite de l'input */
  width: 200px;
  /* Largeur de l'input */
  transition: border-color 0.3s;
  /* Transition pour le focus */
}

.search-input:focus {
  border-color: #1976d2;
  /* Couleur de bordure au focus */
  outline: none;
  /* Supprimer le contour par défaut */
}
</style>