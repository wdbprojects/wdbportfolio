import React from "react";
import ContactItem from "../components/ContactItem";
import ContactForm from "../components/ContactForm";
import { Typography, Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactPage = () => {
  return (
    <div className="contact">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          color="secondary"
          className="contact__title">
          Contact
        </Typography>

        {/* content goes below */}

        <div className="contact__info">
          <div className="contact__info--left">
            <ContactItem
              icon={<PhoneIcon />}
              text1={"+591 77799006"}
              title="Phone / WhatsApp"
            />
            <ContactItem
              icon={<EmailIcon />}
              text1={"ronyortizop@gmail.com"}
              title="Email"
            />
            <ContactItem
              icon={<MyLocationIcon />}
              text1={"La Paz - Bolivia"}
              title="Location"
            />
          </div>
          <div className="contact__info--right">
            <div className="contactForm">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
