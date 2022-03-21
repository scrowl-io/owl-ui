import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsPhoneProps } from './SettingsPhone.types';

export const Component = (props: IconsSettingsPhoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_phone</Default>;
};

export default {
  Component,
};
