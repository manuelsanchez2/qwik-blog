import {
  JavaScript,
  CSS,
  HTML,
  React,
  Qwik,
  Performance,
  TypeScript,
  Git,
} from "~/components/icons/icons";

export const technologies = [
  {
    javascript: {
      id: 1,
      name: "JavaScript",
      primaryColor: "#fffad7",
      secondaryColor: "#ffcc18",
      tagClasses:
        "bg-blogYellowPrimary border-blogYellowDark text-blogYellowDark",
      icon: JavaScript,
      color: "yellow",
    },
    html: {
      id: 2,
      name: "HTML",
      primaryColor: "#f3cab9",
      secondaryColor: "#e34f26",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: HTML,
      color: "orange",
    },
    css: {
      id: 3,
      name: "CSS",
      primaryColor: "#e5eefa",
      secondaryColor: "#2f73bf",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: CSS,
      color: "blue",
    },
    qwik: {
      id: 4,
      name: "Qwik",
      primaryColor: "#ebe2fb",
      secondaryColor: "#ac7ef4",
      tagClasses:
        "bg-blogPurplePrimary border-blogPurpleDark text-blogPurpleDark",
      icon: Qwik,
      color: "purple",
    },
    react: {
      id: 5,
      name: "React",
      primaryColor: "#ebfaff",
      secondaryColor: "#61dafb",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: React,
      color: "turquoise",
    },
    git: {
      id: 6,
      name: "Git",
      primaryColor: "#f3cab9",
      secondaryColor: "#e34f26",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: Git,
      color: "orange",
    },
    typescript: {
      id: 7,
      name: "TypeScript",
      primaryColor: "#e5eefa",
      secondaryColor: "#2f73bf",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: TypeScript,
      color: "blue",
    },
    performance: {
      id: 8,
      name: "Performance",
      primaryColor: "#fffad7",
      secondaryColor: "#ffcc18",
      tagClasses:
        "bg-blogYellowPrimary border-blogYellowDark text-blogYellowDark",
      icon: Performance,
      color: "yellow",
    },
  },
];

export const getTechnologyByKey = (key: string) => {
  // @ts-ignore
  return technologies[0][key];
};
