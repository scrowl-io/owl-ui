import React, { useState } from 'react';
import { Modal } from '../index';
import { ModalDefaultProps } from '../Default.types';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';
import { fullscreen } from './Default-fullscreen.stories';
import { centered } from './Default-centered.stories';
import { scrollable } from './Default-scrollable.stories';
import { Button } from '../../../../button/src/index';

export const Default = (args: ModalDefaultProps) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const header = {
    bsProps: {
      closeButton: true,
      closeLabel: 'Close',
    },
    content: <h2>Modal Header</h2>,
  };
  const body = {
    content: (
      <>
        <h6>Inside the modal body</h6>
        <hr />
        <p>Example of text inside the modal body.</p>
      </>
    ),
  };
  const footer = {
    content: <Button>Save Changes</Button>,
  };

  return (
    <div>
      <button onClick={toggleModal}>Click Me</button>
      <Modal
        {...args}
        show={showModal}
        onHide={toggleModal}
        header={header}
        body={body}
        footer={footer}
      />
    </div>
  );
};

Default.args = {
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  fullscreen: fullscreen.defaultValue,
  centered: centered.defaultValue,
  scrollable: scrollable.defaultValue,
};

Default.argTypes = {
  pxScale,
  theme,
  fullscreen,
  centered,
  scrollable,
};
