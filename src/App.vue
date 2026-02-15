<template>
  <main class="min-h-screen bg-gray-100">
    <section class="p-25">
      <div
        class="container max-w-6xl mx-auto border border-gray-400 rounded-md flex bg-white"
      >
        <SideBar />
        <KeepAlive>
          <div class="my-16 mx-8">
            <component :is="currentComponent" />
          </div>
        </KeepAlive>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import { useActiveTab } from "./composables/useActiveTab";

const { currentComponent } = useActiveTab();
</script>
