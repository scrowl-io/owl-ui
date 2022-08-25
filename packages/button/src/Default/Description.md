## Overview

A button component triggers an action or event when activated. It communicates calls to action to the user and allow them to interact with the app.

### When to use

To communicate actions the user can take and allow them to interact with the app. Ideally, each page should have only one primary button component, and any other actions should be represented as lower emphasis button components.

### When not to use

Do not use **default** button components as navigational elements. Use the `react-router-dom` **Link** component instead, when the user interaction will take him to a new page within the app.

## Accessibility

The button component renders a native `<button>` element, by default, when a button has focus, both the `Space` and `Enter` keys will activate the button. If the button is disabled, then the `disabled` attribute is provided.

The aria labels will be renderer as provided bu the `arialabel` or `ariadescribedby` props.

## Props

The button component should inherit the HTML props of the web button so that props, such as `onClick` and `aria` have same typings as the native web elements.

|       Name        |         Type         | Default Value | Description                                                                                                      |
| :---------------: | :------------------: | :-----------: | :--------------------------------------------------------------------------------------------------------------- |
|   `appearence`    | `Default`, `Primary` |   `Default`   | Sets the overall appearence of the button based on pre-defined styles                                            |
| `ariadescribedby` |       `string`       |               | An element Id which identifies the element that describes the button to screen readers.                          |
|    `arialabel`    |       `string`       |               | Labels the interactive element and provides its acessible name.                                                  |
|     `onClick`     |      `function`      |               | Function that will be triggered on the `onclick` event.                                                          |
|    `disabled`     |      `boolean`       |               | Defines wheter the button is in an enabled or disabled state.                                                    |
|      `href`       |       `string`       |               | The href specifies the URL of the page the link goes to. It will render an `<a>` element instead of a `<button>` |
|     `prefix`      |       `string`       |               | Custom class that will be added to the beggining of the `className`                                              |
|      `size`       |      `sm`, `lg`      |               | Sets the size of the button                                                                                      |
|      `theme`      |  `Default`, `Dark`   |   `Default`   | Sets the theme of the button using pre-defined styles                                                            |

## Usage

### Default Button

```jsx
import {Default as Button} from `@owlui/button`;

<Button onClick={customOnClickFunction}>
  <span>Click Me!</span>
</Button>
```

### Link Button

```jsx
import {Default as Button} from `@owlui/button`;

<Button href='https://www.osg.ca'>
  <span>Click Me!</span>
</Button>
```

### Button Variant

```jsx
import {Default as Button} from `@owlui/button`;

<Button
  appearence='Primary'
  theme='Dark'
  size='lg'
  prefix='new-button custom-button'
  onClick={customOnClickFunction}
>
  <span>Click Me!<span>
</Button>
```

### Button with ARIA description

```jsx
import {Default as Button} from `@owlui/button`;

<Button
  arialabel='Submit contact form.'
  onClick={customOnClickFunction}
>
  <span>Submit</span>
</Button>

<Button
  ariadescribedby='#submit-form'
  onClick={customOnClickFunction}
>
  <span id='submit-form' className='visually-hidden'>Click here to submit the contact form with your request.</span>
  <span>Submit</span>
</Button>
```

### Button with custom styles

```jsx
<Button
  style={{ backgroundColor: 'lightblue' }}
  onClick={customOnClickFunction}
>
  <span>Submit</span>
</Button>
```

## Variants
