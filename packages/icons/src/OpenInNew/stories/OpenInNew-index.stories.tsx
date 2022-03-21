import * as React from 'react';
import { component as Icon } from '../index';
import { IconsOpenInNewProps } from '../OpenInNew.types';

import { display } from './OpenInNew-display.stories';
import { appearance } from './OpenInNew-appearance.stories';
import { size } from './OpenInNew-size.stories';
import { theme } from './OpenInNew-theme.stories';

export const OpenInNew = (args: IconsOpenInNewProps) => (
  <Icon {...args}></Icon>
);

OpenInNew.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

OpenInNew.argTypes = {
  display,
  appearance,
  size,
  theme,
};
