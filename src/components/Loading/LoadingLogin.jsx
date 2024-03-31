import React from "react";

const LoadingLogin = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="relative !z-40 flex items-center justify-center !opacity-100">
        <div className="text-center loader" />
      </div>
    </div>
  );
};

export default LoadingLogin;
