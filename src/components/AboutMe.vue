<template>
  <div class="text-sm mb-8">
    <h1 class="section_header">About Me</h1>
    <p>
      I am a full-stack software developer with a background in Aviation
      Management and professional leadership experience as a Department Team
      Leader. Driven by my passion for programming, I transitioned into software
      development by graduating from Hive Helsinki, where I gained strong
      foundations in low-level programming and modern software engineering.
    </p>
    <p>
      Since then, I have dedicated myself to building robust, maintainable, and
      scalable applications. I enjoy creating simple, elegant, modular code and
      continuously improving projects through new ideas and better solutions. I
      thrive on exploring new technologies, solving complex problems, optimizing
      workflows, and collaborating with motivated team members.
    </p>
    <p>
      Outside of coding, I enjoy spending time with my family (especially our
      dog), going on roadtrips, martial arts, and talking about coding projects.
      I am super friendly and have been told by many of previous co-workers that
      they have really enjoyed working with me due to my funny personality and
      fun attitude.
    </p>
  </div>
  <div>
    <h2 class="text-xl mb-2">My Hobbies & Interests</h2>
    <div
      v-for="interest in interests"
      :key="interest.name"
      class="py-2 border-b text-sm"
    >
      <h3 class="font-semibold">{{ interest.name }}</h3>
      <h6 class="italic mb-3 text-xs">
        Since {{ timeAgo(interest.startDate) }}
      </h6>
      <p>{{ interest.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Interest {
  name: string;
  description: string;
  startDate: Date;
}

const interests: Interest[] = [
  {
    name: "Linux Operating System",
    description:
      "I am a strong advocate for linux as I have been a user for multiple years now. Part of why I started software development was due to my interest in computers, and linux scratches that itch for me. I enjoy playing around with different setups and manipulating the system exactly to my liking. I also enjoy finding new tools that helps me with my day to day. The flexibility that linux provides has propelled me on my personal projects and whatever task that I do on a computer.",
    startDate: new Date("2023-03-01"),
  },
  {
    name: "Filipino Martial Arts",
    description:
      "As much I love programming, the fact that it requires very little body movement means that it's not the healthiest profession to get into. Thus, I wanted to find another activity that is both mentally and physically stimulating, and I luckily found FMA. This is something that I do in a weekly bases where I learn from my trainer and also teach students. It is a skill that I am continuously developing and will do for the rest of my life. We work on both with weapons and without, and the weapons can vary from sticks and knives.",
    startDate: new Date("2024-08-01"),
  },
  {
    name: "Algorithmic Trading",
    description:
      "On my spare time, I dable in learning more about implementing strategies algorithmically with QuantConnect. With my experience in Linux, I have succesfully started the QuantConnect engine on a remote server where it is trading (paper trading at the time of writing this), some strategies that I dabbled in implementing.",
    startDate: new Date("2026-01-01"),
  },
];

const timeAgo = (date: Date): string => {
  const from = new Date(date);
  const to = new Date();

  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts = [];

  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  if (days > 0 && years === 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);

  return parts.length ? parts.join(" and ") : "today";
};
</script>
