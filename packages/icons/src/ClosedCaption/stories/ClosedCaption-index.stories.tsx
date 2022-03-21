import * as React from 'react';
import { component as Icon } from '../index';
import { IconsClosedCaptionProps } from '../ClosedCaption.types';

import { display } from './ClosedCaption-display.stories';
import { appearance } from './ClosedCaption-appearance.stories';
import { size } from './ClosedCaption-size.stories';
import { theme } from './ClosedCaption-theme.stories';

export const ClosedCaption = (args: IconsClosedCaptionProps) => (
  <Icon {...args}></Icon>
);

ClosedCaption.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ClosedCaption.argTypes = {
  display,
  appearance,
  size,
  theme,
};
