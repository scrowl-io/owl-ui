# Icons

Owl UI icons is a component acting as a wrapper around the [Material Design Font Icons](https://fonts.google.com/icons?selected=Material+Icons). The icon assets are managed by the [theme](../theme/README.md) not here, this allows the component to be **NOT** concerned with the actual font being used.

## Usage

```jsx
import * as Icons from '@owlui/icons';

export const Element = () => {
  return <Icons icon="home" />;
};

export default {
  Element,
};
```
