import * as React from 'react';
import { Carousel, ThemeProvider } from 'react-bootstrap';
import { CarouselDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/utils';

export const Component = (props: CarouselDefaultProps) => {
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
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'appearance', 'theme', 'size', 'slides']
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
        <Carousel {...locals} activeIndex={activeItem} onSelect={handleSelect}>
          {slides?.map(slide => (
            <Carousel.Item
              style={slide.style}
              key={slide.id}
              {...slide.bsItemProps}
            >
              {slide.backgroundContent}
              <Carousel.Caption {...slide.bsCaptionProps}>
                {slide.caption}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </ThemeProvider>
    </>
  );
};

export default {
  Component,
};
