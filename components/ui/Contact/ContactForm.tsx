import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ContactFormProps {}

interface contactData {
  name: string;
  email: string;
  message: string;
}

type formErrors = {
  [key in keyof contactData]: Error | null;
};

type formStatus = "loading" | "success" | "error" | "";

const ContactForm: React.FC<ContactFormProps> = () => {
  useEffect(() => {
    // Text area resizing
    // see https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput(this: any) {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  });

  const [formStatus, setFormStatus] = useState<formStatus>("");
  const [formErrors, setFormErrors] = useState<formErrors>({
    name: null,
    email: null,
    message: null,
  });
  const [form, setForm] = useState<contactData>({
    email: "",
    name: "",
    message: "",
  });

  const validateForm = (f: contactData) => {
    const createError = (msg: string, name: string) => {
      const err = new Error(msg);
      err.name = name;
      return err;
    };

    const errors: Error[] = [];
    if (!f.name) {
      errors.push(createError("Nombre requerido", "name"));
    }
    if (!f.email) {
      errors.push(createError("Email requerido", "email"));
    }
    if (!f.message) {
      errors.push(createError("Mensaje requerido", "message"));
    }
    if (errors.length > 0) {
      throw errors;
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    try {
      validateForm(form);
      try {
        emailjs.init(userId);
        setFormStatus("loading");
        await emailjs.send("default_service", templateId, form as any);
        setForm({ name: "", email: "", message: "" });
        setFormStatus("success");
        setTimeout(() => {
          setFormStatus("");
        }, 5000);
      } catch (err) {
        console.error(err);

        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("");
        }, 5000);
      }
    } catch (errors) {
      console.error(errors);

      const errorsArr = errors as Error[];
      const newErrors = {};
      errorsArr.forEach((error) => {
        if (Object.keys(form).includes(error.name)) {
          newErrors[error.name] = error || null;
        }
      });
      setFormErrors({ ...formErrors, ...(newErrors as formErrors) });
    }
  };

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const fields = Object.keys(form);
    if (fields.includes(e.target.id)) {
      const id = e.target.id;
      const newFormState = { ...form, [id]: e.target.value };
      setForm(newFormState);
      setFormStatus("");
      setFormErrors({ email: null, name: null, message: null });
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder={`${formErrors.name ? "*" : ""}Name`}
        value={form.name}
        id="name"
        onChange={handleChange}
        className={`border-2 rounded-md px-4 py-2 transition-all md:text-xl text-lg ${
          formErrors.name && "border-red-500 placeholder-red-500"
        }`}
      />
      <input
        type="text"
        placeholder={`${formErrors.email ? "*" : ""}Email`}
        value={form.email}
        id="email"
        onChange={handleChange}
        className={`border-2 rounded-md px-4 py-2 transition-all md:text-xl text-lg ${
          formErrors.email && "border-red-500 placeholder-red-500"
        }`}
      />

      <textarea
        placeholder={`${formErrors.email ? "*" : ""}Message`}
        value={form.message}
        id="message"
        onChange={handleChange}
        className={`border-2 rounded-md px-4 py-2 col-span-1 md:col-span-2 transition-all md:text-xl text-lg min-h-[12rem] ${
          formErrors.email && "border-red-500 placeholder-red-500"
        }`}
      ></textarea>

      <div className="mt-4">
        <button
          className="text-center cursor-pointer transition-all transform hover:scale-105 focus:scale-105 bg-green-600 text-gray-50 font-medium px-8 py-2 rounded-md w-full md:w-auto"
          type="submit"
        >
          Send Message
        </button>
      </div>
      {/* <div className="fixed bottom-12 right-12">
        <p></p>
        <p>The form was submitted</p>
        <p>Loading</p>
      </div> */}
      <AnimatePresence>
        {formStatus === "error" && (
          <motion.div
            className="fixed bottom-12 right-12 font-semibold text-lg text-white bg-red-500 px-4 py-2 rounded-md"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            There was an error while sending the form
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {formStatus === "loading" && (
          <motion.div
            className="fixed bottom-12 right-12 font-semibold text-lg text-white bg-blue-400 px-4 py-2 rounded-md"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            Sending...
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {formStatus === "success" && (
          <motion.div
            className="fixed bottom-12 right-12 font-semibold text-lg text-white bg-green-500 px-4 py-2 rounded-md"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            Message Sent!
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
