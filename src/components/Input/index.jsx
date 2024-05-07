import React, { useState } from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[37px]",
};
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-black-900",
    gray_200: "bg-gray-200 text-gray-600_01",
  },
};
const sizes = {
  xs: "h-[75px] px-[35px] text-xl",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "gray_200",
      ...restProps
    },
    ref,
  ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email);
    console.log(password);
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "email") {
        setEmail(value);
        setPassword(prevPassword => prevPassword); // Maintain previous password value
      } else if (name === "password") {
        setPassword(value);
        setEmail(prevEmail => prevEmail); // Maintain previous email value
      }
      if (onChange) onChange(e);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text text-xl font-medium border border-solid rounded-[37px]  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} value={name === "email" ? email : password} {...restProps} />
          {!!suffix && suffix}
        </label>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50", "gray_200"]),
};

export { Input };
