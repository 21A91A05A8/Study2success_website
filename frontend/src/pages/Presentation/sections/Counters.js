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
import Typography from "@mui/material/Typography";

import MKBox from "components/MKBox";
import img1 from "assets/images/side-image.jpg";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: "auto" }} spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={img1} alt="YourImage" style={{ width: "100%", height: "auto" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" style={{ textAlign: "justify" }}>
              Welcome to Study2Success, your ultimate destination for bridging academic excellence
              with professional success. Our platform is designed to provide you with a diverse
              range of features aimed at empowering your journey towards career fulfillment. Whether
              you&apos;re aiming to leverage your academic achievements such as GPAs to strengthen
              your resume or pursuing certifications to enhance your skill set, Study2Success offers
              the tools and guidance necessary to navigate every aspect of your career path with
              confidence. With a commitment to personalized support and tailored resources, we are
              dedicated to arming you with the knowledge, skills, and opportunities needed to excel
              in today&apos;s competitive job market. Welcome aboard as we embark together on this
              transformative journey towards success.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
