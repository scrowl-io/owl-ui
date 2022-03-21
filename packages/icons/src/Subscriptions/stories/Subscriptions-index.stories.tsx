import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSubscriptionsProps } from '../Subscriptions.types';

import { display } from './Subscriptions-display.stories';
import { appearance } from './Subscriptions-appearance.stories';
import { size } from './Subscriptions-size.stories';
import { theme } from './Subscriptions-theme.stories';

export const Subscriptions = (args: IconsSubscriptionsProps) => (
  <Icon {...args}></Icon>
);

Subscriptions.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Subscriptions.argTypes = {
  display,
  appearance,
  size,
  theme,
};
