<script setup>
</script>

<template>
  <div class="bg-[#f6f7f8] min-h-screen overflow-auto font-sans">
    <Header />
    <main class="pt-[84px]">
      <slot />
    </main>
    <Sidebar />
  </div>

</template>