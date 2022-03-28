import React from 'react';

export type CSSModClass = {
  localProps: React.HTMLAttributes<HTMLElement>;
  styles: Record<string, string>;
  baseClass: string;
};
