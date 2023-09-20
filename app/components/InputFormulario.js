import React from "react";
import ReactInputMask from "react-input-mask";

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  inputMode,
  placeholderText,
  ariaLabelName,
  value,
  mask,
  maxlength,
}) => {
  return (
    <div className=" mb-2">
      <label
        className="block text-lg text-dim-gray dark:text-primary-light mb-1"
        htmlFor={labelFor}>
        {inputLabel}
      </label>
      <ReactInputMask
        className="w-full px-5 py-2 border-2 border-black dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark shadow-sm text-md mb-5 h-[3rem]"
        type={inputType}
        inputMode={inputMode}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
        value={value}
        mask={mask}
        maxLength={maxlength}
      />
    </div>
  );
};

export default FormInput;
