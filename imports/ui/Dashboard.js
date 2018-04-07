import React from 'react';

import PrivateHeader from './PrivateHeader';
import AddError from './AddError';

export default () => {
  return (
    <div>
      <PrivateHeader title="OpenTextbookErrors"/>

      <div className="page-content">
        <AddError/>
        Dashboard page content.
      </div>
    </div>
  );
}
