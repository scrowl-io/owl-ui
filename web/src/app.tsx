import React from 'react';
import * as owl from '@owlui/lib';

const Page = () => {
  return (
    <div className="owlui-grid-container">
      <div className="owlui-grid-row">
        <div className="owlui-grid-col-xs-4">
          <owl.Button>Hello</owl.Button>
          <owl.Icon icon="school" />
        </div>
        <div className="owlui-grid-col-xs-4">4</div>
        <div className="owlui-grid-col-xs-4">4</div>
      </div>
    </div>
  );
};

export default Page;
