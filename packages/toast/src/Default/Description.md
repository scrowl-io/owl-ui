## Overview

The toast component is used to display notifications. They can be positioned and aligned in multiple positions across a screen or page.

[Official React Bootstrap Docs] https://react-bootstrap.github.io/components/toasts/#examples

## Toast Elements

The default toast component renders a wrapper `<div>` which contains the header and body content.

The header contains the close button, close label and the close variant.

The toast body is rendered as a `div` by default but can be modified via the `as` prop for further customization.

## Accessibility

## Props

[Official React Bootstrap Docs] https://react-bootstrap.github.io/components/toasts/#toast-props - For more information


### Basic Default

```jsx
import { Default as DefaultToast } from `@owlui/toast`;

const toastContent: ToastContentProps = {
  header: {
    closeLabel: 'This is the close label',
    closeVariant: 'white',
    closeButton: true,
  },
  body: {
    bodyText: 'Hello, world! This is a toast message.',
  },
};

<Toast toastContent={toastContent} />
```

## Variants