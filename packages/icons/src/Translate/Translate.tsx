import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTranslateProps } from './Translate.types';

export const Component = (props: IconsTranslateProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>translate</Default>;
};

export default {
  Component,
};
