import React from "react";

const AppButton = ({ title, type, className, ...rest }) => (
  <button
    className={`${className} w-full h-11 block text-sm text-white font-medium bg-primary rounded-sm`}
    type={type ?? "button"}
    {...rest}
  >
    {title}
  </button>
);

export default AppButton;
