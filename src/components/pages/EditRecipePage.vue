<script setup>
import RecipeForm from '../recipeForm/RecipeForm.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const store = useStore();
const route = useRoute();
const detailData = ref({});
const isLoading = ref(false);

onMounted(async () => {
    isLoading.value = true;
    const recipeId = route.params.id;

    await store.dispatch('recipe/getRecipeDetail', recipeId);
    detailData.value = store.state.recipe.recipeDetail; 
    isLoading.value = false;
});
</script>

<template>
    <main>
        <div class="container-md my-5 py-5">
            <recipe-form 
                v-if="!isLoading && detailData" 
                :isEdit="true" 
                :initial-data="detailData">
            </recipe-form>
            <p v-else>Memuat detail resep...</p>
        </div>
    </main>
</template>
