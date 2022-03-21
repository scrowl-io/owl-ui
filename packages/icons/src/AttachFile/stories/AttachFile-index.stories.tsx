import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAttachFileProps } from '../AttachFile.types';

import { display } from './AttachFile-display.stories';
import { appearance } from './AttachFile-appearance.stories';
import { size } from './AttachFile-size.stories';
import { theme } from './AttachFile-theme.stories';

export const AttachFile = (args: IconsAttachFileProps) => (
  <Icon {...args}></Icon>
);

AttachFile.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AttachFile.argTypes = {
  display,
  appearance,
  size,
  theme,
};
