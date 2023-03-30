import swift from "images/technologies/swift.svg";
import figma from "images/technologies/figma.svg";
import html from "images/technologies/html.svg";
import scss from "images/technologies/sass.svg";
import angular from "images/technologies/angular.svg";
import node from "images/technologies/node.svg";
import react from "images/technologies/react.svg";
import firebase from "images/technologies/firebase.svg";
import java from "images/technologies/java.svg";
import js from "images/technologies/js.svg";
import ts from "images/technologies/ts.svg";
import vue from "images/technologies/vue.svg";
import kotlin from "images/technologies/kotlin.svg";
import mysql from "images/technologies/mysql.svg";
import nest from "images/technologies/nest.svg";
import docker from "images/technologies/docker.svg";
import { useTranslation } from "next-i18next";

export interface TextObject {
  firstPage: {
    one: string;
    two: string;
    three: string;
  };
  secondPage: {
    one: string;
    two: string;
    three: string;
  };
  thirdPage: {
    one: string;
    two: string;
    three: string;
  };
  fourthPage: {
    one: string;
    two: string;
    three: string;
  };
}

export const TextFunction = () => {
  const { t } = useTranslation("technologies");
  return [
    {
      img: swift,
      title: "Swift",
      description: t("swift"),
    },
    {
      img: figma,
      title: "Figma",
      description: t("figma"),
    },
    {
      img: vue,
      title: "Vue",
      description: t("vue"),
    },
    {
      img: ts,
      title: "TypeScript",
      description: t("ts"),
    },
    {
      img: react,
      title: "React.js",
      description: t("react"),
    },
    {
      img: node,
      title: "Node.js",
      description: t("node"),
    },
    {
      img: js,
      title: "JavaScript",
      description: t("js"),
    },
    {
      img: firebase,
      title: "Firebase",
      description: t("firebase"),
    },
    {
      img: java,
      title: "Java",
      description: t("java"),
    },
    {
      img: angular,
      title: "Angular",
      description: t("angular"),
    },
    {
      img: scss,
      title: "SASS",
      description: t("scss"),
    },
    {
      img: html,
      title: "HTML5",
      description: t("html"),
    },
    {
      img: nest,
      title: "Nest.js",
      description: t("nest"),
    },
    {
      img: kotlin,
      title: "Kotlin",
      description: t("kotlin"),
    },
    {
      img: docker,
      title: "Docker",
      description: t("docker"),
    },
    {
      img: mysql,
      title: "MySQL",
      description: t("mysql"),
    },
  ];
};

export const textArray = () => {
  const { t } = useTranslation("services");
  return {
    firstPage: {
      one: t("boxes.website.first"),
      two: t("boxes.website.second"),

      three: t("boxes.website.third"),
    },
    secondPage: {
      one: t("boxes.spa.first"),
      two: t("boxes.spa.second"),

      three: t("boxes.spa.third"),
    },
    thirdPage: {
      one: t("boxes.applications.first"),
      two: t("boxes.applications.second"),

      three: t("boxes.applications.third"),
    },
    fourthPage: {
      one: t("boxes.design.first"),
      two: t("boxes.design.second"),

      three: t("boxes.design.third"),
    },
  };
};

export type TechData = {
  img: any;
  title: string;
  description: string;
};

export const techData = [
  {
    img: swift,
    title: "Swift",
    description:
      "Swift is a general-purpose, multi-paradigm, compiled programmin language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of exist Objective-C code written for Apple products.",
  },
  {
    img: figma,
    title: "Figma",
    description:
      "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. The feature set of Figma focuses on user interface and user experience design, with an emphasis on real-time collaboration, utilising a variety of vector graphics editor and prototyping tools.",
  },
  {
    img: vue,
    title: "Vue",
    description:
      "Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
  },
  {
    img: ts,
    title: "TypeScript",
    description:
      "TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript. It is a superset of the JavaScript language, designed to give you better tooling at any scale.",
  },
  {
    img: react,
    title: "React.js",
    description:
      "React.js is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  },
  {
    img: node,
    title: "Node.js",
    description:
      "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
  },
  {
    img: js,
    title: "JavaScript",
    description:
      "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.",
  },
  {
    img: firebase,
    title: "Firebase",
    description:
      "Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.",
  },
  {
    img: java,
    title: "Java",
    description:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere.",
  },
  {
    img: angular,
    title: "Angular",
    description:
      "Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with.",
  },
  {
    img: scss,
    title: "SASS",
    description:
      "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
  },
  {
    img: html,
    title: "HTML5",
    description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
  },
  {
    img: nest,
    title: "Nest.js",
    description:
      "Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.",
  },
  {
    img: kotlin,
    title: "Kotlin",
    description:
      "Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.",
  },
  {
    img: docker,
    title: "Docker",
    description:
      "Docker is a tool that is used to automate the deployment of application in lightweight containers so that application can work efficiently in different environments.",
  },
  {
    img: mysql,
    title: "MySQL",
    description:
      "MySQL is an open-source relational database management system (RDBMS). Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter My, and 'SQL', the acronym for Structured Query Language. ",
  },
] as TechData[];
