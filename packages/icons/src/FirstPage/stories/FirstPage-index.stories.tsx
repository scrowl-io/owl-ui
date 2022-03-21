import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFirstPageProps } from '../FirstPage.types';

import { display } from './FirstPage-display.stories';
import { appearance } from './FirstPage-appearance.stories';
import { size } from './FirstPage-size.stories';
import { theme } from './FirstPage-theme.stories';

export const FirstPage = (args: IconsFirstPageProps) => (
  <Icon {...args}></Icon>
);

FirstPage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FirstPage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
