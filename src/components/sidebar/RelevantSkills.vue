<template>
  <div>
    <h3 class="sidebar_header">Relevant Skills</h3>
    <div v-for="section in skills" :key="section.label">
      <h4 class="mb-2 mt-4 text-sm">{{ section.label }}</h4>
      <div class="tag_wrapper">
        <span v-for="item in section.items" :key="item" class="tag">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SkillSection {
  label: string;
  items: string[];
}

const skills: SkillSection[] = [
  {
    label: "Languages",
    items: ["C", "C#", "Golang", "Typescript", "Shell Script", "Python"],
  },
  {
    label: "Tools",
    items: [
      "Linux",
      "Windows",
      "Git",
      "VsCode",
      "VsStudio",
      "Nvim",
      "Docker",
      "Figma",
    ],
  },
  {
    label: "Frameworks",
    items: [".NET", "Vue.js", "React", "Next.js", "Nuxt.js", "Laravel"],
  },
];
</script>
