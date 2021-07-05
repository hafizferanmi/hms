import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import notification from "cogo-toast";
import { useDispatch } from "react-redux";
import { staffLogin } from "../../../helpers/api";
import { setAuthToken } from "../../../helpers/auth";
import Loginform from "./Loginform";
import useAsyncFn from "../../../hooks/useAsyncFn";
import { notify } from "../../../helpers/notification";
import ErrorMessage from "../../misc/ErrorMessage";
import { setCurrentStaff } from "../../../redux/actions/staff";

const LoginFormCantainer = () => {
  const navigateTo = useHistory();
  const dispatch = useDispatch();

  const {
    error: serverError,
    loading: submitting,
    response,
    executeFn: submitForm,
  } = useAsyncFn(staffLogin);

  const submitLoginForm = (data) => {
    submitForm(data);
  };

  useEffect(() => {
    if (response && response.success) {
      const { token, staff } = response.result;
      dispatch(setCurrentStaff(staff));
      setAuthToken(token);
      navigateTo("/secure/admin/staffs");
    }

    if (response && !response.success) {
      notification.error(
        ...notify(<ErrorMessage message={response.message} />)
      );
    }
    // eslint-disable-next-line
  }, [response]);

  const serverState = {
    submitting,
    message: response && response.message,
    serverError,
  };

  return <Loginform serverState={serverState} submitForm={submitLoginForm} />;
};

export default LoginFormCantainer;
