import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVerifiedUserProps } from '../VerifiedUser.types';

import { display } from './VerifiedUser-display.stories';
import { appearance } from './VerifiedUser-appearance.stories';
import { size } from './VerifiedUser-size.stories';
import { theme } from './VerifiedUser-theme.stories';

export const VerifiedUser = (args: IconsVerifiedUserProps) => (
  <Icon {...args}></Icon>
);

VerifiedUser.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VerifiedUser.argTypes = {
  display,
  appearance,
  size,
  theme,
};
