import { defineStore } from "pinia";
import { ref } from "vue";
import { getRecipes, getRecipeInfo } from "@/services/spoonacularService";
import recipesData from "../../db.json";

export const useRecipeStore = defineStore("recipeStore", () => {
  const recipesMain = ref(recipesData.recipes);
  const recipes = ref(recipesData.recipes);
  const recipe = ref([]);
  const searchQuery = ref("");
  let oldQuery = ref("");
  let query = ref("");

  const searchRecipes = async (query) => {
    // Met à jour oldQuery et searchQuery
    oldQuery.value = searchQuery.value;
    searchQuery.value = query;

    if (query === "") {
      // Si le champ de recherche est vide, retourne toutes les recettes
      recipes.value = recipesMain.value;
    } else {
      console.log(query);
      const queryWords = query.toLowerCase().split(" "); // Divise la requête en mots

      // Filtre les recettes qui contiennent au moins un mot de la requête
      recipes.value = recipesMain.value.filter((recipe) => {
        return queryWords.some((word) =>
          recipe.title.toLowerCase().includes(word)
        );
      });
    }
  };

  const fetchRecipeInfo = async (id) => {
    try {
      // recipe.value = await getRecipeInfo(id);
      recipes.value = recipesMain;
    } catch (error) {
      console.error("Error fetching recipe info:", error);
    }
  };

  return {
    recipes,
    recipe,
    searchQuery,
    query,
    searchRecipes,
    recipesMain,
    fetchRecipeInfo,
    oldQuery,
  };
});
