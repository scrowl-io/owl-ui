import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalLaundryServiceProps } from '../LocalLaundryService.types';

import { display } from './LocalLaundryService-display.stories';
import { appearance } from './LocalLaundryService-appearance.stories';
import { size } from './LocalLaundryService-size.stories';
import { theme } from './LocalLaundryService-theme.stories';

export const LocalLaundryService = (args: IconsLocalLaundryServiceProps) => (
  <Icon {...args}></Icon>
);

LocalLaundryService.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalLaundryService.argTypes = {
  display,
  appearance,
  size,
  theme,
};
