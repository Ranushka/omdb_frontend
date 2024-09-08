import React, { ReactNode } from 'react';

const PlaceholderMsg: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-24 p-2 text-center">
      {children}
    </div>
  );
};

export default PlaceholderMsg;
