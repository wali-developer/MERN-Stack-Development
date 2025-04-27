import React from "react";

export const TextField = ({ type, label, placeholder, ...rest }) => {
  return (
    <div>
      <label className="inline-block text-textgray text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className="w-full h-11 rounded-sm border border-gray-300 focus:outline-primary px-5 text-sm placeholder:text-gray-300"
        type={type ?? "text"}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
