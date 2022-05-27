# Components

The purpose of this package is to provide a convenient method of importing the entirety of Owl UI.

## Usage

Once this package is installed it can be used directly or on a individual component basis.

**Installation:**

> `npm i @owlui/components`
>
> `yarn add @owlui/components`

### Examples

#### Importing All Components

```jsx
import * as owlui from '@owlui/components';

const DefaultBtn = owlui.button.Default;

export const Element = props => {
  const { children } = props;

  return <DefaultBtn>{children}</DefaultBtn>;
};

export default {
  Element,
};
```

#### Importing Single Component

```jsx
import { Default as DefaultBtn } from '@owlui/button';

export const Element = props => {
  const { children } = props;

  return <DefaultBtn>{children}</DefaultBtn>;
};

export default {
  Element,
};
```

## Customization

Details on how to customize the styling of components can be found [here](../theme/README.md).
