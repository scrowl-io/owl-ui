import * as React from 'react';
import Row, { RowItem } from './Row';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTableBody';

type BodyProps = React.TableHTMLAttributes<HTMLTableElement> & {
  items: RowItem[];
};

const Body = (props: BodyProps) => {
  const { items } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.prototype.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  return (
    <tbody className={localProps.className}>
      {items && items.map((item, index) => <Row key={index} item={item} />)}
    </tbody>
  );
};

export default Body;
