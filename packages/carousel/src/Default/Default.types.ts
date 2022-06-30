import React from 'react';
import * as bs from 'react-bootstrap';

export interface CarouselCaptionProps {
  as?: React.ElementType;
  bsPrefix?: string;
}

export interface Slide {
  id: string;
  style?: React.CSSProperties;
  backgroundContent?: React.ReactNode;
  caption: React.ReactNode;
  bsItemProps?: bs.CarouselItemProps;
  bsCaptionProps?: CarouselCaptionProps;
}

export interface CarouselDefaultCommons {
  appearance?: 'Default' | 'Primary';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  slides: Slide[];
}

export type CarouselDefaultProps = CarouselDefaultCommons & bs.CarouselProps;
