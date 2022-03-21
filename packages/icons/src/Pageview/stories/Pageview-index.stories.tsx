import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPageviewProps } from '../Pageview.types';

import { display } from './Pageview-display.stories';
import { appearance } from './Pageview-appearance.stories';
import { size } from './Pageview-size.stories';
import { theme } from './Pageview-theme.stories';

export const Pageview = (args: IconsPageviewProps) => (
  <Icon {...args}></Icon>
);

Pageview.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Pageview.argTypes = {
  display,
  appearance,
  size,
  theme,
};
