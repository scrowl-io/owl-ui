# Dropdown Overview

Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin

## Usage

Import or create an array of item objects, each of which has id, label, and value fields, then pass the items to the Dropdown component as a prop.

- [`<Dropdown>`](https://react-bootstrap.github.io/components/dropdowns/#dropdown-props)

```tsx
import { component as Dropdown } from '@owlui/dropdown';

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

<Dropdown items={items} />;
```
