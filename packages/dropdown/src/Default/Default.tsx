import React, { useState } from 'react';
import { DropdownDefaultProps, DropdownItemProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '../../../../lib/src/utils';
import { Dropdown, ThemeProvider } from 'react-bootstrap';

export const Component = (props: DropdownDefaultProps) => {
  const baseClass = 'dropdown';
  const prefix = props.prefix || '';
  const { items, highlightSelected } = props;
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);

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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'pxScale', 'items', 'button']
  );

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

  return (
    <>
      <ThemeProvider
        prefixes={{
          dropdown: 'owlui-dropdown',
          btn: 'owlui-btn',
          'dropdown-toggle': 'owlui-dropdown-toggle',
          'dropdown-menu': 'owlui-dropdown-menu',
          'dropdown-item': 'owlui-dropdown-item',
        }}
      >
        <Dropdown {...locals} focusFirstItemOnShow="keyboard">
          <Dropdown.Toggle variant={props.variant}>
            {props.button ? props.button : <></>}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {items.map((item: DropdownItemProps, idx: number) => {
              const key = item.id || idx;
              return (
                <Dropdown.Item
                  id={`item-number-${item.id}`}
                  value={item.value}
                  onKeyDown={handleTab}
                  className={`${
                    selectedItemIdx === idx && highlightSelected ? 'active' : ''
                  }`}
                  data-index={idx}
                  key={key}
                  onClick={handleItemClick}
                  as={item.as}
                >
                  {item.label}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </ThemeProvider>
    </>
  );
};

export default {
  Component,
};
