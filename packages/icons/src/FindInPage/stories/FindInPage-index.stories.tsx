import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFindInPageProps } from '../FindInPage.types';

import { display } from './FindInPage-display.stories';
import { appearance } from './FindInPage-appearance.stories';
import { size } from './FindInPage-size.stories';
import { theme } from './FindInPage-theme.stories';

export const FindInPage = (args: IconsFindInPageProps) => (
  <Icon {...args}></Icon>
);

FindInPage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FindInPage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
