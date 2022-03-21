import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCollectionsProps } from '../Collections.types';

import { display } from './Collections-display.stories';
import { appearance } from './Collections-appearance.stories';
import { size } from './Collections-size.stories';
import { theme } from './Collections-theme.stories';

export const Collections = (args: IconsCollectionsProps) => (
  <Icon {...args}></Icon>
);

Collections.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Collections.argTypes = {
  display,
  appearance,
  size,
  theme,
};
