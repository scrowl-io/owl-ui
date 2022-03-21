import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddAPhotoProps } from '../AddAPhoto.types';

import { display } from './AddAPhoto-display.stories';
import { appearance } from './AddAPhoto-appearance.stories';
import { size } from './AddAPhoto-size.stories';
import { theme } from './AddAPhoto-theme.stories';

export const AddAPhoto = (args: IconsAddAPhotoProps) => (
  <Icon {...args}></Icon>
);

AddAPhoto.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddAPhoto.argTypes = {
  display,
  appearance,
  size,
  theme,
};
