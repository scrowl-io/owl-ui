import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsInputCompositeProps } from '../SettingsInputComposite.types';

import { display } from './SettingsInputComposite-display.stories';
import { appearance } from './SettingsInputComposite-appearance.stories';
import { size } from './SettingsInputComposite-size.stories';
import { theme } from './SettingsInputComposite-theme.stories';

export const SettingsInputComposite = (args: IconsSettingsInputCompositeProps) => (
  <Icon {...args}></Icon>
);

SettingsInputComposite.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsInputComposite.argTypes = {
  display,
  appearance,
  size,
  theme,
};
