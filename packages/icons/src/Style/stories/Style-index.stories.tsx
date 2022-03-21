import * as React from 'react';
import { component as Icon } from '../index';
import { IconsStyleProps } from '../Style.types';

import { display } from './Style-display.stories';
import { appearance } from './Style-appearance.stories';
import { size } from './Style-size.stories';
import { theme } from './Style-theme.stories';

export const Style = (args: IconsStyleProps) => (
  <Icon {...args}></Icon>
);

Style.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Style.argTypes = {
  display,
  appearance,
  size,
  theme,
};
