import React from 'react';

export type localProp = React.HTMLAttributes<HTMLElement>;

export type stylesProp = Record<string, string>;

export type CSSModClass = {
  localProps: localProp;
  styles: stylesProp;
  baseClass: string;
};
