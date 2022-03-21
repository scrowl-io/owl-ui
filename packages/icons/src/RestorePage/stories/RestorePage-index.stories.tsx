import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRestorePageProps } from '../RestorePage.types';

import { display } from './RestorePage-display.stories';
import { appearance } from './RestorePage-appearance.stories';
import { size } from './RestorePage-size.stories';
import { theme } from './RestorePage-theme.stories';

export const RestorePage = (args: IconsRestorePageProps) => (
  <Icon {...args}></Icon>
);

RestorePage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RestorePage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
