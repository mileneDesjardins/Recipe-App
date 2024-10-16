<template>
  <div class="recipe-container">
    <h1 class="text-center">Recipe Information</h1>

    <router-link
      :to="{ name: 'home', query: { q: searchQuery } }"
      class="btn-back"
      >Back to Results</router-link
    >

    <div v-if="recipe" class="recipe-card">
      <h2>{{ recipe.title }}</h2>
      <img
        class="img-card"
        :src="recipe.image"
        :alt="recipe.title"
        @error="imageError = true"
      />

      <div class="recipe-details">
        <p><strong>Servings:</strong> {{ recipe.servings }}</p>

        <p>
          <strong>Preparation Time:</strong> {{ recipe.readyInMinutes }} minutes
        </p>

        <p v-if="recipe.cookingMinutes">
          <strong>Cooking Time:</strong> {{ recipe.cookingMinutes }} minutes
        </p>

        <p v-if="recipe.aggregateLikes">Likes: {{ recipe.aggregateLikes }}</p>

        <p v-if="recipe.healthScore">
          <strong>Health Score:</strong> {{ recipe.healthScore }}/100
        </p>

        <p v-if="recipe.diets.length">
          <strong>Diets:</strong> {{ recipe.diets.join(", ") }}
        </p>

        <p v-if="recipe.dishTypes.length">
          <strong>Dish Type:</strong> {{ recipe.dishTypes.join(", ") }}
        </p>

        <p v-if="recipe.summary" v-html="recipe.summary"></p>

        <p v-if="recipe.sourceName">
          <strong>Source:</strong>
          <a :href="recipe.sourceUrl" target="_blank"
            >{{ recipe.sourceName }}
          </a>
        </p>

        <p v-if="recipe.spoonacularScore">
          <strong>Spoonacular Score:</strong> {{ recipe.spoonacularScore }}
        </p>

        <p v-if="recipe.pricePerServing">
          <strong>Price Per Serving:</strong> ${{
            recipe.pricePerServing.toFixed(2)
          }}
        </p>

        <p v-if="recipe.creditsText">
          <strong>Credits:</strong> {{ recipe.creditsText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRecipeStore } from "../stores/recipeStore";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

export default {
  name: "RecipeInfo",
  setup() {
    const recipeStore = useRecipeStore();
    const route = useRoute();
    const imageError = ref(false);

    onMounted(() => {
      recipeStore.fetchRecipeInfo(route.params.id);
    });

    return {
      recipe: recipeStore.recipe,
      imageError,
      searchQuery: recipeStore.searchQuery,
    };
  },
};
</script>

<style scoped>
.recipe-container {
  background-color: #fff;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.recipe-card {
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

h2 {
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 10px;
}

.img-card {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.recipe-details {
  text-align: left;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.recipe-details p {
  margin: 8px 0;
}

strong {
  color: #2c3e50;
}

.btn-back {
  display: inline-block;
  /* Changer le style pour rendre le lien comme un bouton */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  /* Supprime le soulignement */
  text-align: center;
  /* Centre le texte */
}

.btn-back:hover {
  background-color: #0056b3;
}
</style>
