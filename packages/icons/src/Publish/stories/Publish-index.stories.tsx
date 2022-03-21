import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPublishProps } from '../Publish.types';

import { display } from './Publish-display.stories';
import { appearance } from './Publish-appearance.stories';
import { size } from './Publish-size.stories';
import { theme } from './Publish-theme.stories';

export const Publish = (args: IconsPublishProps) => (
  <Icon {...args}></Icon>
);

Publish.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Publish.argTypes = {
  display,
  appearance,
  size,
  theme,
};
