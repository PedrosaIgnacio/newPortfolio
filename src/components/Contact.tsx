import { Box } from "@mui/system";
import React from "react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <Box
      id="#section-contacto"
      m={0}
      minHeight="100vh"
      minWidth="100vw"
      bgcolor="#252934"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <ContactForm />
    </Box>
  );
};
