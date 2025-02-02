<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  selectedValue: {
    type: String,
    default: ""
  },
  selectedValues: {
    type: Array,
    default: () => []
  },
  isWithCheckbox: {
    type: Boolean,
    default: false,
  }
  ,
  isWithRadio: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(["changeValue", "changeValueSelected", "disableAll"])

const isDropdownOpened = ref(false)
const changeValue = (value) => {
  emit('changeValue', value)
}
const changeValueSelected = (value) => {
  emit('changeValueSelected', value)
}

const disableAll = () => {
  emit('disableAll')
}
</script>

<template>
  <div class="relative flex flex-1 rounded-[10px] h-12 bg-[#F5F4F4] px-3 pt-[13px] pb-[15px] overflow-visible"
    @click="isDropdownOpened = !isDropdownOpened">

    <div class="font-medium font-size-[16px] leading-[20px] text-[#939292]">
      {{ selectedValue || selectedValues.join(", ") }}
    </div>
    <div class="bg-[#FFFFFF]">

      <div v-if="isDropdownOpened && !isWithCheckbox && !isWithRadio"
        class="absolute -bottom-1 translate-y-full left-0 right-0 bg-[#FFFFFF] p-3 flex flex-col gap-3 z-10 rounded-[10px]">

        <div v-for="item in items"
          class="px-3 py-2 bg-white hover:bg-[#F5F4F4] rounded-tl-[10px] rounded-bl-[10px] w-[368px] font-normal font-size-[16px] leading-[20px] text-[#000000]"
          @click="changeValue(item)">
          {{ item }}
        </div>

      </div>

      <div v-if="isDropdownOpened && (isWithCheckbox || isWithRadio)"
        class="absolute -bottom-1 translate-y-full left-0 right-0 bg-[#FFFFFF] p-3 flex flex-col gap-3 z-10 rounded-[10px]">

        <div v-for="item in items"
          class="px-3 py-2 bg-white flex flex-row gap-4 hover:bg-[#F5F4F4] rounded-tl-[10px] rounded-bl-[10px] w-[368px]"
          @click.stop="changeValueSelected(item)">
          <input v-if="isWithCheckbox" type="checkbox" class="checked:bg-[#252529] focus:ring-blac"
            :checked="selectedValues.includes(item)" />
          <p class="font-normal font-size-[16px] leading-[20px] text-[#000000]">{{ item }}</p>
        </div>
        <div v-if="isWithCheckbox && isWithRadio"
          class="px-3 py-2 bg-white flex flex-row gap-4 hover:bg-[#F5F4F4] rounded-tl-[10px] rounded-bl-[10px] w-[368px]"
          @click.stop="disableAll">
          <input type="radio" :checked="selectedValues.length === 0" />
          <p class="font-normal font-size-[16px] leading-[20px] text-[#000000]">Отключены</p>
        </div>
      </div>
    </div>


    <svg class="absolute right-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.0423 15.0728L15.0957 8.04288C15.1793 7.89253 15.2235 7.72206 15.224 7.54844C15.2245 7.37482 15.1812 7.2041 15.0984 7.05326C15.0156 6.90243 14.8963 6.77673 14.7523 6.68868C14.6082 6.60063 14.4445 6.5533 14.2774 6.55139L6.1706 6.55139C6.00349 6.5533 5.83977 6.60063 5.69573 6.68868C5.55169 6.77673 5.43236 6.90243 5.3496 7.05326C5.26684 7.2041 5.22354 7.37482 5.224 7.54844C5.22447 7.72206 5.26869 7.89252 5.35226 8.04288L9.40566 15.0728C9.49098 15.2189 9.6111 15.3397 9.75444 15.4235C9.89778 15.5073 10.0595 15.5514 10.224 15.5514C10.3885 15.5514 10.5502 15.5073 10.6936 15.4235C10.8369 15.3397 10.957 15.2189 11.0423 15.0728Z"
        fill="#939292" />
    </svg>

  </div>
</template>

<style></style>