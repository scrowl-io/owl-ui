import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFileUploadProps } from '../FileUpload.types';

import { display } from './FileUpload-display.stories';
import { appearance } from './FileUpload-appearance.stories';
import { size } from './FileUpload-size.stories';
import { theme } from './FileUpload-theme.stories';

export const FileUpload = (args: IconsFileUploadProps) => (
  <Icon {...args}></Icon>
);

FileUpload.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FileUpload.argTypes = {
  display,
  appearance,
  size,
  theme,
};
