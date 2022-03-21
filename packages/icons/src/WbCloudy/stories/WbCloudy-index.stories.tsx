import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWbCloudyProps } from '../WbCloudy.types';

import { display } from './WbCloudy-display.stories';
import { appearance } from './WbCloudy-appearance.stories';
import { size } from './WbCloudy-size.stories';
import { theme } from './WbCloudy-theme.stories';

export const WbCloudy = (args: IconsWbCloudyProps) => (
  <Icon {...args}></Icon>
);

WbCloudy.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WbCloudy.argTypes = {
  display,
  appearance,
  size,
  theme,
};
