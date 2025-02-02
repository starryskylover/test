<script setup>
const props = defineProps({
  items: {
    type: String,
    default: ""
  },
  isWithCheckbox: {
    type: Boolean,
    default: false,
  },
  isWithRadio: {
    type: Boolean,
    default: false,
  },
  selectedValues: {
    type: Array,
    default: () => []
  }
})

const changeValueSelected = (value) => {
  emit('changeValueSelected', value)
}

const disableAll = () => {
  emit('disableAll')
}

const emit = defineEmits(["update:modelValue"])
</script>

<template>
  <div v-for="item in items" class="relative bg-white flex flex-row gap-[16px] w-[368px] items-center"
  @click.stop="changeValueSelected(item)">
    <input v-if="isWithCheckbox" type="checkbox" :checked="selectedValues.includes(item)" />
    <input v-if="isWithRadio" type="radio" :checked="selectedValues.includes(item)" />
    <p class="font-normal text-[16px] leading-[20px] w-[380px] text-[#939292]" :class="{
      'text-black': selectedValues.includes(item) 
    }" v-html="item"></p>
  </div>
</template>

<style></style>
