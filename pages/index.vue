<script setup>

const values = Array.from({ length: 12 }, () => ref(""));

const dropdownValue1 = ref("Отправлять на email владельца")

const selectedValues = ref([])
const checkSelectedValues = ref([])

const cities = ref([])
const dropdownValue2 = ref("Все")
const selectedValues1 = ref([])
const fetchCities = async () => {
  try {
    // const response = await fetch('/russia-cities.json');
    const response = await fetch('/https://github.com/starryskylover/test/blob/main/public/russia-cities.json');
    const data = await response.json();
    cities.value = data;
  } catch (error) {
    console.error('Ошибка при загрузке городов:', error);
  }
};
const handleRadioChange = (values) => {
  selectedValues.value = values;
};

onMounted(() => {
  fetchCities();
});



</script>

<template>
  <div class="relative w-[1812px] h-[1560px] ml-[84px] mr-[24px] flex flex-col gap-[40px] bg-[#F6F7F8]">
    <div class="flex flex-row gap-[12px] w-[460px] h-[28px] bg-[#F6F7F8]">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1663 14H5.83301" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.9997 22.1666L5.83301 13.9999L13.9997 5.83325" stroke="black" stroke-width="3"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p class="font-medium font-size-[24px] leading-[28px] text-[#000000]">Профиль</p>
    </div>

    <div class="w-[1812px] flex flex-row gap-[20px]">
      <div class="w-[420px] h-[184px]">
        <div class="w-[360px] h-[184px] flex flex-col gap-[16px]">
          <p class="font-medium font-size-[20px] leading-[24px] text-[#000000]">Настройки кабинета</p>
          <div class="font-normal font-size-[18px] leading-[20px] text-[#939292]">
            <p class="mb-[12px]">Укажите название вашего объекта и к какой сфере он относится</p>
            <p class="mb-[12px]">Загрузите фотографии объекта или площадки.</p>
            <p>Данные материалы будут доступны для просмотра вашим клиентам</p>
          </div>
        </div>
      </div>
      <Block class="w-[440px] flex flex-col gap-[16px] p-[20px]">
        <p class="font-medium font-size-[18px] leading-[20px] text-[#000000]">Аккаунт владельца</p>
        <div class="flex flex-row gap-[16px] w-[400px] h-[112px]">
          <div class="flex items-center justify-center bg-[#f5f4f4] rounded-[10px] w-[112px] h-[112px]">
            <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="112" height="112" rx="10" fill="#F5F4F4" />
              <path
                d="M74.3337 62.6667C74.3337 63.5507 73.9825 64.3986 73.3573 65.0237C72.7322 65.6488 71.8844 66 71.0003 66H41.0003C40.1163 66 39.2684 65.6488 38.6433 65.0237C38.0182 64.3986 37.667 63.5507 37.667 62.6667V44.3333C37.667 43.4493 38.0182 42.6014 38.6433 41.9763C39.2684 41.3512 40.1163 41 41.0003 41H47.667L51.0003 36H61.0003L64.3337 41H71.0003C71.8844 41 72.7322 41.3512 73.3573 41.9763C73.9825 42.6014 74.3337 43.4493 74.3337 44.3333V62.6667Z"
                fill="#939292" stroke="#939292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M55.9997 59.3333C59.6816 59.3333 62.6663 56.3486 62.6663 52.6667C62.6663 48.9848 59.6816 46 55.9997 46C52.3178 46 49.333 48.9848 49.333 52.6667C49.333 56.3486 52.3178 59.3333 55.9997 59.3333Z"
                stroke="#F5F4F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39 61V75" stroke="#F5F4F4" stroke-width="6" stroke-linecap="round" />
              <path d="M32 68H46" stroke="#F5F4F4" stroke-width="6" stroke-linecap="round" />
              <path d="M39 61V75" stroke="#939292" stroke-width="3" stroke-linecap="round" />
              <path d="M32 68H46" stroke="#939292" stroke-width="3" stroke-linecap="round" />
            </svg>
          </div>
          <div class="flex flex-col gap-[16px] w-[272px]">
            <Input v-model="values[0].value" title="Номер телефона" placeholder="Введите номер телефона" />
            <Input v-model="values[1].value" title="Адрес электронной почты" placeholder="Введите email" />
          </div>
        </div>
        <Input v-model="values[2].value" title="Фамилия" placeholder="Введите фамилию" />
        <Input v-model="values[3].value" title="Имя" placeholder="Введите имя" />
        <Input v-model="values[4].value" title="Отчество" placeholder="Введите отчество" />
      </Block>

      <Block class="w-[420px] h-[180px] flex flex-col p-[20px] gap-[16px]">
        <p class="font-medium font-size-[18px] leading-[20px] text-[#000000]">Банковские карты</p>
        <p class="font-normal font-size-[18px] leading-[20px] text-[#939292]">Тут будут отображаться банковские карты
          для оплаты доступа к кабинету</p>
        <Button buttonText="Добавить" />
      </Block>

      <Block class="w-[420px] h-[336px] flex flex-col p-[20px] gap-[16px]">
        <p class="font-medium font-size-[18px] leading-[20px] text-[#000000]">Уведомления</p>

        <div class="flex flex-col gap-[8px]">
          <p class="font-medium font-size-[16px] leading-[20px] text-[#939292]">Адрес для уведомлений</p>
          <Dropdown
            :items="['Отправлять на email владельца', 'Отправлять на email компании', 'Дублировать на email компании']"
            :selected-value="dropdownValue1" @change-value="dropdownValue1 = $event" />
        </div>

        <div class="flex flex-col gap-[8px]">
          <p class="font-medium font-size-[16px] leading-[20px] text-[#939292]">Типы уведомлений</p>
          <Dropdown is-with-checkbox
            :items="['Все', 'Продление доступа', 'Технические работы', 'Сообщения по интеграциям (Google)', 'Сообщения по интеграциям (AppEvet)', 'Сообщения по интеграциям (Y-clients)', 'Снятие/Публикация площадок', 'Новые отзывы', 'Измененные отзывы', 'Состав обновлений*']"
            :selected-value="dropdownValue2" @change-value="dropdownValue2 = $event"
            :selected-values="selectedValues"
            @change-value-selected="selectedValues.includes($event) ? selectedValues = selectedValues.filter((item) => item !== $event) : selectedValues.push($event)" />
        </div>

        <div class="flex flex-col gap-[8px]">
          <p class="font-medium font-size-[16px] leading-[20px] text-[#939292]">Информационные материалы сервиса</p>
          <Dropdown is-with-checkbox is-with-radio
            :items="['Все', 'Новостные дайджесты', 'Статьи о творческом бизнесе', 'Информация о мероприятиях', 'Объявления о продаже объектов/оборудования', 'Примеры внедрения инструментов сервиса']"
            :selected-value="dropdownValue2" @change-value="dropdownValue2 = $event"
            :selected-values="selectedValues"
            @change-value-selected="selectedValues.includes($event) ? selectedValues = selectedValues.filter((item) => item !== $event) : selectedValues.push($event)"
            @disable-all="selectedValues = []" />
        </div>
      </Block>
    </div>


    <div class="w-[1812px] flex flex-row gap-[20px]">
      <div class="w-[420px] h-[184px]">
        <div class="w-[360px] h-[184px] flex flex-col gap-[16px]">
          <p class="font-medium font-size-[20px] leading-[24px] text-[#000000]">Информация о компании</p>
          <div class="font-normal font-size-[18px] leading-[20px] text-[#939292]">
            <p class="mb-[12px]">Укажите название вашего объекта и к какой сфере он относится</p>
            <p class="mb-[12px]">Загрузите фотографии объекта или площадки.</p>
            <p>Данные материалы будут доступны для просмотра вашим клиентам</p>
          </div>
        </div>
      </div>
      <Block class="w-[440px] h-[444px] flex flex-col gap-[16px] p-[20px]">
        <p class="font-medium font-size-[18px] leading-[20px] text-[#000000]">Общая информация</p>
        <div class="flex flex-row gap-[16px] w-[400px] h-[112px]">
          <div class="flex items-center justify-center bg-[#f5f4f4] rounded-[10px] w-[112px] h-[112px]">
            <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="112" height="112" rx="10" fill="#F5F4F4" />
              <path
                d="M74.3337 62.6667C74.3337 63.5507 73.9825 64.3986 73.3573 65.0237C72.7322 65.6488 71.8844 66 71.0003 66H41.0003C40.1163 66 39.2684 65.6488 38.6433 65.0237C38.0182 64.3986 37.667 63.5507 37.667 62.6667V44.3333C37.667 43.4493 38.0182 42.6014 38.6433 41.9763C39.2684 41.3512 40.1163 41 41.0003 41H47.667L51.0003 36H61.0003L64.3337 41H71.0003C71.8844 41 72.7322 41.3512 73.3573 41.9763C73.9825 42.6014 74.3337 43.4493 74.3337 44.3333V62.6667Z"
                fill="#939292" stroke="#939292" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M55.9997 59.3333C59.6816 59.3333 62.6663 56.3486 62.6663 52.6667C62.6663 48.9848 59.6816 46 55.9997 46C52.3178 46 49.333 48.9848 49.333 52.6667C49.333 56.3486 52.3178 59.3333 55.9997 59.3333Z"
                stroke="#F5F4F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39 61V75" stroke="#F5F4F4" stroke-width="6" stroke-linecap="round" />
              <path d="M32 68H46" stroke="#F5F4F4" stroke-width="6" stroke-linecap="round" />
              <path d="M39 61V75" stroke="#939292" stroke-width="3" stroke-linecap="round" />
              <path d="M32 68H46" stroke="#939292" stroke-width="3" stroke-linecap="round" />
            </svg>
          </div>
          <div class="flex flex-col gap-[16px]">
            <div class="flex flex-col gap-[2px] w-[272px] h-[48px] rounded-[10px] bg-[#f5f4f4] px-[12px] pt-[4px]">
              <p class="font-normal text-[14px] leading-[16px] text-[#939292]">Наименование партнёрской зоны</p>
              <p class="font-normal text-[16px] leading-[20px] text-[#939292]">Зона 1</p>
            </div>
            <Input v-model="values[5].value" title="Публичное название компании"
              placeholder="Введите название компании" />
          </div>
        </div>
        <div class="w-[400px] h-[240px]">
          <Input v-model="values[6].value" title="Описание партнерской зоны" class="h-[240px]" />
        </div>
      </Block>

      <Block class="w-[420px] h-[444px] flex flex-col gap-[16px] p-[20px]">
        <p class="font-medium font-size-[18px] leading-[20px] text-[#000000]">Контакты</p>
        <Input v-model="values[7].value" title="Номер телефона" placeholder="Введите номер телефона" />
        <Input v-model="values[8].value" title="Адрес электронной почты" placeholder="Введите email" />
        <DropdownAsync class="w-[380px] h-[48px]" :items="cities" @select="handleCitySelect" placeholder="Введите город"
          title="Город" />
        <Input v-model="values[9].value" title="Ссылка на сайт организации" placeholder="Введите ссылку" />
        <Input v-model="values[10].value" title="Ссылка на аккаунт VK" placeholder="Введите ссылку" />
        <Input v-model="values[11].value" title="Ссылка на аккаунт Telegramm" placeholder="Введите ссылку" />
      </Block>

      <Block class="w-[420px] h-[252px] flex flex-col p-[20px] gap-[16px]">
        <p class="font-medium font-size-[18px] leading-[20px] text-[#000000]">Закрепленный менеджер</p>
        <div class="flex flex-col gap-[2px] w-[380px] h-[48px] rounded-[10px] bg-[#f5f4f4]">
          <p class="font-normal text-[14px] leading-[16px] ml-[12px] mt-[4px] text-[#939292]">Фамилия Имя Отчесто</p>
          <p class="font-normal text-[16px] leading-[20px] ml-[12px] md-[6px] text-[#939292]">Сидоров Василий Петрович
          </p>
        </div>

        <div class="flex flex-col gap-[2px] w-[380px] h-[48px] rounded-[10px] bg-[#f5f4f4]">
          <p class="font-normal text-[14px] leading-[16px] ml-[12px] mt-[4px] text-[#939292]">Номер телефона</p>
          <p class="font-normal text-[16px] leading-[20px] ml-[12px] md-[6px] text-[#939292]">+7 900 000-00-00</p>
        </div>
        <div class="flex flex-col gap-[2px] w-[380px] h-[48px] rounded-[10px] bg-[#f5f4f4]">
          <p class="font-normal text-[14px] leading-[16px] ml-[12px] mt-[4px] text-[#939292]">Адрес электронной почты
          </p>
          <p class="font-normal text-[16px] leading-[20px] ml-[12px] md-[6px] text-[#939292]">mail@mail.ru</p>
        </div>
      </Block>
    </div>


    <div class="w-[1812px] flex flex-row gap-[20px]">
      <div class="w-[420px] h-[184px]">
        <div class="w-[360px] h-[184px] flex flex-col gap-[16px]">
          <p class="font-medium font-size-[20px] leading-[24px] text-[#000000]">Данные организации</p>
          <div class="font-normal font-size-[18px] leading-[20px] text-[#939292]">
            <p class="mb-[12px]">Укажите название вашего объекта и к какой сфере он относится</p>
            <p class="mb-[12px]">Загрузите фотографии объекта или площадки.</p>
            <p>Данные материалы будут доступны для просмотра вашим клиентам</p>
          </div>
        </div>
      </div>
      <Block class="w-[440px] h-[168px] flex flex-col gap-[16px] p-[20px]">
        <p class="font-medium font-size-[18px] leading-[20px] text-[#000000]">Тип компании</p>
        <Radio
          :items="['Самозанятый/физическое лицо', 'Индивидуальный предприниматель', 'Юридическое лицо (ООО)']"
          :isWithRadio="true"
          :selectedValues="selectedValues"
          @changeValueSelected="handleRadioChange"
        />
      </Block>


      <div class="w-[420px]  flex flex-col gap-[20px]">
        <Block class="flex flex-col gap-[16px] w-[420px] h-[124px] rounded-[10px] bg-[#f5f4f4]">
          <p class="font-medium font-size-[18px] leading-[20px]">Основная информация</p>
          <div class="bg-[#F5F4F4] rounded-[10px] w-[380px] h-[48px]">
            <p class="font-medium text-[16px] leading-[20px] mx-[12px] mt-[13px] mb-[15px] text-[#939292]">ИНН</p>
          </div>
        </Block>

        <Block class="flex flex-col gap-[16px] w-[420px] pb-[20px] rounded-[10px] bg-[#f5f4f4]">
          <p class="font-medium text-[18px] leading-[20px]">Адрес</p>
          <Check is-with-checkbox 
          :items="['Фактический адрес совпадает с юридическим', 'Почтовый адрес совпадает с юридическим']"
          :selected-values="checkSelectedValues"
          @change-value-selected="checkSelectedValues.includes($event) ? checkSelectedValues = checkSelectedValues.filter((item) => item !== $event) : checkSelectedValues.push($event)"
           />
        </Block>
      </div>


      <div class="w-[420px]  flex flex-col gap-[20px]">
        <Block class="flex flex-col gap-[16px] w-[420px] h-[188px] rounded-[10px] bg-[#f5f4f4]">
          <p class="font-medium font-size-[18px] leading-[20px] text-[#000000]">Банковские реквизиты</p>
          <div class="flex flex-col gap-[16px]">
            <div class="bg-[#F5F4F4] rounded-[10px] w-[380px] h-[48px]">
              <p class="font-medium text-[16px] leading-[20px] mx-[12px] mt-[13px] mb-[15px] text-[#939292]">БИК</p>
            </div>
            <div class="bg-[#F5F4F4] rounded-[10px] w-[380px] h-[48px]">
              <p class="font-medium text-[16px] leading-[20px] mx-[12px] mt-[13px] mb-[15px] text-[#939292]">Рассчетный
                счет</p>
            </div>
          </div>
        </Block>

        <Block class="flex flex-col gap-[16px] w-[420px] h-[96px] rounded-[10px] bg-[#f5f4f4]">
          <p class="font-medium font-medium font-size-[18px] leading-[20px] text-[#000000]">Электронный документ</p>
          <Check is-with-checkbox :selected-values="checkSelectedValues"
            @change-value-selected="checkSelectedValues.includes($event) ? checkSelectedValues = checkSelectedValues.filter((item) => item !== $event) : checkSelectedValues.push($event)"
            :items="['Есть электронный документ']" />
        </Block>

        <Block class="flex flex-col gap-[16px] w-[420px] h-[96px] rounded-[10px] bg-[#f5f4f4]">
          <p class="font-medium font-medium font-size-[18px] leading-[20px] text-[#000000]">Система налогообложения</p>
          <Check is-with-checkbox :selected-values="checkSelectedValues"
            @change-value-selected="checkSelectedValues.includes($event) ? checkSelectedValues = checkSelectedValues.filter((item) => item !== $event) : checkSelectedValues.push($event)"
            :items="['Указать систему налогообложения']" />
        </Block>
      </div>
    </div>
    <Button class="absolute bottom-[80px] right-[52px] w-[420px] h-[48px]" buttonText="Сохранить" />
  </div>

</template>