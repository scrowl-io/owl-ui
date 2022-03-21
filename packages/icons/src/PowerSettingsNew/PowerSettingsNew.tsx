import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPowerSettingsNewProps } from './PowerSettingsNew.types';

export const Component = (props: IconsPowerSettingsNewProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>power_settings_new</Default>;
};

export default {
  Component,
};
