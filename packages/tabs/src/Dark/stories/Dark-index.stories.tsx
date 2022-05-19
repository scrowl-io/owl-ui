import * as React from 'react';
import { component as Tabs } from '../index';
import { TabsDarkProps } from '../Dark.types';

import { appearance } from './Dark-appearance.stories';
import { size } from './Dark-size.stories';
import { theme } from './Dark-theme.stories';

export const Dark = (args: TabsDarkProps) => <Tabs {...args}>Hello World</Tabs>;

Dark.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Dark.argTypes = {
  appearance,
  size,
  theme,
};
