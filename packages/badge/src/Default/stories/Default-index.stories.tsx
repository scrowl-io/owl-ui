import * as React from 'react';
import { Badge } from '../index';
import { BadgeDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { theme } from './Default-theme.stories';
import { pill } from './Default-pill.stories';
import { text } from './Default-text.stories';

export const Default = (args: BadgeDefaultProps) => (
  <>
    <h1>
      First example of the <Badge {...args}>Badge</Badge> matching its parent
    </h1>
    <h4>
      Second example of the <Badge {...args}>Badge</Badge> matching its parent
    </h4>
  </>
);

Default.args = {
  variant: variant.defaultValue,
  theme: theme.defaultValue,
  pill: pill.defaultValue,
  text: text.defaultValue,
};

Default.argTypes = {
  variant,
  theme,
  pill,
  text,
};
