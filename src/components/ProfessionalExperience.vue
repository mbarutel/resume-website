<template>
  <div>
    <h1 class="section_header">Professional Experience</h1>
    <div class="flex flex-col gap-6">
      <div
        v-for="experience in experiences"
        :key="experience.company"
        class="gap-y-4 border-b pb-4"
      >
        <div class="flex flex-col font-semibold text-lg underline">
          <span> {{ experience.company }} </span>
        </div>

        <div
          v-for="position in experience.positions"
          :key="position.title"
          class="py-2"
        >
          <div class="flex justify-between">
            <div class="flex flex-col mb-3">
              <span class="font-semibold text-sm">{{ position.title }} </span>
              <small class="italic">
                {{ position.location }}
              </small>
            </div>
            <small>
              {{ position.timeline }}
            </small>
          </div>
          <div
            class="flex flex-col text-sm font-light italic ml-auto text-right"
          ></div>
          <ul class="col-span-2 text-xs">
            <li
              v-for="reponsibility in position.responsibilities"
              :key="reponsibility"
              class="list-disc list-inside"
            >
              {{ reponsibility }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Experience {
  company: string;
  positions: Position[];
}

interface Position {
  title: string;
  timeline: string;
  location: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "SteelX",
    positions: [
      {
        title: "Full-Stack Developer",
        timeline: "March 2024 - Present",
        location: "Gold Coast, Australia",
        responsibilities: [
          "Fixing bugs and implementing new features",
          "Collaborating with engineers and designers during projects",
          "Deployment of the system during releases",
        ],
      },
    ],
  },
  {
    company: "Swappie Oy",
    positions: [
      {
        title: "Operations Department Manager",
        timeline: "May 2021 - July 2021",
        location: "Tallinn, Estonia",
        responsibilities: [
          "Building the logistics department from scratch in a new factory",
          "Building the infrastructure for the department in relation to hardware and software",
          "Building the team and training them",
          "By the end of the project, the departmen was fully operational and was fufilling 2000 orders a day",
        ],
      },
      {
        title: "Operations Team Lead",
        timeline: "June 2020 - May 2021",
        location: "Helsinki, Finland",
        responsibilities: [
          "Logistics team leader of the logistic department",
          "Interviewing potential team members and onboarding them",
          "Collaborating with other team leader to ensure smooth operations for our department and that KPI's are met",
        ],
      },
      {
        title: "Production Specialist",
        timeline: "January 2020 - June 2020",
        location: "Helsinki, Finland",
        responsibilities: [
          "Fixing iPhones such as battery replacements, screen replacements, and more.",
          "Quality Control to ensure that iPhone are at an acceptable quality for purchase.",
          "Packing product orders.",
        ],
      },
    ],
  },
  {
    company: "K-Market",
    positions: [
      {
        title: "Store Clerk",
        timeline: "February 2018 - December 2019",
        location: "Helsinki, Finland",
        responsibilities: [
          "Ensuring that the store was in presentable state",
          "Helping customer with their shopping needs and operating the register",
          "Replinishing stock and variety of different responsibilies in the shop",
        ],
      },
    ],
  },
  {
    company: "Swissport",
    positions: [
      {
        title: "Customer Service Trainer",
        timeline: "January 2017 - December 2018",
        location: "Brisbane, Australia",
        responsibilities: [
          "Onboarding team members on company standard operating procedures",
          "Training team members on a variety of check-in systems",
          "Acting Shift Manager when required",
        ],
      },
    ],
  },
];
</script>
