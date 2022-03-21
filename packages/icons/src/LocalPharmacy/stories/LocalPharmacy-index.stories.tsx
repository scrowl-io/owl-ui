import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalPharmacyProps } from '../LocalPharmacy.types';

import { display } from './LocalPharmacy-display.stories';
import { appearance } from './LocalPharmacy-appearance.stories';
import { size } from './LocalPharmacy-size.stories';
import { theme } from './LocalPharmacy-theme.stories';

export const LocalPharmacy = (args: IconsLocalPharmacyProps) => (
  <Icon {...args}></Icon>
);

LocalPharmacy.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalPharmacy.argTypes = {
  display,
  appearance,
  size,
  theme,
};
