<template>
  <button :type="type" class="base-button" @click="$emit('clickButton')">
      <slot></slot>
  </button>
</template>
<script setup>
  defineProps({
      type: { type: String, require: false, default: "button" },
  });
</script>