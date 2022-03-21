import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTextsmsProps } from './Textsms.types';

export const Component = (props: IconsTextsmsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>textsms</Default>;
};

export default {
  Component,
};
