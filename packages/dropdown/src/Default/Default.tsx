import React, { useState } from 'react';
import { DropdownDefaultProps, DropdownItemProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '../../../../lib/src/utils';
import { Dropdown as BsDropdown, ThemeProvider } from 'react-bootstrap';

export const Dropdown = (props: DropdownDefaultProps) => {
  const baseClass = 'dropdown';
  const prefix = props.prefix || '';
  const { items } = props;
  const [selectedItemIdx, setSelectedItemIdx] = useState<number>(0);

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
        <BsDropdown {...locals} focusFirstItemOnShow="keyboard">
          <BsDropdown.Toggle variant={props.variant}>
            {props.button ? props.button : <></>}
          </BsDropdown.Toggle>
          <BsDropdown.Menu>
            {items.map((item: DropdownItemProps, idx: number) => {
              const key = item.id || idx;
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
