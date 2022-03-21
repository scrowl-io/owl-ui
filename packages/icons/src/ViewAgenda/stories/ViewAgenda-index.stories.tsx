import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewAgendaProps } from '../ViewAgenda.types';

import { display } from './ViewAgenda-display.stories';
import { appearance } from './ViewAgenda-appearance.stories';
import { size } from './ViewAgenda-size.stories';
import { theme } from './ViewAgenda-theme.stories';

export const ViewAgenda = (args: IconsViewAgendaProps) => (
  <Icon {...args}></Icon>
);

ViewAgenda.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewAgenda.argTypes = {
  display,
  appearance,
  size,
  theme,
};
