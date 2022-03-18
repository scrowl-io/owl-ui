## Overview

The card component provides a flexible and extensible container for displaying content.

### Content Types

The card component provides content wrappers that will be rendered with proper classes to follow the BEM CSS naming convention.

The card itself is just concerned with presentation, so each content type will render the children markup provided by the developer.

#### Card Header

```
<CardHeader>
  <h3>Card Title</h3>
</CardHeader>
```

#### Card Body

```
<CardBody>
  <p>Some quick example text to build on the card content</p>
</CardBody>
```

#### Card Footer

```
<CardFooter>
  <Button>Submit</Button>
</CardFooter>
```

## Props

|     Name     |              Type               | Default Value | Description                                                         |
| :----------: | :-----------------------------: | :-----------: | :------------------------------------------------------------------ |
| `appearence` | `Default`, `Primary`, `Outline` |   `Default`   | Sets the overall appearence of the card based on pre-defined styles |
|   `theme`    |        `Default`, `Dark`        |   `Default`   | Sets the theme of the card using pre-defined styles                 |

## Usage

### Basic Button

```jsx
import {component as Card} from `@owlui/Card`;

<Card {...args}>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Some quick example text to build on the card content</p>
  </CardBody>
  <CardFooter>
    <Button>Submit</Button>
  </CardFooter>
</Card>
```

## Variants
