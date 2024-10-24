import React, { useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKBox from "components/MKBox";
import routes from "routes";
import p2 from "assets/images/feedback.jpg";
const theme = createTheme();
function Feedback() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      feedback: feedback,
    };
    const apiUrl = "http://localhost:5000/api/feedback";
    axios
      .post(apiUrl, feedbackData)
      .then((response) => {
        console.log(response.data);
        alert("Feedback submitted successfully");
        console.log({
          firstName,
          lastName,
          email,
          feedback,
        });
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setFeedback("");
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
        alert("An error occurred while submitting feedback");
      });
  };
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{ marginTop: "8rem", marginBottom: "3rem" }}>
          <Paper sx={{ p: 2, borderRadius: 8, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <img
                  src={p2}
                  alt="Placeholder"
                  style={{ maxWidth: "100%", height: "auto%", borderRadius: 8 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" align="center" fontFamily="monospace" gutterBottom>
                  Feedback
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
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
                        multiline
                        rows={4}
                        label="Feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" fullWidth variant="contained" color="primary">
                        Submit Feedback
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}
export default Feedback;
