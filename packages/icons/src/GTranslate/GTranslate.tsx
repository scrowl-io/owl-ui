import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGTranslateProps } from './GTranslate.types';

export const Component = (props: IconsGTranslateProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>g_translate</Default>;
};

export default {
  Component,
};
