import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSubdirectoryArrowLeftProps } from '../SubdirectoryArrowLeft.types';

import { display } from './SubdirectoryArrowLeft-display.stories';
import { appearance } from './SubdirectoryArrowLeft-appearance.stories';
import { size } from './SubdirectoryArrowLeft-size.stories';
import { theme } from './SubdirectoryArrowLeft-theme.stories';

export const SubdirectoryArrowLeft = (args: IconsSubdirectoryArrowLeftProps) => (
  <Icon {...args}></Icon>
);

SubdirectoryArrowLeft.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SubdirectoryArrowLeft.argTypes = {
  display,
  appearance,
  size,
  theme,
};
