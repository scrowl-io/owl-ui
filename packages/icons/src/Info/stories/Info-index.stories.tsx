import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInfoProps } from '../Info.types';

import { display } from './Info-display.stories';
import { appearance } from './Info-appearance.stories';
import { size } from './Info-size.stories';
import { theme } from './Info-theme.stories';

export const Info = (args: IconsInfoProps) => (
  <Icon {...args}></Icon>
);

Info.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Info.argTypes = {
  display,
  appearance,
  size,
  theme,
};
