import type { HomePageData } from "../types/homePageData";

export const homePageData: HomePageData = {
  experiments: {
    description:
      "Just some stuff I've been messing around with in my free time recently.",
    items: [
      {
        title: "Tatem's scroll animations",
        description: `Recreating some beautiful animations on the Tatem website.`,
        link: "/experiments/tatem",
        external: true,
      },
      {
        title: "A Digital Assistant",
        description: `A digital assistant built into a personal knowledge management system. 
                Something I've been thinking about for a while. Think Samantha from the movie Her.
                Will eventually get around to actually building it completely.`,
        link: "https://noto.prakharnagpal.com",
        external: true,
      },
      {
        title: "RegexVis",
        description: `A tool for visualising the various stages of regex execution within a regex engine, 
                including the NFA, AST, and Execution.`,
        link: "https://regex.vis.prakharnagpal.com",
        external: true,
      },
    ],
  },
  projects: {
    description: "Here's some of the projects I'm working on/have worked on.",
    items: [
      {
        title: "Plox",
        description: `The Lox programming language (from the book "Crafting Interpreters") 
                implemented using features from <code>python@3.13</code>.
                Mostly the generics, and type annotations that are so much nicer in the latest version.`,
        link: "https://github.com/slightlybelowzen/plox",
        external: true,
      },
      {
        title: "EEG Controlled Wheelchair",
        description: `As part of the Neurotech society at Imperial I'm working on a Level 2 self-driving wheelchair 
                (SLAM algorithm) that can be controlled via an EEG headset worn by the rider.`,
        link: "https://github.com/ICL-Neurotech/",
        external: true,
      },
      {
        title: "Advent of Code 2024",
        description: `Learning Rust by solving Advent of Code 2024 in it.`,
        link: "/projects/aoc24",
        external: false,
      },
    ],
  },
  writing: {
    description: `I write infrequently. I'm working on it, I promise. 
		For now, here's some stuff I've written in the past.`,
    items: [
      {
        title: "Learning about design as an engineer",
        description: `A few thoughts on how I approach design, and how reading 
				"The Design of Everyday Things" has changed the way I think about it.`,
        link: "/writing/design-of-everyday-things",
        external: false,
      },
      {
        title: `Finding purpose in strange places`,
        description: `I recently found direction and strong purpose for my life, 
				and it came from <i>attending a society meeting at university</i>. 
				A bit of a longer one this one`,
        link: "/writing/purpose-in-life",
        external: false,
      },
    ],
  },
  "everything else": {
    description: `Photos, links, short notes, things I use everyday, places I draw inspiration from.`,
    items: [
      {
        title: "Photos",
        description: `Some of my favorite photos since I've moved to London. Trying to be more regular with this habit.
        Really helps me see the city in a way that I might not otherwise.`,
        link: "/photos",
        external: false,
      },
      {
        title: "Dump",
        description: `My favorite spots on the internet. Basically a giant bookmark room, and the basis of the idea
        for the personal digital assistant I'm working on. All of us have one of these that `,
        link: "/dump",
        external: false,
      },
    ],
  },
};
