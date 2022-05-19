import * as React from 'react';
import { component as Hello } from '../index';
import { HelloWorldProps } from '../World.types';

import { appearance } from './World-appearance.stories';
import { size } from './World-size.stories';
import { theme } from './World-theme.stories';

export const World = (args: HelloWorldProps) => <Hello {...args}>Hello World</Hello>;

World.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

World.argTypes = {
  appearance,
  size,
  theme,
};
