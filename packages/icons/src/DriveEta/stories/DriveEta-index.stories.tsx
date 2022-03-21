import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDriveEtaProps } from '../DriveEta.types';

import { display } from './DriveEta-display.stories';
import { appearance } from './DriveEta-appearance.stories';
import { size } from './DriveEta-size.stories';
import { theme } from './DriveEta-theme.stories';

export const DriveEta = (args: IconsDriveEtaProps) => (
  <Icon {...args}></Icon>
);

DriveEta.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DriveEta.argTypes = {
  display,
  appearance,
  size,
  theme,
};
