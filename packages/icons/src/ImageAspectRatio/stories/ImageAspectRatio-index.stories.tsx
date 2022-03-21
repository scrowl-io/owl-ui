import * as React from 'react';
import { component as Icon } from '../index';
import { IconsImageAspectRatioProps } from '../ImageAspectRatio.types';

import { display } from './ImageAspectRatio-display.stories';
import { appearance } from './ImageAspectRatio-appearance.stories';
import { size } from './ImageAspectRatio-size.stories';
import { theme } from './ImageAspectRatio-theme.stories';

export const ImageAspectRatio = (args: IconsImageAspectRatioProps) => (
  <Icon {...args}></Icon>
);

ImageAspectRatio.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ImageAspectRatio.argTypes = {
  display,
  appearance,
  size,
  theme,
};
