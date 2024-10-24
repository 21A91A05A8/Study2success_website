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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
//import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import bg2 from "assets/images/about.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" style={{ textAlign: "justify" }}>
              Study2Success, we understand that every student&apos;s journey towards the academic
              success is unique.That&apos;s why we&apos;ve made it our mission to provide
              comphrensive support and resources tailored to meet the individual needs of each
              student.Our team of dedicated educators and professionals is committed to empowering
              students with the skills,confidence, and knowledge they need to excel in their studies
              and beyond.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={bg2}
              title="Empowering student success."
              description="Study2Sucess websites serve as guiding lights, illuminating the path to success with resources, advice, and opportunities tailored to empower every learner's journey."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "Explore more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Information;
