import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCloudProps } from '../Cloud.types';

import { display } from './Cloud-display.stories';
import { appearance } from './Cloud-appearance.stories';
import { size } from './Cloud-size.stories';
import { theme } from './Cloud-theme.stories';

export const Cloud = (args: IconsCloudProps) => (
  <Icon {...args}></Icon>
);

Cloud.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Cloud.argTypes = {
  display,
  appearance,
  size,
  theme,
};
