import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHeadsetMicProps } from '../HeadsetMic.types';

import { display } from './HeadsetMic-display.stories';
import { appearance } from './HeadsetMic-appearance.stories';
import { size } from './HeadsetMic-size.stories';
import { theme } from './HeadsetMic-theme.stories';

export const HeadsetMic = (args: IconsHeadsetMicProps) => (
  <Icon {...args}></Icon>
);

HeadsetMic.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

HeadsetMic.argTypes = {
  display,
  appearance,
  size,
  theme,
};
