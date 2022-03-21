import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStorageProps } from '../Storage.types';

import { display } from './Storage-display.stories';
import { appearance } from './Storage-appearance.stories';
import { size } from './Storage-size.stories';
import { theme } from './Storage-theme.stories';

export const Storage = (args: IconsStorageProps) => (
  <Icon {...args}></Icon>
);

Storage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Storage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
