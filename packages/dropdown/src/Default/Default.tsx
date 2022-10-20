import React, { useState } from 'react';
import { DropdownDefaultProps, DropdownItemProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';
import { Dropdown as BsDropdown, ThemeProvider } from 'react-bootstrap';

export const Dropdown = ({
  className,
  pxScale,
  items,
  button,
  showSelected,
  ...props
}: DropdownDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'dropdown';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);

  const getItemIdx = (
    ev:
      | React.KeyboardEvent<
          HTMLAnchorElement | HTMLButtonElement | HTMLLIElement | HTMLDivElement
        >
      | React.MouseEvent<HTMLElement>
  ): number => {
    if (!ev.currentTarget.dataset.index) {
      console.error('dropdown item id not set', event);
      return -1;
    }

    const idx = parseInt(ev.currentTarget.dataset.index);

    if (isNaN(idx)) {
      console.error(
        'unable to set dropdown: malformed values',
        idx,
        ev.currentTarget.dataset.index
      );
      return -1;
    }

    return idx;
  };

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    const idx = getItemIdx(event);

    if (idx === -1) {
      return;
    }

    setSelectedItemIdx(idx);
  };

  const handleTab = (
    event: React.KeyboardEvent<
      HTMLAnchorElement | HTMLButtonElement | HTMLLIElement | HTMLDivElement
    >
  ) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const idx = getItemIdx(event);

      if (idx === -1) {
        return;
      }

      setSelectedItemIdx(idx);
    }
  };

  const renderStatefulItem = (
    item: DropdownItemProps,
    key: number | string,
    idx: number
  ) => {
    return (
      <BsDropdown.Item
        id={`item-number-${item.id}`}
        value={item.value}
        onKeyDown={handleTab}
        className={`${selectedItemIdx === idx ? 'active' : ''}`}
        data-index={idx}
        key={key}
        onClick={handleItemClick}
        as={item.as}
      >
        {item.label}
      </BsDropdown.Item>
    );
  };

  const renderStatelessItem = (
    item: DropdownItemProps,
    key: number | string,
    idx: number
  ) => {
    return (
      <BsDropdown.Item
        id={`item-number-${item.id}`}
        value={item.value}
        data-index={idx}
        key={key}
        as={item.as}
      >
        {item.label}
      </BsDropdown.Item>
    );
  };

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['btn'] = `owlui-btn`;
  themePrefixes['dropdown-toggle'] = `owlui-${baseClass}-toggle`;
  themePrefixes['dropdown-menu'] = `owlui-${baseClass}-menu`;
  themePrefixes['dropdown-item'] = `owlui-${baseClass}-item`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <>
      <ThemeProvider prefixes={themePrefixes}>
        <BsDropdown
          className={classes}
          {...props}
          focusFirstItemOnShow="keyboard"
        >
          <BsDropdown.Toggle variant={props.variant}>
            {button ? button : <></>}
          </BsDropdown.Toggle>
          <BsDropdown.Menu>
            {items.map((item: DropdownItemProps, idx: number) => {
              const key = item.id || idx;
              if (showSelected) {
                return renderStatefulItem(item, key, idx);
              } else {
                return renderStatelessItem(item, key, idx);
              }
            })}
          </BsDropdown.Menu>
        </BsDropdown>
      </ThemeProvider>
    </>
  );
};

export default {
  Dropdown,
};
