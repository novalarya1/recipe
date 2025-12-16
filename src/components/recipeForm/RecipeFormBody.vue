<template>
  <li class="list-group-item">
    <form @submit.prevent="submitRecipe">
      <!-- General Information -->
      <div>
        <p class="my-3 fs-5 fw-semibold">General Information</p>

        <!-- Image -->
        <div class="mb-3">
          <BaseInput type="file" identity="recipeImage" label="Photo Recipe" @change="checkImage" />
          <div>
            <img :src="recipeData.imageLink" :alt="recipeData.name" class="image" />
          </div>
        </div>

        <!-- Recipe Title -->
        <div class="mb-3">
          <BaseInput
            type="text"
            identity="recipeTitle"
            label="Recipe Title"
            placeholder="Give your recipe a title"
            v-model="recipeData.name"
          />
        </div>

        <!-- Description -->
        <div class="mb-3">
          <BaseTextArea
            identity="recipeDescription"
            label="Description"
            placeholder="Share story behind recipe and what makes it special"
            v-model="recipeData.description"
          />
        </div>

        <!-- Category -->
        <div class="mb-3">
          <label class="fw-semibold">Category</label>
          <BaseSelect :data="categories" v-model="recipeData.category" />
        </div>
      </div>

      <!-- Time Setting -->
      <div class="border-top py-1">
        <p class="my-3 fs-5 fw-semibold">Time Setting</p>
        <BaseInput type="number" identity="prepTime" label="Prep Time" placeholder="0" v-model="recipeData.prepTime" />
        <BaseInput type="number" identity="cookTime" label="Cook Time" placeholder="0" v-model="recipeData.cookTime" />
        <BaseInput type="number" identity="totalTime" label="Total Time" placeholder="0" v-model="recipeData.totalTime" readonly />
      </div>

      <!-- Ingredients -->
      <div class="border-top py-1">
        <p class="my-3 fs-5 fw-semibold">Ingredients</p>
        <div class="mb-3 row" v-for="(item, index) in recipeData.ingredients" :key="index">
          <div class="col-lg-11 col-11">
            <BaseInput type="text" :identity="`ingredient-${index}`" placeholder="Ex: 1 cup sugar" v-model="recipeData.ingredients[index]" />
          </div>
          <div class="col-lg-1 col-1 col-form-label align-self-end delete-ingredient" @click="removeIngredient(index)">
            <i class="fa-regular fa-trash-can px-1"></i>
            <span class="d-none d-md-inline">Delete</span>
          </div>
        </div>
        <BaseButton type="button" class="new-ingredient-btn px-3 py-2" @click="addIngredient">Add More</BaseButton>
      </div>

      <!-- Directions -->
      <div class="border-top my-3">
        <p class="my-3 fs-5 fw-semibold">Directions</p>
        <div class="mb-3 row" v-for="(step, index) in recipeData.directions" :key="index">
          <div class="col-lg-11 col-11">
            <BaseInput type="text" :identity="`direction-${index}`" placeholder="Ex: Mix all ingredients" v-model="recipeData.directions[index]" />
          </div>
          <div class="col-lg-1 col-1 col-form-label align-self-end delete-ingredient" @click="removeDirection(index)">
            <i class="fa-regular fa-trash-can px-1"></i>
            <span class="d-none d-md-inline">Delete</span>
          </div>
        </div>
        <BaseButton type="button" class="new-ingredient-btn px-3 py-2" @click="addDirection">Add More</BaseButton>
      </div>

      <!-- Buttons -->
      <div class="border-top py-3 d-flex my-4 justify-content-end">
        <BaseButton type="button" class="cancel-btn px-3 py-2 ms-1" @click="cancelForm">Cancel</BaseButton>
        <BaseButton type="submit" class="submit-recipe-btn px-3 py-2 ms-1">{{ props.isEdit ? "Update" : "Submit" }}</BaseButton>
      </div>
    </form>
  </li>
</template>

<script setup>
import { reactive, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

import BaseInput from "../ui/BaseInput.vue";
import BaseTextArea from "../ui/BaseTextArea.vue";
import BaseSelect from "../ui/BaseSelect.vue";
import BaseButton from "../ui/BaseButton.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

const categories = ["Breakfast", "Lunch", "Dinner", "Meals", "Snacks"];

const props = defineProps({
  isEdit: { type: Boolean, default: false },
  id: String,
});

const recipeData = reactive({
  imageLink: "",
  name: "",
  description: "",
  category: "",
  prepTime: 0,
  cookTime: 0,
  totalTime: 0,
  ingredients: [""],
  directions: [""],
});

const addIngredient = () => recipeData.ingredients.push("");
const removeIngredient = (index) => recipeData.ingredients.splice(index, 1);
const addDirection = () => recipeData.directions.push("");
const removeDirection = (index) => recipeData.directions.splice(index, 1);

const checkImage = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => (recipeData.imageLink = reader.result);
};

const cancelForm = () => router.back();

const submitRecipe = async () => {
  if (props.isEdit && props.id) {
    await store.dispatch("recipe/updateRecipe", {
      id: props.id,
      newRecipe: JSON.parse(JSON.stringify(recipeData)),
    });
  } else {
    await store.dispatch("recipe/addNewRecipe", JSON.parse(JSON.stringify(recipeData)));
  }
  router.push("/user/user-recipe");
};

onMounted(() => {
  if (props.isEdit && props.id) {
    const recipeDetail = store.state.recipe.recipes.find((r) => r.id === props.id);
    if (recipeDetail) Object.assign(recipeData, recipeDetail);
  }
});

watch(
  () => [recipeData.prepTime, recipeData.cookTime],
  () => {
    recipeData.totalTime = Number(recipeData.prepTime) + Number(recipeData.cookTime);
  }
);
</script>
