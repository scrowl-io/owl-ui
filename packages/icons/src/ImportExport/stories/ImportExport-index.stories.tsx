import * as React from 'react';
import { component as Icon } from '../index';
import { IconsImportExportProps } from '../ImportExport.types';

import { display } from './ImportExport-display.stories';
import { appearance } from './ImportExport-appearance.stories';
import { size } from './ImportExport-size.stories';
import { theme } from './ImportExport-theme.stories';

export const ImportExport = (args: IconsImportExportProps) => (
  <Icon {...args}></Icon>
);

ImportExport.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ImportExport.argTypes = {
  display,
  appearance,
  size,
  theme,
};
