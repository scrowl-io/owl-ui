import * as React from 'react';
import {
  DropdownListDefaultProps,
  DropDownContentItemProps,
} from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: DropdownListDefaultProps) => {
  const baseClass = 'dropdownList';
  const { dropdown } = props;
  const prefix = props.prefix || '';
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<DropDownContentItemProps>();
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

  const useKeyPress = (targetKey: string) => {
    const [keyPressed, setKeyPressed] = React.useState(false);

    const downHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }: { key: string }) => {
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
  const tabPress = useKeyPress('Tab');

  React.useEffect(() => {
    if (dropdown?.items.length && downPress) {
      if (!dropdownOpen) {
        setDropdownOpen(true);
      }
      if (dropdown.items.length) {
        setCursor(prevState =>
          typeof dropdown?.items?.length === 'number' &&
          prevState < dropdown?.items?.length - 1
            ? prevState + 1
            : prevState
        );
      }
    }
    setSelected(
      dropdown?.items[cursor as unknown as keyof DropDownContentItemProps]
    );
    const selectedItem = document.querySelector(
      '.owlui-dropdown-menu-selectedMenuItem'
    );
    selectedItem?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [downPress]);
  React.useEffect(() => {
    if (dropdown?.items.length && upPress) {
      if (!dropdownOpen) {
        setDropdownOpen(true);
      }
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
    setSelected(
      dropdown?.items[cursor as unknown as keyof DropDownContentItemProps]
    );
    const selectedItem = document.querySelector(
      '.owlui-dropdown-menu-selectedMenuItem'
    );
    selectedItem?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [upPress]);
  React.useEffect(() => {
    if (dropdown?.items.length && enterPress) {
      setSelected(
        dropdown?.items[cursor as unknown as keyof DropDownContentItemProps]
      );
    }
  }, [cursor, enterPress]);
  React.useEffect(() => {
    if (dropdown?.items.length && tabPress) {
      if (dropdownOpen) {
        setDropdownOpen(false);
      }
    }
  }, [tabPress]);
  const handleClickOutside = (ref: React.MutableRefObject<HTMLDivElement>) => {
    React.useEffect(() => {
      const closeList = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', closeList);
      return () => {
        document.removeEventListener('mousedown', closeList);
      };
    }, [ref]);
  };

  // type itemType = { id: number; name: string };

  const ListItem = ({
    item,
    active,
  }: {
    item: DropDownContentItemProps;
    active: boolean;
  }) => {
    return (
      <li
        className={`item ${
          active ? 'owlui-dropdown-menu-selectedMenuItem' : ''
        }`}
        onClick={() => handleClickedItem(item)}
        id={`list-item-${item.id}`}
        role="presentation"
      >
        {item.label}
      </li>
    );
  };

  const handleClickedItem = (item: DropDownContentItemProps) => {
    const clicked = document.querySelector(`#list-item-${item.id}`);
    const previouslySelected = document.querySelector(
      '.owlui-dropdown-menu-selectedMenuItem'
    );
    previouslySelected?.classList.remove(
      'owlui-dropdown-menu-selectedMenuItem'
    );
    setSelected(item);
    setCursor(parseInt(item.id) - 1);
    clicked?.classList.add('owlui-dropdown-menu-selectedMenuItem');
    const button = document.querySelector('#expand-list-button');
    (button as HTMLElement)?.focus();
  };

  const toggleDropdown = () => {
    setDropdownOpen(dropdownOpen => !dropdownOpen);
    // const previouslySelected = document.querySelector(
    //   '.owlui-dropdown-menu-selectedMenuItem'
    // );
    // previouslySelected?.scrollIntoView(true);
  };

  // const wrapperRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  handleClickOutside(wrapperRef);

  return (
    <div {...locals}>
      <div className="container" ref={wrapperRef}>
        <h3>{dropdown?.label}</h3>
        <button id="expand-list-button" onClick={toggleDropdown}>
          Selected: {selected ? selected.label : 'none'}
        </button>
        <ul role="listbox">
          {dropdownOpen &&
            dropdown?.items.map((item: DropDownContentItemProps, i: number) => (
              <ListItem key={item.id} active={i == cursor} item={item} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default {
  Component,
};
