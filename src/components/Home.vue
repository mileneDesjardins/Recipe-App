<template>
  <MainNav />
  <div class="home-container">
    <!-- <div
       > 0"
      class="d-flex flex-sm-wrap justify-center"
    > -->

    <div
      v-if="recipeStore.recipes.length > 0"
      class="d-flex flex-sm-wrap justify-center"
    >
      <CardRecipe
        v-for="(r, index) in recipeStore.recipes"
        :key="index"
        :recipe="r"
        @click="searchPageInfo(r.id)"
      />
    </div>
    <!-- </div> -->

    <div v-else class="no-results">
      <p>No recipes found. Please try a different search!</p>
    </div>
  </div>
</template>

<script>
import { useRecipeStore } from "../stores/recipeStore";
import { useRouter } from "vue-router";
import CardRecipe from "./CardRecipe.vue";
import MainNav from "./MainNav.vue";

export default {
  name: "Home",
  components: { MainNav, CardRecipe },
  setup() {
    const recipeStore = useRecipeStore();
    const router = useRouter();

    const searchPageInfo = (id) => {
      router.push({
        name: "info",
        params: { id },
      });
    };

    return {
      recipeStore,
      searchPageInfo,
    };
  },
};
</script>
<style scoped>
.home-container {
  padding: 100px;
  max-width: 1200px;
  margin: 0 auto;
}

.card-recipe {
  width: 500px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.no-results {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}
</style>
