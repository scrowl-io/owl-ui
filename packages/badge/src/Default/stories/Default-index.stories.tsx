import * as React from 'react';
import { Badge } from '../index';
import { BadgeDefaultProps } from '../Default.types';

import { bg } from './Default-bg.stories';
import { theme } from './Default-theme.stories';
import { pill } from './Default-pill.stories';
import { text } from './Default-text.stories';

export const Default = (args: BadgeDefaultProps) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <h1>
      First example of the <Badge {...args}>Badge</Badge> matching its parent
    </h1>
    <h4>
      Second example of the <Badge {...args}>Badge</Badge> matching its parent
    </h4>
  </div>
);

Default.args = {
  bg: bg.defaultValue,
  theme: theme.defaultValue,
  pill: pill.defaultValue,
  text: text.defaultValue,
};

Default.argTypes = {
  bg,
  theme,
  pill,
  text,
};
