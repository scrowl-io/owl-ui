import * as React from 'react';
import { DropdownDefaultProps, DropDownItemProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';
import { Dropdown, ThemeProvider } from 'react-bootstrap';

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
            value: 'theme',
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

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
    dropdown.selectedItem = dropdown?.items[index]?.label;
  };

  const handleTab =
    (index: number) => (event: React.KeyboardEvent<HTMLElement>) => {
      switch (event.key) {
        case 'Tab':
          event.preventDefault();
          setSelectedItem(index);
          dropdown.selectedItem = dropdown?.items[index]?.label;
          setShow(!show);
          break;
        default:
          break;
      }
    };

  const toggleShow = () => {
    setShow(!show);
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
        <div className={styleMod.dropdownContainer}>
          <h2>{dropdown?.label}</h2>
          <Dropdown
            onToggle={toggleShow}
            show={show}
            {...locals}
            focusFirstItemOnShow="keyboard"
          >
            <Dropdown.Toggle variant={props.variant} id="dropdown-basic">
              {selectedItem
                ? dropdown?.items[selectedItem]?.label
                : dropdown?.items[0]?.label}
            </Dropdown.Toggle>
            <Dropdown.Menu
              as="ul"
              className={`dropdown-item ${show ? 'owlui-show' : ''}`}
            >
              {dropdown?.items?.map((item: DropDownItemProps, index: number) => {
                  return (
                    <Dropdown.Item
                      id={`item-number-${item.id}`}
                      as="button"
                      onKeyDown={handleTab(index)}
                      className={`${
                        selectedItem === index ? 'owlui-active' : ''
                      }`}
                      key={item.id}
                      onClick={() => handleItemClick(index)}
                    >
                      {item.label}
                    </Dropdown.Item>
                  );
                }
              )}
            </Dropdown.Menu>
          </Dropdown>
          <h4>
            {dropdown?.selectedItem
              ? `${dropdown?.selectedItem} is currently selected`
              : 'Please select an item'}
          </h4>
        </div>
      </ThemeProvider>
    </>
  );
};

export default {
  Component,
};
