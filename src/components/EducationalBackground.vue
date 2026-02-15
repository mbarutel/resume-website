<template>
  <div>
    <h1 class="section_header">Educational Background</h1>
    <div class="flex flex-col gap-6">
      <div
        v-for="education in educations"
        :key="education.institution"
        class="grid grid-cols-2 gap-y-4 border-b pb-4"
      >
        <div class="flex flex-col font-semibold">
          <span>
            {{ education.institution }}
          </span>
          <span class="text-sm">
            {{ education.level }}
          </span>
        </div>
        <div class="flex flex-col text-sm font-light italic ml-auto text-right">
          <span>
            {{ education.timeline }}
          </span>
          <span>
            {{ education.location }}
          </span>
        </div>
        <ul class="col-span-2 text-sm">
          <li
            v-for="description in education.descriptions"
            :key="description"
            class="list-disc list-inside"
          >
            {{ description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Education {
  institution: string;
  level: string;
  timeline: string;
  location: string;
  descriptions: string[];
}

const educations: Education[] = [
  {
    institution: "Hive Helsinki",
    level: "Certification",
    timeline: "2022 - 2023",
    location: "Helsinki, Finland",
    descriptions: [],
  },
  {
    institution: "Software Development Academy",
    level: "Certification",
    timeline: "2020 - 2021",
    location: "Helsinki, Finland",
    descriptions: [],
  },
  {
    institution: "Basair Flight School (Part of the Aviation Degree)",
    level: "Recreational Pilot License",
    timeline: "2017 - 2017",
    location: "Brisbane, Australia",
    descriptions: [],
  },
  {
    institution: "Sophia Antipolis (Exchange Program)",
    level: "Bachelor of Aviation Management",
    timeline: "2016 - 2016",
    location: "France, Australia",
    descriptions: [],
  },
  {
    institution: "Griffith University",
    level: "Bachelor of Aviation Management",
    timeline: "2014 - 2018",
    location: "Brisbane, Australia",
    descriptions: [],
  },
  {
    institution: "Urangan State Highschool",
    level: "Secondary Education",
    timeline: "2010 - 2013",
    location: "Hervey Bay, Australia",
    descriptions: [],
  },
  {
    institution: "Bundaberg State Highschool",
    level: "Secondary Education",
    timeline: "2010 - 2013",
    location: "Hervey Bay, Australia",
    descriptions: [],
  },
  {
    institution: "Phuket International School",
    level: "Secondary Education",
    timeline: "2010 - 2013",
    location: "Phuket, Thailand",
    descriptions: [],
  },
];
</script>
