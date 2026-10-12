export const problems = [
  {
    number: "01",
    title: "The setup repeats",
    description:
      "Create a project, install packages, configure linting, set up formatting. Then do it all again for the next idea.",
  },
  {
    number: "02",
    title: "The boring work adds up",
    description:
      "Your time goes into wiring tools together instead of building the feature you actually wanted to work on.",
  },
  {
    number: "03",
    title: "Every project starts from zero",
    description:
      "You already know your preferred stack. Why repeat the same setup decisions every single time?",
  },
];

export const goodFit = [
  {
    title: "You start projects frequently",
    description:
      "You'd rather generate your usual stack than repeat the same setup commands every time.",
  },
  {
    title: "You know your preferred stack",
    description:
      "Next.js, Vite, or Express. Pick your framework, database, and tools without wiring everything manually.",
  },
  {
    title: "You want a consistent setup",
    description:
      "Keep familiar development tools and configuration across projects without starting from scratch.",
  },
  {
    title: "You'd rather build than configure",
    description:
      "Spend less time on boilerplate and get to the features you actually want to ship.",
  },
];

export const notFor = [
  {
    title: "You enjoy configuring everything yourself",
    description:
      "If manually setting up every project is part of your workflow, Craft may not add much value.",
  },
  {
    title: "You need an unsupported stack",
    description:
      "Craft currently focuses on Next.js, Vite, and Express—not every framework or language.",
  },
  {
    title: "You expect a complete application",
    description:
      "Craft scaffolds and configures a project. It doesn't build your product features for you.",
  },
  {
    title: "You expect authentication to be fully implemented",
    description:
      "Authentication setup provides packages and guidance, but you may still need to implement the actual flow.",
  },
];

export const faqs = [
  {
    question: "What exactly is Craft?",
    answer:
      "Craft is a CLI that scaffolds web projects and configures selected development tools, database options, and authentication setup. Choose your stack and let Craft handle the repetitive setup work.",
  },
  {
    question: "Which frameworks does Craft support?",
    answer:
      "Craft currently supports Next.js, Vite, and Express. Available options depend on the framework and configuration you choose.",
  },
  {
    question: "Do I need to configure everything manually?",
    answer:
      "No. Craft can scaffold your framework, configure supported tools, prepare environment files, and install dependencies. Some integrations still require additional configuration.",
  },
  {
    question: "Does Craft fully implement authentication?",
    answer:
      "Not yet. Authentication setup installs the selected provider's packages and prepares environment variables and setup guidance. You'll still need to implement and configure the actual authentication flow.",
  },
  {
    question: "Can I choose my database and tools?",
    answer:
      "Yes. Craft supports PostgreSQL, MongoDB, or no database, along with tools such as ESLint, Prettier, Husky, and Commitlint.",
  },
  {
    question: "Will Craft overwrite my existing files?",
    answer:
      "Craft uses staging and conflict checks to help protect existing files. It is designed to avoid blindly overwriting files, but you should still inspect your target directory before generating a project.",
  },
  {
    question: "Is Craft free and open source?",
    answer:
      "Yes. Craft is published on npm under the MIT license, and its source code is available on GitHub. Frameworks and external services you choose may have their own requirements or costs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Install Craft using npm install -g @igmoni/craft, then run craft init my-app. You can also explore the source code and report issues through the GitHub repository.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Choose your stack",
    description:
      "Pick a framework, choose TypeScript or JavaScript where supported, select a database, and decide which development tools you need.",
    detail: "Your framework. Your configuration.",
  },
  {
    number: "02",
    title: "Craft handles the setup",
    description:
      "Craft runs the framework scaffolder, prepares your selected configuration, stages generated files, and checks for conflicts before merging.",
    detail: "Less repetitive setup. Fewer manual steps.",
  },
  {
    number: "03",
    title: "Start building",
    description:
      "Once generation and dependency installation finish, your project is ready for you to inspect, run, and develop further.",
    detail: "From a command to your next project.",
  },
];
