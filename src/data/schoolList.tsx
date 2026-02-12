import type { School } from "../types/School.tsx";

// This will be a database call in the future
export const schoolList: School[] = [
  {
    name: "Arizona State University",
    degreeType: "Master of Science",
    degreeName: "Computer Science",
    minor: "",
    location: "Remote",
    descriptions: [
      "Completed via online classes while working full time at RTX.",
      "Classes included security, AI learning patterns, algorithms, leadership and management.",
    ],
    startDate: "05/2020",
    endDate: "08/2023",
    latitude: 33.42299747340579,
    longitude: -111.92785206098813,
  },
  {
    name: "Idaho State University",
    degreeType: "Bachelor of Science",
    degreeName: "Computer Science",
    minor: "",
    location: "Pocatello, ID",
    descriptions: [
      "Completed in one year using credit from my prior minor in computer science.",
      "Coursework focused on Java and C++ development, as well as algorithms and security.",
      "Google igniteCS volunteer, introducing high school students to coding via Scratch.",
    ],
    startDate: "03/2020",
    endDate: "02/2025",
    latitude: 42.86293291401889,
    longitude: -112.42972983209806,
  },
  {
    name: "Colorado School of Mines",
    degreeType: "Bachelor of Science",
    degreeName: "Geophysical Engineering",
    minor: "Computer Science",
    location: "Golden, CO",
    descriptions: [
      "Geophysical Engineering involves a large amount of data processing, manipulated large data sets to determine the geography of subsurface locations.",
      "Minored in computer Science as it shared several core classes and was of interest to me.",
      "Completed numerous advanced math and physics courses, as well as geospatial analysis and imaging.",
    ],
    startDate: "06/2018",
    endDate: "03/2020",
    latitude: 39.751030974252416,
    longitude: -105.22259226077057,
  },
];
