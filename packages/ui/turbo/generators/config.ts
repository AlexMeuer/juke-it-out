import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
      {
        type: "list",
        name: "category",
        message: "What category does this component fit into?",
        choices: ["atoms", "molecules", "organisms", "templates"] as const,
      },
      {
        type: "input",
        name: "extra-path",
        message:
          "Any extra path elements (i.e. where should the file be created)?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{category}}/{{#if extra-path}}{{extra-path}}/{{/if}}{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "index.tsx",
        // pattern: /"exports": {(?<insertion>)/g,
        template:
          'export * from "src/components/{{category}}/{{#if extra-path}}{{extra-path}}/{{/if}}{{kebabCase name}}";',
      },
    ],
  });
  plop.setGenerator("chakra-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the chakra component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/atoms/{{kebabCase name}}.tsx",
        templateFile: "templates/chakra-aliased-component.hbs",
      },
      {
        type: "append",
        path: "index.tsx",
        template: 'export * from "./src/components/atoms/{{kebabCase name}}";',
      },
    ],
  });
}
