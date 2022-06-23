import React from 'react';

export type localProp = React.HTMLAttributes<HTMLElement>;

export type stringMap = {
  [key: string]: string;
};

export type stylesProp = Record<string, string>;

export interface CSSModClass {
  localProps: localProp;
  styles: stylesProp;
  baseClass: string;
}

export interface localInnerProps {
  [key: string]: unknown;
}
export interface themePrefixesProps {
  [key: string]: string;
}

export type localStyles = {
  module: stylesProp;
  classes: {
    base: string;
    prefix: string;
    optionals: Array<{ fields: string[]; value: string }>;
    bsProps?: string[];
  };
};
