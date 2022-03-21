import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWebAssetProps } from '../WebAsset.types';

import { display } from './WebAsset-display.stories';
import { appearance } from './WebAsset-appearance.stories';
import { size } from './WebAsset-size.stories';
import { theme } from './WebAsset-theme.stories';

export const WebAsset = (args: IconsWebAssetProps) => (
  <Icon {...args}></Icon>
);

WebAsset.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WebAsset.argTypes = {
  display,
  appearance,
  size,
  theme,
};
