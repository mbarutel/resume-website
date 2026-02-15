<template>
  <div class="w-92 shrink-0 p-10 border-r my-6 flex flex-col gap-6">
    <ProfilePicture />
    <Header />
    <PersonalDetails />
    <Tabs />
    <RelevantSkills />
  </div>
</template>

<
<script setup lang="ts">
import Header from "./sidebar/Header.vue";
import ProfilePicture from "./sidebar/ProfilePicture.vue";
import Tabs from "./sidebar/Tabs.vue";
import PersonalDetails from "./sidebar/PersonalDetails.vue";
import RelevantSkills from "./sidebar/RelevantSkills.vue";
</script>
