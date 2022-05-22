import * as React from 'react';
import { DropdownListDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: DropdownListDefaultProps) => {
  const baseClass = 'dropdownList';
  const { dropdown } = props;
  const prefix = props.prefix || '';
  // const [selectedItem, setSelectedItem] = React.useState({ id: '', label: '' });
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState({
    id: '',
    label: '',
    value: undefined,
  });
  const [cursor, setCursor] = React.useState(0);

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
            fields: ['theme', 'appearance'],
            value: 'Theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size']
  );

  const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = React.useState(false);

    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    React.useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);

      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    });
    return keyPressed;
  };

  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');

  React.useEffect(() => {
    if (dropdown?.items.length && downPress) {
      setCursor(prevState =>
        prevState < dropdown?.items.length - 1 ? prevState + 1 : prevState
      );
    }
    setSelected(dropdown?.items[cursor]);
  }, [downPress]);
  React.useEffect(() => {
    if (dropdown?.items.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
    setSelected(dropdown?.items[cursor]);
  }, [upPress]);
  React.useEffect(() => {
    if (dropdown?.items.length && enterPress) {
      setSelected(dropdown?.items[cursor]);
    }
  }, [cursor, enterPress]);

  const ListItem = ({ item, active, setSelected }) => {
    return (
      <li
        className={`item ${
          active ? 'owlui-dropdown-menu-selectedMenuItem' : ''
        }`}
        onClick={() => handleClickedItem(item)}
        id={`list-item-${item.id}`}
      >
        {item.label}
      </li>
    );
  };

  const handleClickedItem = (item) => {
    const clicked = document.querySelector(`#list-item-${item.id}`);
    console.log(clicked);
    const previouslySelected = document.querySelector('.owlui-dropdown-menu-selectedMenuItem');
    previouslySelected?.classList.remove('owlui-dropdown-menu-selectedMenuItem');
    setSelected(item);
    setCursor(item.id - 1);
    clicked?.classList.add('owlui-dropdown-menu-selectedMenuItem');
  };

  const toggleDropdown = () => {
    setDropdownOpen(dropdownOpen => !dropdownOpen);
  };

  return (
    <div {...locals}>
      <div className="container">
        <h3>{dropdown?.label}</h3>
        <button onClick={toggleDropdown}>
          Selected: {selected ? selected.label : 'none'}
        </button>
        <ul>
          {dropdownOpen &&
            dropdown?.items.map((item, i) => (
              <ListItem
                key={item.id}
                active={i == cursor}
                item={item}
                setSelected={setSelected}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default {
  Component,
};
