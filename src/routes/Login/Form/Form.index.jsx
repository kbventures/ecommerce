import React from "react";
import { string } from "prop-types";
import styles from "./Form.module.css";

import EmailSvg from "../../../../public/assets/Message.svg";
import PasswordSvg from "../../../../public/assets/Lock.svg";

export default function Form({ children, type }) {
  const { labelSvg, formContainer, label } = styles;
  const icon = {
    email: <EmailSvg className={labelSvg} />,
    password: <PasswordSvg className={labelSvg} />,
  };

  return (
    <div>
      <label htmlFor={type} className={formContainer}>
        <div className={label}>
          {icon[type]}
          {children}
        </div>

        <input id={type} type={type} />
      </label>
    </div>
  );
}

Form.propTypes = {
  children: string.isRequired,
  type: string.isRequired,
};
