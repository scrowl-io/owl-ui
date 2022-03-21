import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTextureProps } from '../Texture.types';

import { display } from './Texture-display.stories';
import { appearance } from './Texture-appearance.stories';
import { size } from './Texture-size.stories';
import { theme } from './Texture-theme.stories';

export const Texture = (args: IconsTextureProps) => (
  <Icon {...args}></Icon>
);

Texture.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Texture.argTypes = {
  display,
  appearance,
  size,
  theme,
};
