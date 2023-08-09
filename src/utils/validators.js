export const validators = {
  registerName: {
    required: (value) => {
      return value === "";
    },
    minLenght: (value = "") => {
      return value.length < 2;
    },
    maxLength: (value = "") => {
      return value.length > 30;
    },
    validity: (value) => {
      const regex = new RegExp(/[^a-zа-яё -]/iu);
      return regex.test(value);
    },
  },
  registerEmail: {
    required: (value) => {
      return value === "";
    },
    email: (value) => {
      const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
      return !regex.test(value);
    },
  },
  registerPassword: {
    required: (value) => {
      return value === "";
    },
  },
  loginEmail: {
    required: (value) => {
      return value === "";
    },
    email: (value) => {
      const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
      return !regex.test(value);
    },
  },  
  loginPassword: {
    required: (value) => {
      return value === "";
    },
  },
};
