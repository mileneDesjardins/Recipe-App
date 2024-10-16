import { defineStore } from "pinia";
import { ref } from "vue";
import { getRecipes, getRecipeInfo } from "@/services/spoonacularService";
import recipesData from "../../db.json";

export const useRecipeStore = defineStore("recipeStore", () => {
  const recipesMain = ref(recipesData.recipes);
  const recipes = ref(recipesData.recipes);
  const recipe = ref([]);
  let oldQuery = ref("");
  let query = ref("");

  const searchRecipes = async (query) => {
    // Met à jour oldQuery et searchQuery
    oldQuery.value = query.value;

    if (query === "") {
      // Si le champ de recherche est vide, retourne toutes les recettes
      return recipesMain.value;
    } else {
      const queryWords = query.toLowerCase().split(" ");

      recipes.value = recipesMain.value.filter((recipe) => {
        return queryWords.some((word) =>
          recipe.title.toLowerCase().includes(word)
        );
      });
    }
  };

  const fetchRecipeInfo = async (id) => {
    try {
      // Cherchez la recette par son ID dans le tableau recipesMain
      const foundRecipe = recipes.value.find((recipe) => recipe.id === id);
      recipe.value = foundRecipe || null; // Mettez à jour recipe avec la recette trouvée
    } catch (error) {
      console.error("Error fetching recipe info:", error);
    }
  };

  return {
    recipes,
    recipe,
    query,
    searchRecipes,
    recipesMain,
    fetchRecipeInfo,
    oldQuery,
  };
});
