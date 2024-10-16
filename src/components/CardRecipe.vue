<template>
  <div class="">

    <v-card elevated class="mx-4 my-4 card-recipe ">
      <v-card-title class="flex">{{ recipe.title }}</v-card-title>
      <v-card-text>
        <img class="img-card" :src="recipe.image" :alt="recipe.title" @error="imageError = true" />
        <div v-if="imageError">Aucune image disponible</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  setup(){
    const imageError = ref(false)

    return{
      imageError
    }
  }
}
</script>

<style scoped>
.card-recipe {
  width: 300px;
  height: auto;
  cursor: pointer;
}

.img-card {
  width: 100%;
  height: auto;
}
</style>