import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEuroSymbolProps } from './EuroSymbol.types';

export const Component = (props: IconsEuroSymbolProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>euro_symbol</Default>;
};

export default {
  Component,
};
