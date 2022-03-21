import * as React from 'react';
import { component as Icon } from '../index';
import { IconsContentPasteProps } from '../ContentPaste.types';

import { display } from './ContentPaste-display.stories';
import { appearance } from './ContentPaste-appearance.stories';
import { size } from './ContentPaste-size.stories';
import { theme } from './ContentPaste-theme.stories';

export const ContentPaste = (args: IconsContentPasteProps) => (
  <Icon {...args}></Icon>
);

ContentPaste.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ContentPaste.argTypes = {
  display,
  appearance,
  size,
  theme,
};
