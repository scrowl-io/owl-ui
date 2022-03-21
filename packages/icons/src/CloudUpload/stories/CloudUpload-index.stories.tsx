import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCloudUploadProps } from '../CloudUpload.types';

import { display } from './CloudUpload-display.stories';
import { appearance } from './CloudUpload-appearance.stories';
import { size } from './CloudUpload-size.stories';
import { theme } from './CloudUpload-theme.stories';

export const CloudUpload = (args: IconsCloudUploadProps) => (
  <Icon {...args}></Icon>
);

CloudUpload.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CloudUpload.argTypes = {
  display,
  appearance,
  size,
  theme,
};
