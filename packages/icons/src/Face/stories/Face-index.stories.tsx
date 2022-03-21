import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFaceProps } from '../Face.types';

import { display } from './Face-display.stories';
import { appearance } from './Face-appearance.stories';
import { size } from './Face-size.stories';
import { theme } from './Face-theme.stories';

export const Face = (args: IconsFaceProps) => (
  <Icon {...args}></Icon>
);

Face.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Face.argTypes = {
  display,
  appearance,
  size,
  theme,
};
