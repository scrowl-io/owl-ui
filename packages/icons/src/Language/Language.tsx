import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLanguageProps } from './Language.types';

export const Component = (props: IconsLanguageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>language</Default>;
};

export default {
  Component,
};
