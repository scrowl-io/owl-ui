import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVideogameAssetProps } from '../VideogameAsset.types';

import { display } from './VideogameAsset-display.stories';
import { appearance } from './VideogameAsset-appearance.stories';
import { size } from './VideogameAsset-size.stories';
import { theme } from './VideogameAsset-theme.stories';

export const VideogameAsset = (args: IconsVideogameAssetProps) => (
  <Icon {...args}></Icon>
);

VideogameAsset.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VideogameAsset.argTypes = {
  display,
  appearance,
  size,
  theme,
};
