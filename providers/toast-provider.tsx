"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "bg-gray-800 text-white",
          duration: 3000,
        }}
      />
      {children}
    </>
  );
};
export { ToastProvider };
