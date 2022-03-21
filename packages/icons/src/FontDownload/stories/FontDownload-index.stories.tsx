import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFontDownloadProps } from '../FontDownload.types';

import { display } from './FontDownload-display.stories';
import { appearance } from './FontDownload-appearance.stories';
import { size } from './FontDownload-size.stories';
import { theme } from './FontDownload-theme.stories';

export const FontDownload = (args: IconsFontDownloadProps) => (
  <Icon {...args}></Icon>
);

FontDownload.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FontDownload.argTypes = {
  display,
  appearance,
  size,
  theme,
};
