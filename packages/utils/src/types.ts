import React from 'react';

export type localProp = React.HTMLAttributes<HTMLElement>;

export type stylesProp = Record<string, string>;

export type CSSModClass = {
  localProps: localProp;
  styles: stylesProp;
  baseClass: string;
};

export type localProps = {
  // [key: string]: unknown;
  props: object;
  styles: {
    module: stylesProp;
    classes: {
      base: string;
      optionals: Array<{ fields: string[]; value: string }>;
    };
  };
  removables: string[];
};

export type createLocalPropsProps = Record<string, string>;

export type createStyles = {
  module: stylesProp;
  classes: {
    base: string;
    prefix: string;
    optionals: Array<{ fields: string[]; value: string }>;
  };
};
