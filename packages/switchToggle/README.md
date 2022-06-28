# SwitchToggle Overview

Simple Bootstrap Switch Toggle component. Known as "Switch" - documentation can be found here: https://react-bootstrap.github.io/forms/checks-radios/#switches

# Description

This SwitchToggle component allows the user to click in order to switch between states, using a boolean. 

Example states: TRUE/FALSE, ON/OFF or ACTIVE/INACTIVE.

Click on each component to visit the Bootstrap docs and check out the complete list of available props:

- [`<Form.Check>`](https://react-bootstrap.github.io/forms/checks-radios/#form-check-props)
- [`<FormCheck.Input>`](https://react-bootstrap.github.io/forms/checks-radios/#form-check-input-props)
- [`<FormCheck.Label>`](https://react-bootstrap.github.io/forms/checks-radios/#form-check-label-props)

## Usage

Click the toggle to switch between opposing states.

## Example

```jsx
<Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Check this switch"
  />
</Form>

## Example (disabled)
<Form>
  <Form.Check 
    disabled
    type="switch"
    label="disabled switch"
    id="disabled-custom-switch"
  />
</Form>
```
