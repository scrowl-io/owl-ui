import * as React from 'react';
import { component as Icon } from '../index';
import { IconsExposurePlus2Props } from '../ExposurePlus2.types';

import { display } from './ExposurePlus2-display.stories';
import { appearance } from './ExposurePlus2-appearance.stories';
import { size } from './ExposurePlus2-size.stories';
import { theme } from './ExposurePlus2-theme.stories';

export const ExposurePlus2 = (args: IconsExposurePlus2Props) => (
  <Icon {...args}></Icon>
);

ExposurePlus2.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ExposurePlus2.argTypes = {
  display,
  appearance,
  size,
  theme,
};
