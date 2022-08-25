import React from "react";
import { string } from "prop-types";
import styles from "./FormInput.module.css";

import EmailSvg from "../../../../public/assets/message.svg";
import PasswordSvg from "../../../../public/assets/lock.svg";

export default function FormInput({ children, type }) {
  const { labelSvg, formInputContainer, label } = styles;
  const icon = {
    email: <EmailSvg className={labelSvg} />,
    password: <PasswordSvg className={labelSvg} />,
  };

  return (
    <label htmlFor={type} className={formInputContainer}>
      <div className={label}>
        {icon[type]}
        {children}
      </div>

      <input id={type} type={type} />
    </label>
  );
}

FormInput.propTypes = {
  children: string.isRequired,
  type: string.isRequired,
};
