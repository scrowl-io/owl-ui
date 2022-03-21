import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPictureInPictureProps } from '../PictureInPicture.types';

import { display } from './PictureInPicture-display.stories';
import { appearance } from './PictureInPicture-appearance.stories';
import { size } from './PictureInPicture-size.stories';
import { theme } from './PictureInPicture-theme.stories';

export const PictureInPicture = (args: IconsPictureInPictureProps) => (
  <Icon {...args}></Icon>
);

PictureInPicture.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PictureInPicture.argTypes = {
  display,
  appearance,
  size,
  theme,
};
