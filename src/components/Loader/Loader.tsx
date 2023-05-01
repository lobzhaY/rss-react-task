import React from 'react';

export default function Loader() {
  return (
    <div className="load-position">
      <div className="lds-ellipsis" data-testid="roller">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
