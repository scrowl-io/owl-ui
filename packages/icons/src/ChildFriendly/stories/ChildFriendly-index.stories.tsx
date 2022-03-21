import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChildFriendlyProps } from '../ChildFriendly.types';

import { display } from './ChildFriendly-display.stories';
import { appearance } from './ChildFriendly-appearance.stories';
import { size } from './ChildFriendly-size.stories';
import { theme } from './ChildFriendly-theme.stories';

export const ChildFriendly = (args: IconsChildFriendlyProps) => (
  <Icon {...args}></Icon>
);

ChildFriendly.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ChildFriendly.argTypes = {
  display,
  appearance,
  size,
  theme,
};
