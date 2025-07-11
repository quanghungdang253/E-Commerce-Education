import React from 'react';
import { Circles } from 'react-loader-spinner';

function TopLoadingBar({ isLoading = true }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <Circles
        height="120"
        width="120"
        color="#29d"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}

export default TopLoadingBar;
