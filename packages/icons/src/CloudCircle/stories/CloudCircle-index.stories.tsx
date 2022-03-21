import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCloudCircleProps } from '../CloudCircle.types';

import { display } from './CloudCircle-display.stories';
import { appearance } from './CloudCircle-appearance.stories';
import { size } from './CloudCircle-size.stories';
import { theme } from './CloudCircle-theme.stories';

export const CloudCircle = (args: IconsCloudCircleProps) => (
  <Icon {...args}></Icon>
);

CloudCircle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CloudCircle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
