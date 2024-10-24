/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios"; // Import Axios for HTTP requests

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
//import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import contactImg from "assets/images/contactus.jpg";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const contactData = {
      fullName: fullName,
      email: email,
      message: message,
    };
    const apiUrl = "http://localhost:5000/api/contact";
    axios
      .post(apiUrl, contactData)
      .then((response) => {
        console.log(response.data);
        alert("Contact submitted successfully");
        console.log(contactData);
        // Reset form fields
        setFullName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error submitting contact:", error);
        alert("An error occurred while submitting contact");
      });
  };
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <img
            src={contactImg}
            alt="Placeholder"
            style={{ marginLeft: "80px", maxWidth: "100%", height: "auto", borderRadius: 8 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              {/* <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email hello@creative-tim.com or 
                contact using our contact form.
              </MKTypography> */}
              <form onSubmit={handleSubmit} autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </form>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
export default ContactUs;
