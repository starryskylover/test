<template>
  <div class="relative flex flex-1 w-[380px] rounded-[10px] h-12 bg-[#f5f4f4] overflow-visible"
       @click="isDropdownOpened = !isDropdownOpened">
    <div class="flex-col gap-0.5">
      <p class="text-[14px] leading-4 text-[#939292] leading-[16px] font-normal ml-[12px] mt-[4px]">{{ title }}</p>
      <input v-model="searchQuery" type="text"
             class="w-[380px] bg-transparent outline-none text-normal leading-5 font-normal text-[16px] text-[#000000] pl-[12px] pr-4"
             :style="inputStyle" :placeholder="placeholder" />

      <div v-if="isDropdownOpened"
           class="absolute top-full left-0 right-0 bg-[#FFFFFF] p-3 flex flex-col gap-3 z-10 mt-2 max-h-60 overflow-y-auto w-[380px] rounded-[10px]">

        <slot :items="sortedFilteredItems">
          <div v-for="item in sortedFilteredItems" :key="item.id"
               class="px-3 py-2 bg-white cursor-pointer hover:bg-[#F5F4F4] rounded-tl-[10px] rounded-bl-[10px] w-[368px] leading-5 font-normal"
               @click="selectItem(item)">
            {{ item.name }}
          </div>
        </slot>

        <div v-if="sortedFilteredItems.length === 0" class="px-3 py-2 bg-white leading-5 font-normal text-[#939292]">
          Ничего не найдено
        </div>
      </div>
    </div>
    <svg class="absolute right-[15px] top-1/2 transform -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20"
         fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.0423 15.0728L15.0957 8.04288C15.1793 7.89253 15.2235 7.72206 15.224 7.54844C15.2245 7.37482 15.1812 7.2041 15.0984 7.05326C15.0156 6.90243 14.8963 6.77673 14.7523 6.68868C14.6082 6.60063 14.4445 6.5533 14.2774 6.55139L6.1706 6.55139C6.00349 6.5533 5.83977 6.60063 5.69573 6.68868C5.55169 6.77673 5.43236 6.90243 5.3496 7.05326C5.26684 7.2041 5.22354 7.37482 5.224 7.54844C5.22447 7.72206 5.26869 7.89252 5.35226 8.04288L9.40566 15.0728C9.49098 15.2189 9.6111 15.3397 9.75444 15.4235C9.89778 15.5073 10.0595 15.5514 10.224 15.5514C10.3885 15.5514 10.5502 15.5073 10.6936 15.4235C10.8369 15.3397 10.957 15.2189 11.0423 15.0728Z"
        fill="#939292" />
    </svg>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    items: {
        type: Array,
        required: true,
    },
    placeholder: {
        type: String,
        default: 'Введите',
    },
});

const emit = defineEmits(['select']);

const isDropdownOpened = ref(false);
const searchQuery = ref('');


const sortedFilteredItems = computed(() => {
    return props.items
        .filter(item => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name)); 
});

const selectItem = (item) => {
    searchQuery.value = item.name;
    isDropdownOpened.value = false;
    emit('select', item);
};
</script>

<style scoped></style>
