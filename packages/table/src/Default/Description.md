## Overview

A table component displays an structures list of content that is similar or related, such as a list of terms and definitions or a list of files.

### When to use

- To organize and display data.
- If the user must navigate to a specific piece of data to complete a task.
- Display a list of features.

### When not to use

- When a more complex display of data or interactions are required
- As a replacement for a spreadsheet application

## Table Elements

### Table (Default)

The default table component is going to render a wrapper `<table>` tag for the table `<thead>` that contains one or multiple columns, and for the `<tbody>` and its children:

```jsx
<Table columns={columns} items={items} />;

columns: [
  {
    label: 'ID',
    field: 'user_id',
  },
];

items: [
  {
    user_id: '00123',
  },
];
```

##### Props

|     Name     |                 Type                  | Default Value | Description                                                                             |
| :----------: | :-----------------------------------: | :-----------: | :-------------------------------------------------------------------------------------- |
| `appearence` |   `Default`, `Primary`, `Secondary`   |   `Default`   | Sets the overall appearence of the button based on pre-defined styles                   |
|  `outline`   |               `string`                |               | An element Id which identifies the element that describes the button to screen readers. |
|   `prefix`   |               `string`                |               | Custom class that will be added to the beggining of the `className`                     |
|   `theme`    |           `Default`, `Dark`           |   `Default`   | Sets the theme of the button using pre-defined styles                                   |
|  `columns`   | `[{ label: string; field: string; }]` |               | An array of objects containing a label that will be the key and name of the column      |
|   `items`    |           `[{key: value}]`            |               | Sets the theme of the button using pre-defined styles                                   |

> The `columns` field should match the `items` key in order to render the proper header/body values.

## Variants
