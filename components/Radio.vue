<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
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
    default: () => [],
  },
});

const emit = defineEmits(["changeValueSelected", "disableAll"]);

const changeValueSelected = (value) => {
  if (props.isWithRadio) {
    emit("changeValueSelected", [value]);
  } else if (props.isWithCheckbox) {
    const newSelectedValues = props.selectedValues.includes(value)
      ? props.selectedValues.filter((item) => item !== value) 
      : [...props.selectedValues, value]; 
    emit("changeValueSelected", newSelectedValues);
  }
};

const disableAll = () => {
  emit("disableAll");
};
</script>

<template>
  <div
    v-for="item in items"
    :key="item"
    class="relative bg-white flex flex-row gap-[16px] w-[368px] items-center"
  >

    <input
      v-if="isWithCheckbox"
      type="checkbox"
      :checked="selectedValues.includes(item)"
      @click.stop="changeValueSelected(item)"
    />
    

    <input
      v-if="isWithRadio"
      type="radio"
      :checked="selectedValues.includes(item)"
      @click.stop="changeValueSelected(item)"
    />

    <p
      class="font-normal text-[16px] leading-[20px] w-[380px] text-[#939292]"
      :class="{ 'text-black': selectedValues.includes(item) }"
      v-html="item"
      @click.stop="changeValueSelected(item)"
    ></p>
  </div>
</template>

<style></style>