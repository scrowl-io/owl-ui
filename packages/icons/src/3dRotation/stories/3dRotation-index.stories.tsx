import * as React from 'react';
import { component as Icon } from '../index';
import { Icons3dRotationProps } from '../3dRotation.types';

import { display } from './3dRotation-display.stories';
import { appearance } from './3dRotation-appearance.stories';
import { size } from './3dRotation-size.stories';
import { theme } from './3dRotation-theme.stories';

export const 3dRotation = (args: Icons3dRotationProps) => (
  <Icon {...args}></Icon>
);

3dRotation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

3dRotation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
