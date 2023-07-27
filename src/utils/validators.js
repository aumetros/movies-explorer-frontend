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
  },
  registerEmail: {
    required: (value) => {
      return value === "";
    },
    email: (value) => {
      const regex = new RegExp("/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i");
      return !regex.test(value);
    },
  },
  registerPassword: {
    required: (value) => {
      return value === "";
    },
    notCyrillic: (value) => {
      const regex = new RegExp("/^[\u0400-\u04FF]+$/");
      return regex.test(value);
    },
  },
  loginEmail: {
    required: (value) => {
      return value === "";
    },
    email: (value) => {
      const regex = new RegExp("/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i");
      return !regex.test(value);
    },
  },  
  loginPassword: {
    required: (value) => {
      return value === "";
    },
    notCyrillic: (value) => {
      const regex = new RegExp("/^[\u0400-\u04FF]+$/");
      return regex.test(value);
    },
  },
};
