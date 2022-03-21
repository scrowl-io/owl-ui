import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPictureAsPdfProps } from '../PictureAsPdf.types';

import { display } from './PictureAsPdf-display.stories';
import { appearance } from './PictureAsPdf-appearance.stories';
import { size } from './PictureAsPdf-size.stories';
import { theme } from './PictureAsPdf-theme.stories';

export const PictureAsPdf = (args: IconsPictureAsPdfProps) => (
  <Icon {...args}></Icon>
);

PictureAsPdf.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PictureAsPdf.argTypes = {
  display,
  appearance,
  size,
  theme,
};
