import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPolymerProps } from '../Polymer.types';

import { display } from './Polymer-display.stories';
import { appearance } from './Polymer-appearance.stories';
import { size } from './Polymer-size.stories';
import { theme } from './Polymer-theme.stories';

export const Polymer = (args: IconsPolymerProps) => (
  <Icon {...args}></Icon>
);

Polymer.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Polymer.argTypes = {
  display,
  appearance,
  size,
  theme,
};
