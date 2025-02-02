<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="flex flex-row gap-1 items-center">
    <div v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb" class="flex flex-row gap-1">
      <span v-html="breadcrumb" class="text-base leading-5 font-medium text-black"></span>
      <div v-if="index !== breadcrumbs.length - 1" class="w-5 h-5 flex items-center justify-center"><svg width="6"
          height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L5 5L1 1" stroke="#252529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style></style>