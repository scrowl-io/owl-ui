import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStoreProps } from '../Store.types';

import { display } from './Store-display.stories';
import { appearance } from './Store-appearance.stories';
import { size } from './Store-size.stories';
import { theme } from './Store-theme.stories';

export const Store = (args: IconsStoreProps) => (
  <Icon {...args}></Icon>
);

Store.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Store.argTypes = {
  display,
  appearance,
  size,
  theme,
};
