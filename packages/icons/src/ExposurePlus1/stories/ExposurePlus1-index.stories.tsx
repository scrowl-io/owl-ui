import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExposurePlus1Props } from '../ExposurePlus1.types';

import { display } from './ExposurePlus1-display.stories';
import { appearance } from './ExposurePlus1-appearance.stories';
import { size } from './ExposurePlus1-size.stories';
import { theme } from './ExposurePlus1-theme.stories';

export const ExposurePlus1 = (args: IconsExposurePlus1Props) => (
  <Icon {...args}></Icon>
);

ExposurePlus1.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ExposurePlus1.argTypes = {
  display,
  appearance,
  size,
  theme,
};
