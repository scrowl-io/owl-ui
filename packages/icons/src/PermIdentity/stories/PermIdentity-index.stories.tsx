import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPermIdentityProps } from '../PermIdentity.types';

import { display } from './PermIdentity-display.stories';
import { appearance } from './PermIdentity-appearance.stories';
import { size } from './PermIdentity-size.stories';
import { theme } from './PermIdentity-theme.stories';

export const PermIdentity = (args: IconsPermIdentityProps) => (
  <Icon {...args}></Icon>
);

PermIdentity.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PermIdentity.argTypes = {
  display,
  appearance,
  size,
  theme,
};
