## Overview

The drawer component allows for hidden sidebars that can be used for navigation and other utilities.

## Accessibility

aria-labelledby, autoFocus

autoFocus:

When true The offcanvas will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the offcanvas less accessible to assistive technologies, like screen-readers.

## Props

For more details on the available offcanvas props, visit the [React Bootstrap Docs]:

[offcanvas]: https://react-bootstrap.github.io/components/offcanvas/#offcanvas-props

[OffcanvasHeader]: https://react-bootstrap.github.io/components/offcanvas/#offcanvas-header-props - Header props can be passed as an `bsProp` object in the `header` property, see examples below.

## Usage

Can be used for navigation, shopping carts, etc.

### Basic Default

```jsx
import Drawer from `@owlui/drawer`;

const drawer: DrawerProps = {
  header: {
    content: <h2>Drawer Header</h2>,
    bsProps: {
      closeButton: true,
    },
  },
  body: (
    <p>
      Some text as <em>placeholder</em>. In real life you can have the elements
      you have chosen. Like, text, images, lists, etc.
    </p>
  ),
};

// show and toggleShow are state values
<Drawer show={show} onHide={toggleShow} drawer={drawer} />
```

## Variants

The offcanvas drawer includes placement options for start, end, top and bottom.
