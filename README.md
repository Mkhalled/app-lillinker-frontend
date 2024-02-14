## lillinker App Frontend

-# Description

- [ ] **all project developers must use the same node engine and package manager.** We'll create two new files in the project root for this purpose.
  - .nvmrc - Inform other project users of the Node version used.
  - .pnpmrc - Inform other project users of the package manager used.
    ```jsx
    {
      "name": "nextjs-app-template",
      "version": "0.1.0",
      "private": true,
      "engines": {
        "node": ">=18.0.0",
        "pnpm": ">=8.5.1",
        "yarn": "please-use-pnpm"
      },
    ```

## **Configuring Git**

- [ ] **Git Hooks : Husky** is a tool that allows you to execute scripts at various key stages of the Git lifecycle, such as add, commit, push, etc.
  - [ ] Install Husky
  ```jsx
  pnpm add -D husky
  pnpm husky install // this command will generate a .husk folder in your project.
                     // This folder will be the home of your hooks.
  ```
  - [ ] add a new script to the **package.json** file
  ```jsx
  ...
    "scripts: {
      ...
      "prepare": "husky install"
    }
  ```
  - [ ] create the first hook
  ```jsx
  pnpm husky add .husky/pre-commit "pnpm lint"
  // This hook will be automatically executed before each commit. The pnpm lint command
  // If the lint script encounters any errors, you won't be able to commit until these have been resolved.
  ```
  - [ ] create the second hook
  ```jsx
  pnpm husky add .husky/pre-push "pnpm build"
  // This hook ensures that we are not allowed to push our code
  // to the remote repository unless the build is successful.
  ```
- [ ] Add a linter for our commit messages
  ```jsx
  pnpm add -D @commitlint/config-conventional @commitlint/cli
  ```
- [ ] Create the **commitlint.config.js** file at the project root.

```jsx
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
};
```

- [ ] Active `commitlint` with `husky`

```jsx
pnpm husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## **Formatting and Code Quality Tools**

- [ ] **ESLint-** an analysis tool to help maintain code quality.
  - [ ] Create an **eslintrc.json** file at the root of project.
  ```jsx
  {
    "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
    "globals": {
      "React": "readonly"
    },
    "rules": {
      "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
    }
  }
  ```
  - [ ] Test the new conf with the command: **pnpm lint**
- [ ] **Prettier-** a code formatter who guarantees the coherence and style of your code.
  - [ ] Add Prettier to the project.
  ```jsx
  pnpm add -D prettier
  ```
  - [ ] Install the Prettier extension in VScode
  - [ ] Create the **.prettierrc** file at the project root.
  ```jsx
  {
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
  }
  ```
  - [ ] Create the .prettierignore file at the project root
  ```jsx
  .pnpm
  .next
  dist
  node_modules
  ```
  - [ ] add a new script to the **package.json** file
  ```jsx
  ...
    "scripts: {
      ...
      "prettier": "prettier --write ."
    }
  ```
  - [ ] Test the new conf with the command: **pnpm prettier**

## **Configuration de VS code**

- [ ] create a root folder with the name **.vscode**
- [ ] inside **.vscode,** create a **settings.json** (containing values that will replace some of VS Code's default settings.)
- [ ] added in **settings.json**

```jsx
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}
```

**Debugging**

- [ ] add a second **launch.json** file to the .vscode folder

```jsx
{
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Next.js: debug server-side",
        "type": "node-terminal",
        "request": "launch",
        "command": "pnpm run dev"
      },
      {
        "name": "Next.js: debug client-side",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:3000"
      },
      {
        "name": "Next.js: debug full stack",
        "type": "node-terminal",
        "request": "launch",
        "command": "pnpm run dev",
        "serverReadyAction": {
          "pattern": "started server on .+, url: (https?://.+)",
          "uriFormat": "%s",
          "action": "debugWithChrome"
        }
      }
    ]
  }
```

- [ ] install **cross-env** to define environment variables
  ```jsx
  pnpm add -D cross-env
  ```
- [ ] update our **package.json** devscript to look like this

```jsx
{
  ...
  "scripts": {
    ...
    "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
  },
}
```

## **Storybook**

- [ ] install storybook

```jsx
pnpm dlx storybook@latest init
```

- [ ] configurer manuellement la notification eslintPlugin : Open it **.eslintrc.json** and update it by adding the following

```jsx
"overrides": [
    {
      "files": ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      "rules": {
        // example of overriding a rule
        "storybook/hierarchy-separator": "error"
      }
    }
  ]
```

- [ ] making sure we use webpack5

```jsx
{
  ...
  "resolutions": {
    "webpack": "^5"
  }
}
```

- [ ] Run the **pnpm install** command to verify that webpack5 has been installed
- [ ] update the .storybook/main.js file

```jsx
import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
```

- [ ] dit **storybook/preview** file

```jsx
import type { Preview } from '@storybook/react';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      viewport: { viewports: customViewports },
      layout: 'fullscreen',
    },
  },
};

export default preview;
```

- [ ] lance storyBook **pnpm storybook**
- [ ] you can access the http://localhost:6006/ interface.
