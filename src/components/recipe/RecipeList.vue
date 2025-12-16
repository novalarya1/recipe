<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  recipes: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

const goToDetail = (id) => {
  router.push(`/recipe/${id}`);
};
</script>

<template>
  <div class="recipe__list-recipe row">
    <div
      v-for="recipe in recipes"
      :key="recipe.id"
      class="col-12 col-lg-3 col-sm-4 position-relative"
      style="padding-top: 12px; padding-bottom: 12px"
    >
      <div
        class="card text-decoration-none"
        style="height: 398px; cursor: pointer"
        @click="goToDetail(recipe.id)"
      >
        <img
          :src="recipe.imageLink"
          class="card-img-top"
          alt="Food"
          height="240"
          width="285"
          style="object-fit: cover"
        />

        <div class="card-body" style="color: #0a0a0a">
          <p class="mb-0">{{ recipe.category }}</p>

          <div class="h-50">
            <h4 class="fs-5 mb-0">{{ recipe.name }}</h4>
          </div>

          <p>Recipe By {{ recipe.username }}</p>
        </div>
      </div>

      <!-- Like Icon -->
      <div
        class="position-absolute text-secondary bg-light px-2 py-1 rounded-circle top-0 end-0 m-4 like-icon"
      >
        <i class="fas fa-heart"></i>
      </div>
    </div>
  </div>
</template>
