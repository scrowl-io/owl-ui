import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCardMembershipProps } from '../CardMembership.types';

import { display } from './CardMembership-display.stories';
import { appearance } from './CardMembership-appearance.stories';
import { size } from './CardMembership-size.stories';
import { theme } from './CardMembership-theme.stories';

export const CardMembership = (args: IconsCardMembershipProps) => (
  <Icon {...args}></Icon>
);

CardMembership.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CardMembership.argTypes = {
  display,
  appearance,
  size,
  theme,
};
