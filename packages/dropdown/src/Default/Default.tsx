import * as React from 'react';
import { DropdownDefaultProps, DropDownItemProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';
import { Button, Card, Dropdown, ThemeProvider } from 'react-bootstrap';
import DropDownButton from 'react-bootstrap/DropdownButton';

export const Component = (props: DropdownDefaultProps) => {
  const baseClass = 'dropdown';
  const prefix = props.prefix || '';
  const { dropdown } = props;
  const [show, setShow] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<number | null>(null);

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
            value: 'Theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size', 'dropdown']
  );

  const handleSelect = (index: number) => {
    setSelectedItem(index);
    dropdown.selectedItem = dropdown?.items[index]?.label;
  };

  const handleKeyDown = (option, index) => (event) => {
    switch (event.key) {
      case 'Tab':
        event.preventDefault();
        setSelectedItem(index);
        setShow(!show);
        break;
      default:
        break;
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
        <h2>{dropdown?.label}</h2>
        <Dropdown onToggle={() => setShow(!show)} show={show} {...locals}>
          <Dropdown.Toggle {...locals} id="dropdown-basic">
            {selectedItem
              ? dropdown?.items[selectedItem]?.label
              : dropdown?.items[0]?.label}
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className={`${show ? 'owlui-show' : ''}`}
            aria-activedescendant="item-number-2"
          >
            {dropdown?.items?.map((item: DropDownItemProps, index: number) => {
              return (
                <Dropdown.Item
                  id={`item-number-${item.id}`}
                  as="button"
                  onKeyDown={handleKeyDown(item, index)}
                  className={`${selectedItem === index ? 'owlui-active' : ''}`}
                  key={item.id}
                  onClick={() => handleSelect(index)}
                  href={`#/action-${item.id}`}
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
