## Overview

The Navigation Drawer is to be used to hold links to major sections of content.

Links that share a relation can be grouped together.

## Accessibility

The ARIA role for the navbar, will default to 'navigation' for Navbars whose as is something other than <nav>.

## Props

For more details on the available props for this component, visit the [React Bootstrap Docs Navbar]: https://react-bootstrap.github.io/components/navbar/#navbar-props

More information on incorporating the offCanvas component into the navbar: https://react-bootstrap.github.io/components/navbar/#offcanvas  


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
