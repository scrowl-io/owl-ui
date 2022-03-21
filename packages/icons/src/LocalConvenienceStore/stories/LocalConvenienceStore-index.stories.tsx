import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalConvenienceStoreProps } from '../LocalConvenienceStore.types';

import { display } from './LocalConvenienceStore-display.stories';
import { appearance } from './LocalConvenienceStore-appearance.stories';
import { size } from './LocalConvenienceStore-size.stories';
import { theme } from './LocalConvenienceStore-theme.stories';

export const LocalConvenienceStore = (args: IconsLocalConvenienceStoreProps) => (
  <Icon {...args}></Icon>
);

LocalConvenienceStore.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalConvenienceStore.argTypes = {
  display,
  appearance,
  size,
  theme,
};
