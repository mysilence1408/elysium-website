import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact us for any inquiries or to learn more about our services. We're here to help!",
};
const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
