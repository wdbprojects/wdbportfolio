import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
/* initialize formik */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Typography } from "@mui/material";
import TextField from "./FormsUI/TextField";
import Select from "./FormsUI/Select";
import Button from "./FormsUI/Button";
import countries from "../dataCountries.json";

const Result = () => {
  return <p>Your message has been successfully sent!</p>;
};

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  message: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required field"),
  lastName: Yup.string().required("Required field"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required field"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number"),
  country: Yup.string(),
  message: Yup.string().required("Required field"),
});

const ContactForm = () => {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (values) => {
    emailjs
      .sendForm(
        "service_ks1h8h2",
        "template_gbwe2em",
        values,
        "user_xrqPhb3zeDAeJqLuE9eLf",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    /* event.target.reset(); */
    showResult(true);
  };

  return (
    <div>
      <Formik
        ref={form}
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          sendEmail(values);
        }}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className="contactForm__sectionTitle">
                Drop me a line or two
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="firstName"
                label="First Name"
                color="secondary"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="lastName"
                label="Last Name"
                color="secondary"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                color="secondary"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Phone"
                color="secondary"
              />
            </Grid>

            <Grid item xs={12}>
              <Select
                name="country"
                label="Country"
                options={countries}
                color="secondary"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="message"
                label="Message"
                multiline={true}
                rows={6}
                color="secondary"
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit">Submit form</Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h5"
              className="contactForm__sectionTitle">
              {result ? <Result /> : null}
            </Typography>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
