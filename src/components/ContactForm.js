import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useForm, Form } from "../hooks/useForm";
import { Grid, Typography, Alert, AlertTitle } from "@mui/material";
import InputField from "./FormControls/InputField";
import RadioButton from "./FormControls/RadioButton";
import SelectControl from "./FormControls/SelectControl";
import countries from "../dataCountriesComplete.js";
import CheckboxControl from "./FormControls/CheckboxControl";
import ButtonControl from "./FormControls/ButtonControl";

const Result = () => {
  return (
    <Alert severity="success" variant="filled">
      <AlertTitle>Success</AlertTitle>
      Your message has been sent — <strong>I will contact you shortly!</strong>
    </Alert>
  );
};

const jobItems = [
  { id: 1, name: "contract", title: "Contract" },
  /* { id: 2, name: "freelance", title: "Freelance" }, */
  { id: 2, name: "other", title: "Other" },
];

const initialFormValues = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  typeOfJob: "contract",
  phone: "",
  country: "",
  message: "",
  newsLetter: false,
};

const ContactForm = () => {
  const validate = () => {
    let temp = {};
    temp.firstName = values.firstName ? "" : "Required field";
    temp.lastName = values.lastName ? "" : "Required field";
    temp.email =
      values.email && /$^|.+@.+..+/.test(values.email)
        ? ""
        : "You must enter a valid email";
    temp.message = values.message ? "" : "Required field";
    setErrors({ ...temp });

    return Object.values(temp).every((item) => {
      return item === "";
    });
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFormValues);

  const [result, showResult] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          "service_ks1h8h2",
          "template_gbwe2em",
          event.target,
          "user_xrqPhb3zeDAeJqLuE9eLf",
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((err) => {
          console.log(err.text);
        });
      showResult(true);
      resetForm();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      showResult(false);
    }, 8000);
  }, [result]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" className="contactForm__sectionTitle">
            How can I help you?
          </Typography>
          <Typography
            variant="subtitle2"
            className="contactForm__sectionSubTitle">
            Drop me a couple of lines and I will contact you!
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <InputField
            multiline={false}
            value={values.firstName}
            onChange={handleInputChange}
            name="firstName"
            label="First Name"
            error={errors.firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            value={values.lastName}
            onChange={handleInputChange}
            name="lastName"
            label="Last Name"
            error={errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            value={values.email}
            onChange={handleInputChange}
            name="email"
            label="Your email"
            error={errors.email}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioButton
            label="Type of job you require"
            name="typeOfJob"
            value={values.typeOfJob}
            onChange={handleInputChange}
            jobItems={jobItems}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectControl
            value={values.country}
            label="Country (optional)"
            name="country"
            onChange={handleInputChange}
            options={countries}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            multiline={true}
            value={values.message}
            onChange={handleInputChange}
            name="message"
            label="Just a brief idea of what you are looking for"
            error={errors.message}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <CheckboxControl
            value={values.newsLetter}
            label="Subscribe to newsletter?"
            name="newsLetter"
            onChange={handleInputChange}
          />
        </Grid> */}
        <Grid item xs={6}>
          <ButtonControl variant="contained" label="submit" type="submit" />
        </Grid>
        <Grid item xs={6}>
          <ButtonControl variant="outlined" label="reset" onClick={resetForm} />
        </Grid>
        {/* ALERT */}
        <Grid item xs={12}>
          {result ? <Result /> : null}
        </Grid>
      </Grid>
    </Form>
  );
};

export default ContactForm;
