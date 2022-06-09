## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more

## Accessibility

The WAI ARIA standard defines a role="menu" widget, but it's very specific to a certain kind of menu. ARIA menus must only contain role="menuitem", role="menuitemcheckbox", or role="menuitemradio".

On the other hand, Bootstrap's dropdowns are designed to be more generic and applied in a variety of situations. For this reason we don't automatically add the menu roles to the markup. We do implement some basic keyboard navigation, and if you do provide the "menu" role, react-bootstrap will do its best to ensure the focus management is compliant with the ARIA authoring guidelines for menus.

## Content Types

See the Bootstrap docs to check out the complete list of available props:

- [`<Dropdown>`](https://react-bootstrap.github.io/components/dropdowns/#dropdown-props)

## Props

|  Name  |  Type  | Default Value | Description |
| :----: | :----: | :-----------: | :---------- |
| `NAME` | `TYPE` |    `VALUE`    | DESCRIPTION |

## Usage

Import or create an array of item objects, where each item has an id (string), a label (string), and a value (undefined--not currently being used). Pass the items to the Dropdown component as a prop.

```jsx
import { Default as Dropdown } from `@owlui/dropdown`;

const items = [
  {
    id: '1',
    label: 'Item 1',
    value: undefined,
  },
  {
    id: '2',
    label: 'Item 2',
    value: undefined,
  },
  {
    id: '3',
    label: 'Item 3',
    value: undefined,
  },
];

<Dropdown items={items} />

```

## Variants
