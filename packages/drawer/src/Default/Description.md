## Overview

The drawer component allows for hidden sidebars that can be used for navigation and other utilities.

## Accessibility

aria-labelledby, autoFocus

autoFocus:

When true The offcanvas will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the offcanvas less accessible to assistive technologies, like screen-readers.

## Props

For more details on the available offcanvas props, visit the [React Bootstrap Docs]:

[Offcanvas]: https://react-bootstrap.github.io/components/offcanvas/#offcanvas-props

[OffcanvasHeader]: https://react-bootstrap.github.io/components/offcanvas/#offcanvas-header-props

[OffcanvasTitle]: https://react-bootstrap.github.io/components/offcanvas/#offcanvas-title-props

[OffcanvasBody]: https://react-bootstrap.github.io/components/offcanvas/#offcanvas-body-props

## Usage

Can be used for navigation, shopping carts, etc.

### Basic Default
ll
```jsx
import { Default as DefaultDrawer } from `@owlui/drawer`;

<DefaultDrawer {...args}>
</DefaultDrawer>
```

## Variants

The offcanvas drawer includes placement options for start, end, top and bottom.