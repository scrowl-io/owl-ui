import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHdrWeakProps } from '../HdrWeak.types';

import { display } from './HdrWeak-display.stories';
import { appearance } from './HdrWeak-appearance.stories';
import { size } from './HdrWeak-size.stories';
import { theme } from './HdrWeak-theme.stories';

export const HdrWeak = (args: IconsHdrWeakProps) => (
  <Icon {...args}></Icon>
);

HdrWeak.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HdrWeak.argTypes = {
  display,
  appearance,
  size,
  theme,
};
