import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMonochromePhotosProps } from '../MonochromePhotos.types';

import { display } from './MonochromePhotos-display.stories';
import { appearance } from './MonochromePhotos-appearance.stories';
import { size } from './MonochromePhotos-size.stories';
import { theme } from './MonochromePhotos-theme.stories';

export const MonochromePhotos = (args: IconsMonochromePhotosProps) => (
  <Icon {...args}></Icon>
);

MonochromePhotos.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MonochromePhotos.argTypes = {
  display,
  appearance,
  size,
  theme,
};
