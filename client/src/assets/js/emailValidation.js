import { toast } from "react-toastify";

export const emailValidation = (emailRef) => {
  const regex =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(emailRef?.current.value)) {
    toast.error("Email is not valid");
    return false;
  }
  return true;
};
