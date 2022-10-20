import * as React from 'react';
import { Carousel as BsCarousel, ThemeProvider } from 'react-bootstrap';
import { CarouselDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Carousel = ({
  className,
  appearance,
  pxScale,
  slides,
  activeIndex,
  ...props
}: CarouselDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'carousel';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'Appearance',
        value: appearance,
      },
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });
  const [activeItem, setActiveItem] = React.useState(
    activeIndex ? activeIndex : 0
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

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <>
      <ThemeProvider prefixes={themePrefixes}>
        <BsCarousel
          className={classes}
          {...props}
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
