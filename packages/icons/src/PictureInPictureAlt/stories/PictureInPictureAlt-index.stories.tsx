import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPictureInPictureAltProps } from '../PictureInPictureAlt.types';

import { display } from './PictureInPictureAlt-display.stories';
import { appearance } from './PictureInPictureAlt-appearance.stories';
import { size } from './PictureInPictureAlt-size.stories';
import { theme } from './PictureInPictureAlt-theme.stories';

export const PictureInPictureAlt = (args: IconsPictureInPictureAltProps) => (
  <Icon {...args}></Icon>
);

PictureInPictureAlt.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PictureInPictureAlt.argTypes = {
  display,
  appearance,
  size,
  theme,
};
