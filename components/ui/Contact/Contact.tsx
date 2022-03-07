import React from "react";
import ContentSection from "../../layout/ContentSection";
import ContactForm from "./ContactForm";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id}>
      <ContentSection className="flex-col px-8 py-24 font-poppins space-y-10">
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl text-gray-700 font-bold cursor-default">
            Contact Me
          </h2>
          <p className="text-2xl text-gray-700 font-light cursor-default">
            Want to work together? I'd love to hear from you, send me a message!
          </p>
        </div>
        <div>
          <ContactForm></ContactForm>
        </div>
      </ContentSection>
    </section>
  );
};

export default Contact;
