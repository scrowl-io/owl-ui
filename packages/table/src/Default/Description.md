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

```tsx
import { component as Table } from '@owlui/table';

<Table tableData={tableData} />;

const tableData = [
  caption: 'Table 1. List of users',
  columns: [
    {
      label: 'ID',
      field: 'user_id',
    },
  ];

  items: [
    {
      user_id: '00123',
      user_name: 'Tom'
    },
  ];
]
```

##### Props

Visit the official [React Bootstrap Table docs](https://react-bootstrap.github.io/components/table/#table-props) for a complete list of props.

## Variants
