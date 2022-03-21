import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatListBulletedProps } from './FormatListBulleted.types';

export const Component = (props: IconsFormatListBulletedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_list_bulleted</Default>;
};

export default {
  Component,
};
