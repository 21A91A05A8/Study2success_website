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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />

        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            {/* <MKTypography variant="h3" color="white">
              Do you love this awesome
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              UI Kit for ReactJS &amp; MUI?
            </MKTypography> */}
            <MKTypography variant="h3" color="white" mb={6}>
              Empowering students through personalized guidance and resources for successful
              academic and career navigation.
            </MKTypography>
            {/* <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Download Now
            </MKButton> */}
          </Grid>
        </Container>
      </MKBox>
      <Grid
        item
        xs={1}
        sx={{
          textAlign: "center",
          marginTop: 10,
        }}
      >
        <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
          Thank you for your support!
        </MKTypography>
        <MKTypography variant="body1" color="text">
          We deliver the best Career Paths
        </MKTypography>
      </Grid>
    </MKBox>
  );
}

export default Download;
