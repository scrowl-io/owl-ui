import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFeaturedVideoProps } from '../FeaturedVideo.types';

import { display } from './FeaturedVideo-display.stories';
import { appearance } from './FeaturedVideo-appearance.stories';
import { size } from './FeaturedVideo-size.stories';
import { theme } from './FeaturedVideo-theme.stories';

export const FeaturedVideo = (args: IconsFeaturedVideoProps) => (
  <Icon {...args}></Icon>
);

FeaturedVideo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FeaturedVideo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
