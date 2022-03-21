import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCallToActionProps } from '../CallToAction.types';

import { display } from './CallToAction-display.stories';
import { appearance } from './CallToAction-appearance.stories';
import { size } from './CallToAction-size.stories';
import { theme } from './CallToAction-theme.stories';

export const CallToAction = (args: IconsCallToActionProps) => (
  <Icon {...args}></Icon>
);

CallToAction.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CallToAction.argTypes = {
  display,
  appearance,
  size,
  theme,
};
