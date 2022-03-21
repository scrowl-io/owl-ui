import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSdStorageProps } from '../SdStorage.types';

import { display } from './SdStorage-display.stories';
import { appearance } from './SdStorage-appearance.stories';
import { size } from './SdStorage-size.stories';
import { theme } from './SdStorage-theme.stories';

export const SdStorage = (args: IconsSdStorageProps) => (
  <Icon {...args}></Icon>
);

SdStorage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SdStorage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
