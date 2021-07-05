import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import ReactLoading from "react-loading";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { fetchCurrentStaff } from "../../../redux/actions/staff";
import AuthRoute from "./AuthRoute";

const useStyles = makeStyles({
  loadingBox: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const AuthRouteContainer = () => {
  const dispatch = useDispatch();
  const classess = useStyles();
  const {
    error,
    loading,
    data: currentStaff,
  } = useSelector((state) => state.currentStaff);
  useEffect(() => {
    if (!currentStaff) dispatch(fetchCurrentStaff());
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <Box className={classess.loadingBox}>
        <ReactLoading color="lightblue" />
      </Box>
    );
  }
  if (error) <Redirect to="/" />;
  return <AuthRoute />;
};

export default AuthRouteContainer;
