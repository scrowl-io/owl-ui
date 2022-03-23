import React from 'react';
import { Default as DefaultBtn } from '@owlui/button';

const Page = () => {
  return (
    <div className="owl-container">
      <div className="owl-row">
        <div className="owl-col-xs-4">
          <DefaultBtn appearance="Primary">Hello</DefaultBtn>
        </div>
        <div className="owl-col-xs-4">4</div>
        <div className="owl-col-xs-4">4</div>
      </div>
    </div>
  );
};

export default Page;
