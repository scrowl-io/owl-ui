import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPowerSettingsNewProps } from '../PowerSettingsNew.types';

import { display } from './PowerSettingsNew-display.stories';
import { appearance } from './PowerSettingsNew-appearance.stories';
import { size } from './PowerSettingsNew-size.stories';
import { theme } from './PowerSettingsNew-theme.stories';

export const PowerSettingsNew = (args: IconsPowerSettingsNewProps) => (
  <Icon {...args}></Icon>
);

PowerSettingsNew.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PowerSettingsNew.argTypes = {
  display,
  appearance,
  size,
  theme,
};
