<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  modelValue: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  }
})

const emit = defineEmits(["update:modelValue"])
</script>

<template>
  <div class="relative bg-[#f5f4f4] px-3 pt-1 pb-1.5 rounded-[10px] h-12 flex flex-col gap-0.5">
    <p class="text-[14px] leading-4 text-[#939292] leading-[16px] font-normal">{{ title }}</p>
    <input class="outline-none text-base leading-5 bg-inherit font-normal ttext-[#000000]" :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)" :placeholder="placeholder" />
  </div>
</template>

<style></style>