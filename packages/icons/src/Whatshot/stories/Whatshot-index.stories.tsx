import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWhatshotProps } from '../Whatshot.types';

import { display } from './Whatshot-display.stories';
import { appearance } from './Whatshot-appearance.stories';
import { size } from './Whatshot-size.stories';
import { theme } from './Whatshot-theme.stories';

export const Whatshot = (args: IconsWhatshotProps) => (
  <Icon {...args}></Icon>
);

Whatshot.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Whatshot.argTypes = {
  display,
  appearance,
  size,
  theme,
};
