import { ref, computed } from "vue";
import type { Component } from "vue";
import AboutMe from "../components/AboutMe.vue";
import ProfessionalExperience from "../components/ProfessionalExperience.vue";
import EducationalBackground from "../components/EducationalBackground.vue";
import PersonalProjects from "../components/PersonalProjects.vue";

interface Tab {
  name: string
  component: Component
}

const tabs: readonly Tab[] = [
  { name: "About Me", component: AboutMe },
  { name: "Professional Experience", component: ProfessionalExperience },
  { name: "Educational Background", component: EducationalBackground },
  { name: "Personal Projects", component: PersonalProjects },
];

const currentTab = ref<string>("About Me");

const currentComponent = computed<Component | undefined>(
  () => tabs.find((t) => t.name == currentTab.value)?.component,
);

export function useActiveTab() {
  const setTab = (name: string): void => {
    currentTab.value = name
  }

  const isActive = (name: string): boolean => {
    return currentTab.value === name;
  }

  return { tabs, currentTab, currentComponent, setTab, isActive }
}
