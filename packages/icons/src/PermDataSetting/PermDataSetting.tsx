import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPermDataSettingProps } from './PermDataSetting.types';

export const Component = (props: IconsPermDataSettingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>perm_data_setting</Default>;
};

export default {
  Component,
};
