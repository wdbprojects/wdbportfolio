import React from "react";
/* initialize formik */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Typography } from "@mui/material";
import TextField from "./FormsUI/TextField";
import Select from "./FormsUI/Select";
import DateTimePicker from "./FormsUI/DateTimePicker";
import Checkbox from "./FormsUI/Checkbox";
import Button from "./FormsUI/Button";
import countries from "../dataCountries.json";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required field"),
  lastName: Yup.string().required("Required field"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required field"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required field"),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required field"),
  state: Yup.string(),
  country: Yup.string().required("Required field"),
  arrivalDate: Yup.date().required("Required field"),
  departureDate: Yup.date().required("Required field"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf(
      [true],
      "The terms and conditions must be accepted.",
    )
    .required("The terms and conditions must be accepted."),
});

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
        }}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className="contactForm__sectionTitle">
                Your details
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
              <Typography
                variant="h5"
                className="contactForm__sectionTitle">
                Address
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="addressLine1"
                label="Address Line 1"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="addressLine2"
                label="Address Line 2"
                color="secondary"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="city"
                label="City"
                color="secondary"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="state"
                label="State"
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
              <Typography
                variant="h5"
                className="contactForm__sectionTitle">
                Booking information
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <DateTimePicker
                name="arrivalDate"
                label="Arrival Date"
                color="secondary"
              />
            </Grid>
            <Grid item xs={6}>
              <DateTimePicker
                name="departureDate"
                label="Departure Date"
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
              <Checkbox
                name="termsOfService"
                legend="Terms of Service"
                label="I agree"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <Button>Submit form</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
