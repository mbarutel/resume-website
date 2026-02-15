<template>
  <div>
    <h1 class="section_header">Personal Projects</h1>
    <div class="mb-10">
      <h3 class="sidebar_header">Freelance Projects</h3>
      <div class="grid grid-cols-2 gap-12">
        <div
          v-for="project in freelanceProjects"
          :key="project.title"
          class="flex flex-col"
        >
          <a :href="project.link" target="_blank" rel="noopenner noreferrer">
            <div
              v-if="project.image != null"
              class="w-full xl:h-40 h-32 rounded-sm relative overflow-hidden"
            >
              <img :src="project.image" :alt="project.title" />
            </div>
          </a>
          <h5 class="text-sm text-center mb-auto mt-2 uppercase">
            {{ project.title }}
          </h5>
          <hr class="my-1.5" />
          <div class="tag_wrapper mt-2">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sidebar_header">School Projects</h3>
      <div v-for="project in schoolProjects" :key="project.title" class="">
        <div class="text-sm font-semibold">
          <a :href="project.link" target="_blank" rel="noopenner noreferrer">
            <li class="pi pi-external-link text-xs" />
          </a>
          {{ project.title }}
        </div>
        <p v-if="project.description != null" class="text-xs">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string;
  link: string;
  description: string | null;
  tags: string[];
  image: string | null;
}

const schoolProjects: Project[] = [
  {
    title: "libft",
    link: "https://github.com/mbarutel/libft",
    description:
      "Personal library of standard library functions that is then used for subsequent projects.",
    tags: ["C"],
    image: null,
  },
  {
    title: "fillit",
    link: "https://github.com/mbarutel/fillit-mbarutel",
    description:
      "Program that reads a file containing a list of tetris shapes in the form of 2D arrays and returns a solution that places the shape together whilst using the least amount of space.",
    tags: ["C"],
    image: null,
  },
  {
    title: "ft_printf",
    link: "https://github.com/mbarutel/ft_printf",
    description: "Recreated the C function `printf`.",
    tags: ["C"],
    image: null,
  },
  {
    title: "ft_ls",
    link: "https://github.com/mbarutel/ft_ls",
    description: "Recreated the system binary `ls`.",
    tags: ["C"],
    image: null,
  },
  {
    title: "minishell",
    link: "https://github.com/mbarutel/minishell",
    description:
      "Simple shell program that takes in commands from the STDIN, parses them, and forks new processes if the command is a system binary.",
    tags: ["C"],
    image: null,
  },
  {
    title: "21sh",
    link: "https://github.com/mbarutel/21sh",
    description:
      "A more comprehensive version of minishell, incorporating terminal control, pipes, and file redirection.",
    tags: ["C"],
    image: null,
  },
  {
    title: "42sh",
    link: "https://github.com/maxrantil/42sh",
    description:
      "Enhanced version of 21sh with additional features such as process controls, logical operators, reverse history search, & more ",
    tags: ["C"],
    image: null,
  },
];

const freelanceProjects: Project[] = [
  {
    title: "International Conference Services",
    link: "https://icsconferences.org/",
    description: null,
    tags: ["Next.js", "React", "Typescript", "Contentful"],
    image: "/ics-project.webp",
  },
  {
    title: "A Studio Hair Studio",
    link: "https://astudiolarnaca.com/",
    description: null,
    tags: ["Next.js", "React", "Typescript", "Contentful"],
    image: "/astudio-project.webp",
  },
  {
    title: "Cruisers Beach Resort",
    link: "https://ics-cruisersbeachresort.org/",
    description: null,
    tags: ["Nuxt.js", "Vue.js", "Typescript"],
    image: "/cruisers-project.webp",
  },
  {
    title: "Tawfik Executive Coaching & Consulting",
    link: "https://www.tawfikecc.com.au/",
    description: null,
    tags: ["Next.js", "React", "Typescript"],
    image: "/tawfik-project.webp",
  },
];
</script>
