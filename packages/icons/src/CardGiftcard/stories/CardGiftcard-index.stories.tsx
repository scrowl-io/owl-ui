import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCardGiftcardProps } from '../CardGiftcard.types';

import { display } from './CardGiftcard-display.stories';
import { appearance } from './CardGiftcard-appearance.stories';
import { size } from './CardGiftcard-size.stories';
import { theme } from './CardGiftcard-theme.stories';

export const CardGiftcard = (args: IconsCardGiftcardProps) => (
  <Icon {...args}></Icon>
);

CardGiftcard.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CardGiftcard.argTypes = {
  display,
  appearance,
  size,
  theme,
};
