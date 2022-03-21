import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLastPageProps } from '../LastPage.types';

import { display } from './LastPage-display.stories';
import { appearance } from './LastPage-appearance.stories';
import { size } from './LastPage-size.stories';
import { theme } from './LastPage-theme.stories';

export const LastPage = (args: IconsLastPageProps) => (
  <Icon {...args}></Icon>
);

LastPage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LastPage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
