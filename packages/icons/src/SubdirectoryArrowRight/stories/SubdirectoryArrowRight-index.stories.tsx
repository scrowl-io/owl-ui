import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSubdirectoryArrowRightProps } from '../SubdirectoryArrowRight.types';

import { display } from './SubdirectoryArrowRight-display.stories';
import { appearance } from './SubdirectoryArrowRight-appearance.stories';
import { size } from './SubdirectoryArrowRight-size.stories';
import { theme } from './SubdirectoryArrowRight-theme.stories';

export const SubdirectoryArrowRight = (args: IconsSubdirectoryArrowRightProps) => (
  <Icon {...args}></Icon>
);

SubdirectoryArrowRight.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SubdirectoryArrowRight.argTypes = {
  display,
  appearance,
  size,
  theme,
};
