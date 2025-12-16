<template>
  <ul class="list-group">
    <RecipeFormHeader />
    <RecipeFormBody :isEdit="isEdit" />
  </ul>
</template>

<script setup>
import RecipeFormHeader from "./RecipeFormHeader.vue";
import RecipeFormBody from "./RecipeFormBody.vue";
</script>
