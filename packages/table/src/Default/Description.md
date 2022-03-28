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

The default table component is going to render a wrapper `<table>` tag for its children:

```jsx
<Table>
  <caption>Table Caption</caption>
  ...
</Table>
```

##### Props

|     Name     |               Type                | Default Value | Description                                                                             |
| :----------: | :-------------------------------: | :-----------: | :-------------------------------------------------------------------------------------- |
| `appearence` | `Default`, `Primary`, `Secondary` |   `Default`   | Sets the overall appearence of the button based on pre-defined styles                   |
|  `outline`   |             `string`              |               | An element Id which identifies the element that describes the button to screen readers. |
|   `prefix`   |             `string`              |               | Custom class that will be added to the beggining of the `className`                     |
|   `theme`    |         `Default`, `Dark`         |   `Default`   | Sets the theme of the button using pre-defined styles                                   |

### Table Header

The table header component renders a `<thead>` element that wraps a `<tr>` followed by table columns. The columns labels should be passed through as a `columns` prop array of objects, each object containing a `label` as `string`:

```javascript
const columns = [
  {
    label: '#',
  },
  {
    label: 'First Name',
  },
  {
    label: 'Last Name',
  },
  {
    label: 'Username',
  },
];
```

Table header definition:

```jsx
<Table>
  <TableHeader columns={columns} />
</Table>
```

##### Props

|   Name    |         Type          | Default Value | Description                                                                              |
| :-------: | :-------------------: | :-----------: | :--------------------------------------------------------------------------------------- |
| `columns` | `[{ label: string }]` |               | Array of objects containing the column labels that will be rendered into `<td>` elements |

### Table Body

The table body component renders a `<tbody>` element that wraps a `TableRow` component followed by `TableCell` components for each column. The body items should be passed through as an `items` prop array of objects, each object containing one or multiple key:pair values:

```javascript
const items = [
  {
    id: 1,
    firstName: 'Michael',
    lastName: 'Scott',
    userName: 'mscott',
  },
  {
    id: 2,
    firstName: 'Oscar',
    lastName: 'Martinez',
    userName: 'omartinez',
  },
  {
    id: 3,
    firstName: 'Meredith',
    lastName: 'Palmer',
    userName: 'mpalmer',
  },
  {
    id: 4,
    firstName: 'Jan',
    lastName: 'Levinson',
    userName: 'jlevinson',
  },
];
```

Table body definition:

```jsx
<Table>
  <TableHeader columns={columns} />
  <TableBody items={items} />
</Table>
```

##### Props

|   Name    |         Type          | Default Value | Description                                                                              |
| :-------: | :-------------------: | :-----------: | :--------------------------------------------------------------------------------------- |
| `columns` | `[{ label: string }]` |               | Array of objects containing the column labels that will be rendered into `<td>` elements |

## Variants
