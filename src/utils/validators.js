import { regEmail, regName } from "./constants";

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
      const regex = new RegExp(regName);
      return regex.test(value);
    },
  },
  registerEmail: {
    required: (value) => {
      return value === "";
    },
    email: (value) => {
      const regex = new RegExp(regEmail);
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
      const regex = new RegExp(regEmail);
      return !regex.test(value);
    },
  },  
  loginPassword: {
    required: (value) => {
      return value === "";
    },
  },
  editName: {
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
      const regex = new RegExp(regName);
      return regex.test(value);
    },
  },
  editEmail: {
    required: (value) => {
      return value === "";
    },
    email: (value) => {
      const regex = new RegExp(regEmail);
      return !regex.test(value);
    },
  },

};
