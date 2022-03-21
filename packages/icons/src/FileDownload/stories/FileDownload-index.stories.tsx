import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFileDownloadProps } from '../FileDownload.types';

import { display } from './FileDownload-display.stories';
import { appearance } from './FileDownload-appearance.stories';
import { size } from './FileDownload-size.stories';
import { theme } from './FileDownload-theme.stories';

export const FileDownload = (args: IconsFileDownloadProps) => (
  <Icon {...args}></Icon>
);

FileDownload.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FileDownload.argTypes = {
  display,
  appearance,
  size,
  theme,
};
