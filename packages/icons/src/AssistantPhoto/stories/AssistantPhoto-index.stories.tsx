import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAssistantPhotoProps } from '../AssistantPhoto.types';

import { display } from './AssistantPhoto-display.stories';
import { appearance } from './AssistantPhoto-appearance.stories';
import { size } from './AssistantPhoto-size.stories';
import { theme } from './AssistantPhoto-theme.stories';

export const AssistantPhoto = (args: IconsAssistantPhotoProps) => (
  <Icon {...args}></Icon>
);

AssistantPhoto.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AssistantPhoto.argTypes = {
  display,
  appearance,
  size,
  theme,
};
