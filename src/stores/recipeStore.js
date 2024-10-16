import { defineStore } from "pinia";
import { ref } from "vue";
import { getRecipes, getRecipeInfo } from "@/services/spoonacularService";
import recipesData from "../../db.json";

export const useRecipeStore = defineStore("recipeStore", () => {
  const recipes = ref([]);
  const recipe = ref(null);
  const searchQuery = ref("");

  const recipesExample = ref(recipesData.recipes);

  const searchRecipes = async (query) => {
    searchQuery.value = query;
    recipes.value = recipesExample.value.filter((recipe) => {
      return recipe.value;
    });
  };

  const fetchRecipeInfo = async (id) => {
    try {
      // recipe.value = await getRecipeInfo(id);
      recipes.value = recipesExample;
    } catch (error) {
      console.error("Error fetching recipe info:", error);
    }
  };

  return {
    recipes,
    recipe,
    searchQuery,
    searchRecipes,
    recipesExample,
    fetchRecipeInfo,
  };
});
