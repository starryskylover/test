<template>
  <button
    :class="`bg-[#252529] text-center pt-[10px] pb-[11px] pr-[20px] pl-[20px] rounded-[16px] w-[380px] h-[48px]`"
    @click="onClick"
  >
    <a :href="link" class="text-[#FFFFFF] text-center font-medium text-[20px] leading-[28px]">
      {{ buttonText }}
    </a>
  </button>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "#", 
  },
});

const emit = defineEmits(['click']);

const onClick = () => {
  emit('click');
};
</script>
