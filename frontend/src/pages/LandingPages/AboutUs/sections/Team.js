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
//import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import t1 from "assets/images/c3.png";
import t2 from "assets/images/c4.png";
import t3 from "assets/images/c5.jpg";
import t4 from "assets/images/c1.png";
//import team1 from "assets/images/team-5.jpg";
//import team2 from "assets/images/bruce-mars.jpg";
//import team3 from "assets/images/ivana-squares.jpg";
//import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        {/* <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Mission Statement
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid> */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={t1}
                name="Mission Statement"
                position={{ color: "info" }}
                description="At Study2Success, we're dedicated to empowering students with the tools, resources, and support they need to excel in their academic endeavors and achieve their full potential.
                "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={t2}
                name="Our Approach"
                position={{ color: "info" }}
                description="With a focus on personalized learning and holistic development, we offer a range of services including tutoring, study skills workshops, and academic coaching to address the diverse needs of our students.

                "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={t3}
                name="Experienced Team"
                position={{ color: "info" }}
                description="Our team consists of passionate educators and professionals who are committed to providing top-notch guidance and support to help students overcome challenges and succeed academically.
                "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={t4}
                name="Student-Centered Philosophy"
                position={{ color: "info" }}
                description="Study2Success is dedicated to putting students first. We focus on personalized attention, student feedback, and continuous improvement to tailor our services to each student's unique needs."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Team;
