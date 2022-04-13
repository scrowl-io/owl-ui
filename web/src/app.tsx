import React from 'react';
import { Default as DefaultBtn } from '@owlui/button';
import { Default as DefaultIcon } from '@owlui/icons';

const Page = () => {
  return (
    <div className="owlui-grid-container">
      <div className="owlui-grid-row">
        <div className="owlui-grid-col-xs-4">
          <DefaultBtn appearance="Primary">Hello</DefaultBtn>
          <DefaultIcon icon="school" />
        </div>
        <div className="owlui-grid-col-xs-4">4</div>
        <div className="owlui-grid-col-xs-4">4</div>
      </div>
    </div>
  );
};

export default Page;
