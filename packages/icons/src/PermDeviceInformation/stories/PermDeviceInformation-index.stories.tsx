import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPermDeviceInformationProps } from '../PermDeviceInformation.types';

import { display } from './PermDeviceInformation-display.stories';
import { appearance } from './PermDeviceInformation-appearance.stories';
import { size } from './PermDeviceInformation-size.stories';
import { theme } from './PermDeviceInformation-theme.stories';

export const PermDeviceInformation = (args: IconsPermDeviceInformationProps) => (
  <Icon {...args}></Icon>
);

PermDeviceInformation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PermDeviceInformation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
