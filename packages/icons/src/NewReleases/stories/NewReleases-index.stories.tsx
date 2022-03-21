import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNewReleasesProps } from '../NewReleases.types';

import { display } from './NewReleases-display.stories';
import { appearance } from './NewReleases-appearance.stories';
import { size } from './NewReleases-size.stories';
import { theme } from './NewReleases-theme.stories';

export const NewReleases = (args: IconsNewReleasesProps) => (
  <Icon {...args}></Icon>
);

NewReleases.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NewReleases.argTypes = {
  display,
  appearance,
  size,
  theme,
};
