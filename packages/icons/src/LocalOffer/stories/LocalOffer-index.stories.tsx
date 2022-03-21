import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalOfferProps } from '../LocalOffer.types';

import { display } from './LocalOffer-display.stories';
import { appearance } from './LocalOffer-appearance.stories';
import { size } from './LocalOffer-size.stories';
import { theme } from './LocalOffer-theme.stories';

export const LocalOffer = (args: IconsLocalOfferProps) => (
  <Icon {...args}></Icon>
);

LocalOffer.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalOffer.argTypes = {
  display,
  appearance,
  size,
  theme,
};
