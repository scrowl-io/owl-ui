## Overview

The Navigation Drawer is to be used to hold links to major sections of content.

Links that share a relation can be grouped together.

## Accessibility

## Props

|     Name     |           Type           | Default Value | Description                                                             |
| :----------: | :----------------------: | :-----------: | :---------------------------------------------------------------------- |
|   `theme`    |         `string`         |   `Default`   | Dictates color scheme                                                   |
| `appearance` |         `string`         |               | Modifies the look/feel of the component                                 |
|    `size`    |         `string`         |     `Sm`      | Modifies font sizes and spacing                                         |
|   `header`   |        `Element`         |               | A non-scrolling element meant for titles, logos, etc.                   |
|   `items`    | `Array<ContentItemType>` |               | An array of mixed types, can be a `contentItem` or a `contentItemGroup` |

#### Content Item

A `contentItem` is an object with the following properties:

|  Name   |   Type   | Default Value | Description                   |
| :-----: | :------: | :-----------: | :---------------------------- |
| `label` | `string` |               | The display value of the item |

#### Content Item Group

A `contentItemGroup` is an object with the following properties:

|   Name    |         Type         | Default Value | Description                         |
| :-------: | :------------------: | :-----------: | :---------------------------------- |
| `heading` |       `string`       |               | The display value of the subheading |
|  `items`  | `Array<contentItem>` |               | An array of content items           |

## Basic Implementation

```jsx
import { Default as NavDrawer } from `@owlui/navigationdrawer`;

export const render = () => {
  const items = [
    { label: 'Link 1' },
    { heading: 'CATEGORY 1', items: [{ label: 'Link 2' }, { label: 'Link 3' }] },
  ];

  return (<NavDrawer items={items}></NavDrawer>);
}

export default {
  render,
}
```

## Variants
