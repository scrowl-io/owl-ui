import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAttachmentProps } from '../Attachment.types';

import { display } from './Attachment-display.stories';
import { appearance } from './Attachment-appearance.stories';
import { size } from './Attachment-size.stories';
import { theme } from './Attachment-theme.stories';

export const Attachment = (args: IconsAttachmentProps) => (
  <Icon {...args}></Icon>
);

Attachment.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Attachment.argTypes = {
  display,
  appearance,
  size,
  theme,
};
