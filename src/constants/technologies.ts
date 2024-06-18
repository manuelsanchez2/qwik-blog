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
    },
    html: {
      id: 2,
      name: "HTML",
      primaryColor: "#f3cab9",
      secondaryColor: "#e34f26",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: HTML,
    },
    css: {
      id: 3,
      name: "CSS",
      primaryColor: "#e5eefa",
      secondaryColor: "#2f73bf",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: CSS,
    },
    qwik: {
      id: 4,
      name: "Qwik",
      primaryColor: "#ebe2fb",
      secondaryColor: "#ac7ef4",
      tagClasses:
        "bg-blogPurplePrimary border-blogPurpleDark text-blogPurpleDark",
      icon: Qwik,
    },
    react: {
      id: 5,
      name: "React",
      primaryColor: "#ebfaff",
      secondaryColor: "#61dafb",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: React,
    },
    git: {
      id: 6,
      name: "Git",
      primaryColor: "#f3cab9",
      secondaryColor: "#e34f26",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: Git,
    },
    typescript: {
      id: 7,
      name: "TypeScript",
      primaryColor: "#e5eefa",
      secondaryColor: "#2f73bf",
      tagClasses:
        "bg-blogTurquoisePrimary border-blogTurquoiseDark text-blogTurquoiseDark",
      icon: TypeScript,
    },
    performance: {
      id: 8,
      name: "Performance",
      primaryColor: "#fffad7",
      secondaryColor: "#ffcc18",
      tagClasses:
        "bg-blogYellowPrimary border-blogYellowDark text-blogYellowDark",
      icon: Performance,
    },
  },
];

export const getTechnologyByKey = (key: string) => {
  // @ts-ignore
  return technologies[0][key];
};
