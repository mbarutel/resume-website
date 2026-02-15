<template>
  <aside class="flex flex-col gap-1">
    <hr class="mb-4" />
    <button
      v-for="tab in tabs"
      :key="tab.name"
      :class="
        isActive(tab.name)
          ? 'bg-gray-300'
          : 'hover:bg-gray-100 hover:text-gray-900'
      "
      class="pl-2 py-2 rounded-sm transition-colors w-full text-left text-sm flex items-center gap-1.5"
      @click="setTab(tab.name)"
    >
      <i v-if="isActive(tab.name)" class="pi pi-angle-right" />
      {{ tab.name }}
    </button>
    <hr class="mt-4" />
  </aside>
</template>

<script setup lang="ts">
import { useActiveTab } from "@/composables/useActiveTab";

const { tabs, isActive, setTab } = useActiveTab();
</script>
