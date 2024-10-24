import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
import routes from "routes";

const SignIn = () => {
  useEffect(() => {
    if (localStorage.getItem("name") && localStorage.getItem("password")) {
      // window.location.href = "/";
    }
  });

  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:5000/api/login";

    try {
      const response = await axios.post(api, data);

      if (response.status === 200 && response.data !== "") {
        alert("Login Success");
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("password", response.data.password);
        window.location.href = "/";
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <DefaultNavbar routes={routes} />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox pt={4} pb={3} px={3}>
                <form onSubmit={handleSubmit}>
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="name"
                      name="name"
                      fullWidth
                      value={data.name}
                      onChange={handleChange}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      name="password"
                      fullWidth
                      value={data.password}
                      onChange={handleChange}
                    />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton type="submit" variant="gradient" color="info" fullWidth>
                      Login
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <Link
                        to="/pages/presentation/SignUp"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textgradient="true" // Corrected prop name
                      >
                        Sign up
                      </Link>
                    </MKTypography>
                  </MKBox>
                </form>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
};
export default SignIn;
