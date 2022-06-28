## Overview

A table component displays an structures list of content that is similar or related, such as a list of terms and definitions or a list of files.

## Carousel Elements

The default carousel component is going to render a wrapper `<div>` tag for the carousel indicators, slides, and controls (prev/next).

Each slide element should contain at least the `id` and `caption` properties:

```tsx
const slides: Slide[] = [
  {
    id: '1',
    caption: (
      <>
        <h3>Slide 1 label</h3>
        <p>Slide 1 caption text. Text example.</p>
      </>
    ),
  },
];
```

Additionaly, the `backgroundContent` can be used to apply any content to the background of the slide and the default Carousel Bootstrap props passed as `bsItemProps` and `bsCaptionProps`. Visit the official [Carousel docs](https://react-bootstrap.github.io/components/carousel/#carousel-item-props) for more information.

The example below has multiple slides with different styles, both using default Bootstrap Carousel props. The `slide 2` has a background image:

```tsx
import { component as Carousel } from '@owlui/carousel';

const slides: Slide[] = [
  {
    id: '1',
    style: { backgroundColor: '#017aba' },
    caption: (
      <>
        <h3>Slide 1 label</h3>
        <p>Slide 1 caption text. Text example.</p>
      </>
    ),
    bsItemProps: {
      interval: 3000,
    },
  },
  {
    id: '2',
    style: { backgroundColor: '#6a98b0' },
    backgroundContent: (
      <img
        className="d-block w-100"
        src="http://www.google.com/logo.png"
        alt="Second slide"
      />
    ),
    caption: (
      <>
        <h3>Slide 2 label</h3>
        <p>Slide 2 caption text. Text example.</p>
      </>
    ),
    bsItemProps: {
      interval: 6000,
    },
    bsCaptionProps: {
      as: 'li',
      bsPrefix: 'example-caption-prefix owlui-carousel-caption',
    },
  },
];

<Carousel slides={slides} />;
```

##### Props

Visit the official [React Bootstrap Carousel docs](https://react-bootstrap.github.io/components/carousel/#carousel-props) for a complete list of props.
