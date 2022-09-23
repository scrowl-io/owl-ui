import * as React from 'react';
import { Carousel as BsCarousel, ThemeProvider } from 'react-bootstrap';
import { CarouselDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Carousel = (props: CarouselDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const { slides, activeIndex } = props;
  const baseClass = 'carousel';
  const prefix = props.prefix || '';
  const [activeItem, setActiveItem] = React.useState(
    activeIndex ? activeIndex : 0
  );

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'theme',
          },
          {
            fields: ['appearance'],
            value: 'Appearance',
          },
          {
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'appearance', 'theme', 'pxScale', 'slides']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['visually-hidden'] = `owlui-visually-hidden`;
  themePrefixes[`${baseClass}-item`] = `owlui-${baseClass}-item`;
  themePrefixes[`${baseClass}-caption`] = `owlui-${baseClass}-caption`;
  themePrefixes[
    `${baseClass}-control-prev-icon`
  ] = `owlui-${baseClass}-control-prev-icon`;

  const handleSelect = (selectedIndex: number) => {
    setActiveItem(selectedIndex);
  };

  return (
    <>
      <ThemeProvider prefixes={themePrefixes}>
        <BsCarousel
          {...locals}
          activeIndex={activeItem}
          onSelect={handleSelect}
        >
          {slides?.map(slide => (
            <BsCarousel.Item
              style={slide.style}
              key={slide.id}
              {...slide.bsItemProps}
            >
              {slide.backgroundContent}
              <BsCarousel.Caption {...slide.bsCaptionProps}>
                {slide.caption}
              </BsCarousel.Caption>
            </BsCarousel.Item>
          ))}
        </BsCarousel>
      </ThemeProvider>
    </>
  );
};

export default {
  Carousel,
};
