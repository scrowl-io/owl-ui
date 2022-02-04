# Owl UI

This repository is a Design System intended to act as the foundational UI layer for all OSG projects. The [Scrowl](https://github.com/EEBOS/SCROWL) project will be the first to utilize it, with the hope that we will incorporate this system into the existing projects.

## Getting Started
This project makes use of a few packages that should be installed globally, so let’s install those first before installing all of the dependencies.

`npm install yarn lerna parcel -g`

In case you get the error `Error: EACCES: permission denied` try to install the packages using `sudo` permissions, your user's password may be requested:

`sudo npm install yarn lerna parcel -g`

---

### [Yarn](https://yarnpkg.com/)
We use Yarn to manage dependencies instead of npm. This project and others are mono repos and we make use of yarn’s workspace feature to make management easier.

### [Lerna](https://lerna.js.org/)
Being a monorepo, this project uses Lerna to manage interdependencies as well as to publish its packages on npm.

### [Parcel](https://parceljs.org/)
This project uses Parcel to build the packages for distribution to npm.

---

Once those global packages have been installed, you can install the remaining dependencies.

`yarn install`

## Noteworthy Technologies
This project is built with: [Typescript](https://www.typescriptlang.org/), [React](https://reactjs.org/), and [Sass](https://sass-lang.com/). It uses [Storybook](https://storybook.js.org/) to visualize components and provide documentation. Additionally, we make use of the [VS Code](https://code.visualstudio.com/) extension [Adobe XD](https://marketplace.visualstudio.com/items?itemName=Adobe.xd) to help translate designs into code. This extension is optional to install.

## Commands
There are a number of custom commands to help facilitate development and publishing.

### Post Install
After you install but before you begin any development you should run the setup command.

`yarn run setup`

This command will initialize Lerna and move the design variables/tokens into the theme component.

### Creating Components
#### Single Components
The name of the your component must contain only letters and no special characters or numbers, as we implement this [rule](https://www.typescriptlang.org/tsconfig#forceConsistentCasingInFileNames) in our TS config.

To create a new component requires a lot of boilerplate. To make things a little easier, run the following command:

`yarn run create:component -n [COMPONENT_NAME]`

For example:

`yarn run create:component -n newComponentName`

#### Multiple Components
To create multiple components you should use the `-m` flag followed by the component names separated by `,`:

`yarn run create:component -m [COMPONENT_NAME],[COMPONENT_NAME],[COMPONENT_NAME]`

For example:

`yarn run create:component -m form,button,tooltip`

The component will be created under the packages folder and have an initial view option of “Default”. If you wish to have the component be initialized with a different option, you can follow this format when passing the component name [COMPONENT_NAME]@[OPTION_NAME].

If you want to add a new option to an existing component run the following command:

`yarn run create:component -o [COMPONENT_NAME]@[OPTION_NAME]`

For example:

`yarn run create:component -o button@tertiary`

If you are creating a component that makes use of another, you can add it as a dependency with the following [Lerna](https://github.com/lerna/lerna/tree/main/commands/add) command:

`lerna add @owlui/[COMPONENT_DEPENDENCY] --scope=@owlui/[COMPONENT]`

For example, the command below adds the `button` component as a dependency in the `newcomponent`:

`lerna add @owlui/button --scope=@owlui/newcomponent`

### Development
We make use of Storybook to create components in isolation. To start storybook, run this command:

`yarn run start:storybook`

Additionally, there is a simple web service that you can use to test out importing/consuming your component. Run this command to start the web service:

`yarn run start:web`

### Publishing
Publishing should only occur once your code has been tested, reviewed, and merged. To publish to npm, run the following command:

`yarn run publish:lerna`

In order to publish to npm, you will need to have an [npm](https://www.npmjs.com/) account and be a member of the owlui organization.

There might arise a scenario where Lerna wasn’t able to completely publish. In that case, after you make the necessary corrections, run this command to complete it:

`yarn run republish:lerna`

## Contributing
There are many different design systems out there: [Microsoft’s Fluent UI](https://github.com/microsoft/fluentui), [Google’s Material Components](https://github.com/material-components/material-components-web), [IBM’s Carbon](https://github.com/carbon-design-system/carbon), and [Adobe’s Spectrum](​​https://github.com/adobe/react-spectrum), just to name a few. This design system is largely inspired by those, both in terms of design but also how they have structured themselves as mono-repos.

One of the biggest differences between those and this project is that this project makes use of css (sass) modules. If you are unfamiliar with sass modules here is a good article from [css-tricks](https://css-tricks.com/introducing-sass-modules/). For general information on css modules check out the [repo](https://github.com/css-modules/css-modules).

The folder and filename structure is modeled most closely after Fluent UI. So if you’re looking for a reference on how to name something check out that repo. In most cases the create:component command should be supplying all the foundation you need to start something new. Until we develop our own process, it is recommended to follow these [contributing guidelines](https://github.com/microsoft/fluentui/wiki/Contributing).

When adding a new feature or fixing a bug, make sure to branch from main and name your branch something meaningful. For example: feature/[FEATURE_NAME], bug/[BUG_NAME], hotfix/[TICKET_NAME]. Your commits should always be related to a task in shortcut. To link the commit to the task, include the shortcut id in the message.

`[sc-120] Added outline style to button component`.