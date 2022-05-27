# Commands

## Components

#### [Update Component](./components/cmd.update-lib.js)

`yarn run update:component`

This command updates the [packages/components](../packages/components/README.md) component. It adds all other UI components to its [index](../packages/components/src/index.ts) and exports them. It does the same for the [stylings](../packages/components/src/_index.scss) of the UI components. Additionally, in ensures that all components under packages are added as dependencies.

This command runs as a pre-step in the `build:system` command(s).

This command runs as a post-step in the `create:component` command(s).

---

#### [Create Component](./components/cmd.create.js)

`yarn run create:component`

This command uses handlebar templates to create a component.

To create a component requires the use of the `-n` or `-m` flag. The command will prevent you from overwriting an existing component.

You can add a new option to an existing component by using the `-o` flag.

| Flag | Example                                                | Description                                                                  |
| :--: | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `-n` | `yarn run create:component -n button`                  | creates a component with an option of **Default**                            |
| `-n` | `yarn run create:component -n button@link`             | creates a component with options of **Default**, and **Link**                |
| `-m` | `yarn run create:component -m "datepicker, textfield"` | creates a datepicker and textfield components each with a **Default** option |
| `-o` | `yarn run create:component -o button@link`             | creates the **Link** option under the button component                       |

---

#### [Create Icon](./components/cmd.create-icon.js)

`yarn run create:icon`

This command will create an [icons](../packages/icons/README.md) component option.

To create an icon option requires the use of the `-n` flag. The command will **NOT** prevent you form overwriting an existing option.

You can create options of all known icons by using the `-a` flag.

| Flag | Example                                   | Description                               |
| :--: | ----------------------------------------- | ----------------------------------------- |
| `-n` | `yarn run create:icon -n add`             | creates the icon option add               |
| `-n` | `yarn run create:icon -n "add, settings"` | creates the icon options add and settings |
| `-a` | `yarn run create:icon -a`                 | creates all known icon options            |

---

#### [Update Icons](./components/cmd.update-icons.js)

`yarn run update:icons`

This command takes all known icon options and applies them to the [Default](../packages/icons/src/Default/Default.types.ts) type definition.

---

## Pipelines

#### [Fix](./pipeline/cmd.fixes.js)

`yarn run fix`

This command applies fixes to files by overwriting bugged files with corrected versions.

This command runs as a pre-step in the `start:web` script(s).

---

#### [Build - Distribution](./pipeline/cmd.dist.js)

`yarn run build:system`

This command uses parcel to build distribution files for npm packages.

This command runs as a pre-step in the `publish:lerna`, `republish:lerna` script(s).

---

#### [Logs - Print](./pipeline/cmd.logs.js)

`yarn run logs:print`

This command prints logs generated from eslint.

This command runs as a step in the `lint:fix:eslint`, `lint:check:eslint` script(s).

---

#### [Logs - Clean](./pipeline/cmd.logs-clean.js)

`yarn run logs:clean`

This command removes an existing eslint log file.

This command runs as a pre-step in the `lint:fix:eslint`, `lint:check:eslint` script(s).

---

#### [Setup](./pipeline/cmd.setup.js)

`yarn run presetup`

This command copies files into a new location. Additionally, the command can apply a transformation to the file being copied.

This command runs as a pre-step in the `setup`, `build:storybook`, `start:storybook`, `build:web`, `start:web` script(s).

This command runs as a pre-step in the `build:system` command(s).

---
