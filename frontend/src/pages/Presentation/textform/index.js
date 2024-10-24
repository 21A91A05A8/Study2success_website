import { useState } from "react";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import p1 from "assets/images/youcareer.avif";
import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  ThemeProvider,
  Paper,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [certifications, setCertifications] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sentence, setSentence] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response1 = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          goal,
          certifications,
        }),
      });
      if (!response1.ok) {
        throw new Error("Failed to submit form data");
      }
      const data1 = await response1.json();

      const response2 = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sentence: data1.sentence,
        }),
      });
      if (!response2.ok) {
        throw new Error("Failed to submit chat data");
      }
      const data2 = await response2.json();

      console.log("Form data submitted successfully");
      setSubmitted(true);
      setSentence(data2.result);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" sx={{ marginTop: "8rem", marginBottom: "3rem" }}>
          <Paper sx={{ p: 2, borderRadius: 8, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <img
                  src={p1}
                  alt="Placeholder"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 8, marginTop: "2rem" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h4"
                  align="center"
                  fontFamily="revert"
                  gutterBottom
                  sx={{ color: "#0000FF" }}
                >
                  Courses
                </Typography>
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          label="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          label="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          type="email"
                          label="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          label="Goals"
                          value={goal}
                          onChange={(e) => setGoal(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                          label="Past Certifications"
                          value={certifications}
                          onChange={(e) => setCertifications(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                ) : (
                  <Container maxWidth="md" sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
                    <Paper
                      sx={{
                        borderRadius: 8,
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        padding: 2,
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        Certifications
                      </Typography>
                      {sentence.split("\n").map((line, index) => (
                        <Typography
                          key={index}
                          variant="body1"
                          sx={{ color: "#333", fontStyle: "revert" }}
                          gutterBottom
                        >
                          {line}
                        </Typography>
                      ))}
                    </Paper>
                  </Container>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </ThemeProvider>
    </>
  );
}

export default Form;
