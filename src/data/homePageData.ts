import type { HomePageData } from "../types/homePageData";

export const homePageData: HomePageData = {
  experiments: {
    description:
      "Just some stuff I've been messing around with in my free time recently.",
    items: [
      {
        title: "Tatem's scroll animations",
        description: `Recreating some beautiful animations on the Tatem website.`,
        link: "/experiments/tatem-animations",
        external: false,
      },
      {
        title: "A Digital Assistant",
        description: `A digital assistant built into a personal knowledge management system. Think Samantha from the movie Her.`,
        link: "/experiments/digital-assistant",
        external: false,
      },
      {
        title: "Regex Visualiser",
        description: `Building a regex engine while visualising all the stages of regex matching.`,
        link: "/experiments/regex-visualiser",
        external: false,
      },
    ],
  },
  projects: {
    description: "Here's some of the projects I'm working on/have worked on.",
    items: [
      {
        title: "Plox",
        description: `The Lox programming language (from the book "Crafting Interpreters") in <code>python@3.13</code>.`,
        link: "/projects/plox",
        external: false,
      },
      {
        title: "Advent of Code 2024",
        description: `Learning Rust by solving Advent of Code, 2024 in it.`,
        link: "/projects/aoc24",
        external: false,
      },
      {
        title: "EEG Controlled Wheelchair",
        description: `As part of the Neurotech society at Imperial I'm working on a Level 2 self-driving wheelchair
        that is controlled via an EEG headset worn by the user.`,
        link: "/projects/eeg-wheelchair",
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
        description: `How reading "The Design of Everyday Things" has changed the way I think about design.`,
        link: "/writing/design-of-everyday-things",
        external: false,
      },
      {
        title: `Finding purpose in strange places`,
        description: `A longer piece about finding purpose in strange places.
        Quite personal, and something I'm quite proud of sharing.`,
        link: "/writing/purpose-in-life",
        external: false,
      },
    ],
  },
  "everything else": {
    description: `Photos, links, favorite artists, recipes, short notes,
    things I use everyday, places I draw inspiration from.`,
    items: [
      {
        title: "Photos",
        description: `My favorite photos. Trying to be more regular,
        helps me see the city in a completely different way.`,
        link: "/photos",
        external: false,
      },
      {
        title: "Dump",
        description: `My favorite spots on the internet. Basically a giant bookmark dump.`,
        link: "/dump",
        external: false,
      },
      {
        title: "Music",
        description: `Some of my favorite artists and bands. Also a list of vinyls I own/would love to own someday.`,
        link: "/dump/music",
        external: false,
      },
    ],
  },
};
