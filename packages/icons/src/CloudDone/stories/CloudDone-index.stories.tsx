import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCloudDoneProps } from '../CloudDone.types';

import { display } from './CloudDone-display.stories';
import { appearance } from './CloudDone-appearance.stories';
import { size } from './CloudDone-size.stories';
import { theme } from './CloudDone-theme.stories';

export const CloudDone = (args: IconsCloudDoneProps) => (
  <Icon {...args}></Icon>
);

CloudDone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CloudDone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
