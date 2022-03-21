import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInsertPhotoProps } from '../InsertPhoto.types';

import { display } from './InsertPhoto-display.stories';
import { appearance } from './InsertPhoto-appearance.stories';
import { size } from './InsertPhoto-size.stories';
import { theme } from './InsertPhoto-theme.stories';

export const InsertPhoto = (args: IconsInsertPhotoProps) => (
  <Icon {...args}></Icon>
);

InsertPhoto.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InsertPhoto.argTypes = {
  display,
  appearance,
  size,
  theme,
};
