import * as React from 'react';
import { component as Icon } from '../index';
import { IconsOpenInBrowserProps } from '../OpenInBrowser.types';

import { display } from './OpenInBrowser-display.stories';
import { appearance } from './OpenInBrowser-appearance.stories';
import { size } from './OpenInBrowser-size.stories';
import { theme } from './OpenInBrowser-theme.stories';

export const OpenInBrowser = (args: IconsOpenInBrowserProps) => (
  <Icon {...args}></Icon>
);

OpenInBrowser.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

OpenInBrowser.argTypes = {
  display,
  appearance,
  size,
  theme,
};
