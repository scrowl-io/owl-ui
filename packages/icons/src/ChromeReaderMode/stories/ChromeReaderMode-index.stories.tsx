import * as React from 'react';
import { component as Icon } from '../index';
import { IconsChromeReaderModeProps } from '../ChromeReaderMode.types';

import { display } from './ChromeReaderMode-display.stories';
import { appearance } from './ChromeReaderMode-appearance.stories';
import { size } from './ChromeReaderMode-size.stories';
import { theme } from './ChromeReaderMode-theme.stories';

export const ChromeReaderMode = (args: IconsChromeReaderModeProps) => (
  <Icon {...args}></Icon>
);

ChromeReaderMode.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ChromeReaderMode.argTypes = {
  display,
  appearance,
  size,
  theme,
};
