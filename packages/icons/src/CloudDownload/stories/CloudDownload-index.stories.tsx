import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCloudDownloadProps } from '../CloudDownload.types';

import { display } from './CloudDownload-display.stories';
import { appearance } from './CloudDownload-appearance.stories';
import { size } from './CloudDownload-size.stories';
import { theme } from './CloudDownload-theme.stories';

export const CloudDownload = (args: IconsCloudDownloadProps) => (
  <Icon {...args}></Icon>
);

CloudDownload.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CloudDownload.argTypes = {
  display,
  appearance,
  size,
  theme,
};
