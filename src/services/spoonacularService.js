// src/services/spoonacularService.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

export const spoonacularApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

// Example function to get recipes
export const getRecipes = async (query) => {
  try {
    console.log('Query sent to API:', query);
    const response = await spoonacularApi.get('/recipes/complexSearch', {
      params: { query },
    });
    console.log('API Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecipeInfo = async (id) => {
  try {
    console.log('ID sent to API:', id);
    const response = await spoonacularApi.get(`/recipes/${id}/information`);
    console.log('API Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe information:', error);
    throw error;
  }
};
