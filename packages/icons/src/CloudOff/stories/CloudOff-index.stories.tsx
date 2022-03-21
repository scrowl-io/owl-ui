import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCloudOffProps } from '../CloudOff.types';

import { display } from './CloudOff-display.stories';
import { appearance } from './CloudOff-appearance.stories';
import { size } from './CloudOff-size.stories';
import { theme } from './CloudOff-theme.stories';

export const CloudOff = (args: IconsCloudOffProps) => (
  <Icon {...args}></Icon>
);

CloudOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CloudOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
