import React from "react";

import FormInput from "../FormInput/FormInput";

export default function LoginForm() {
  return (
    <form>
      <FormInput type="email">Email</FormInput>
      <FormInput type="password">Password</FormInput>
    </form>
  );
}
