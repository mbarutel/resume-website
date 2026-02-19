<template>
  <div>
    <h1 class="section_header">Educational Background</h1>
    <div class="flex flex-col gap-6">
      <div
        v-for="education in educations"
        :key="education.institution"
        class="grid grid-cols-2 gap-y-4 border-b pb-4"
      >
        <div class="flex flex-col">
          <span class="font-semibold underline">
            {{ education.institution }}
          </span>
          <span class="text-sm italic">
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
        <p v-if="education.description != null" class="col-span-2 text-sm">
          {{ education.description }}
        </p>
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
  description: string | null;
}

const educations: Education[] = [
  {
    institution: "Hive Helsinki",
    level: "Certificate Of Completion",
    timeline: "2022 - 2023",
    location: "Helsinki, Finland",
    description:
      "Despite my path of becoming a Software Developer not being a traditional one of completing a degree from University, I am still equiped to excel in any role, as Hive Helsinki have provided me with all the necesssary skills. We conducted our projects without support of any teachers, teaching us independence and resourcefulness. We reviewed each other's code, teaching us attention to detail. Finally, our project were all written in C, teaching us the low level understanding of how a program requires the computer's resources, and to be act mindful when building our programs.",
  },
  {
    institution: "Software Development Academy",
    level: "Certification Of Completion",
    timeline: "2020 - 2021",
    location: "Helsinki, Finland",
    description:
      "This has been a bootcamp that have given me exposure to the world of Software Development, although, it did not prove to be adequate in providing me all the necesssary skills to be employable.",
  },
  {
    institution: "Basair Flight School (Part of the Aviation Degree)",
    level: "Recreational Pilot License",
    timeline: "2017 - 2017",
    location: "Brisbane, Australia",
    description:
      "As part of the Bachelor Degree of Aviation Management, it was a requirement to undergo flight training, and mine was conducted at Basair School in Archerfield Airport, Brisbane. This time has really taught me to be effecient with my time and stress management, and to have an effective workflow when operating an aircraft. Lessons that are still applicable to me in Software Development.",
  },
  {
    institution: "Sophia Antipolis (Exchange Program)",
    level: "Bachelor of Aviation Management",
    timeline: "2016 - 2016",
    location: "Antibes, France",
    description:
      "I took the opportunity to study abroad during my university years, exposing myself to different culture and way of living. This time has proven to be fruitful as it equipped me better when later on in life I decided to move to Finland for an unforeseen 5 years of my life.",
  },
  {
    institution: "Griffith University",
    level: "Bachelor of Aviation Management",
    timeline: "2014 - 2018",
    location: "Brisbane, Australia",
    description:
      "Although I did not progress to have a career in Aviation, I still find it extremely valuable to have gained my Bachelor's Degree in Aviation. I have learnt a little bit about Business, Law, Science and much more that have proven to be useful in my day to day as a software developer.",
  },
  {
    institution: "Urangan State Highschool",
    level: "Secondary Education",
    timeline: "2010 - 2013",
    location: "Hervey Bay, Australia",
    description: null,
  },
  {
    institution: "Bundaberg State Highschool",
    level: "Secondary Education",
    timeline: "2010 - 2013",
    location: "Hervey Bay, Australia",
    description: null,
  },
  {
    institution: "Phuket International School",
    level: "Secondary Education",
    timeline: "2010 - 2013",
    location: "Phuket, Thailand",
    description: null,
  },
];
</script>
