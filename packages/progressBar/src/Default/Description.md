## Overview

A simple progress bar component that provides up-to-date feedback on the progress of an action.

## Props

More info on available props can be found here: [React Bootstrap Progress Bar Docs] https://react-bootstrap.github.io/components/progress/#progress-bar-props

## Usage

The progress bar can be used to show progrees of different work flows or actions. The progress bar shows a percentage completion based on the level of progress.

### Basic Default

The default progress bar component uses the progress bar component as a wrapper for the background and an additional progress bar for the containing bar which is rendered with the background colour and has a width set based on the percentage of progress.

```jsx
import { Default as DefaultProgressBar } from `@owlui/progressbar`;

<DefaultProgressBar {...args}>
</DefaultProgressBar>
```

## Variants

The progress bar will have different background colour variants, as well as three size variants for small, medium and large.