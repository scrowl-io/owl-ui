import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDeleteForeverProps } from '../DeleteForever.types';

import { display } from './DeleteForever-display.stories';
import { appearance } from './DeleteForever-appearance.stories';
import { size } from './DeleteForever-size.stories';
import { theme } from './DeleteForever-theme.stories';

export const DeleteForever = (args: IconsDeleteForeverProps) => (
  <Icon {...args}></Icon>
);

DeleteForever.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DeleteForever.argTypes = {
  display,
  appearance,
  size,
  theme,
};
