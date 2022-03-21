import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTagFacesProps } from '../TagFaces.types';

import { display } from './TagFaces-display.stories';
import { appearance } from './TagFaces-appearance.stories';
import { size } from './TagFaces-size.stories';
import { theme } from './TagFaces-theme.stories';

export const TagFaces = (args: IconsTagFacesProps) => (
  <Icon {...args}></Icon>
);

TagFaces.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TagFaces.argTypes = {
  display,
  appearance,
  size,
  theme,
};
