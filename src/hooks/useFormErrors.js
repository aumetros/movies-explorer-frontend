import React from "react";

export function useFormErrors() {
  const [errors, setErrors] = React.useState({
    registerName: {
      required: true,
      minLenght: true,
      maxLength: true,
      validity: true,
    },
    registerEmail: {
      required: true,
      email: true,
    },
    registerPassword: {
      required: true,
    },
    loginEmail: {
      required: true,
      email: true,
    },
    loginPassword: {
      required: true,
    },
  });

  return { errors, setErrors };
}
