import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhoneInTalkProps } from '../PhoneInTalk.types';

import { display } from './PhoneInTalk-display.stories';
import { appearance } from './PhoneInTalk-appearance.stories';
import { size } from './PhoneInTalk-size.stories';
import { theme } from './PhoneInTalk-theme.stories';

export const PhoneInTalk = (args: IconsPhoneInTalkProps) => (
  <Icon {...args}></Icon>
);

PhoneInTalk.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhoneInTalk.argTypes = {
  display,
  appearance,
  size,
  theme,
};
