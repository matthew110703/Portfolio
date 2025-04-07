"use client";
import { useState } from "react";

// UI
import { Input, Icon } from "@/components/ui";
import { SubmitButton } from "@/components/buttons";

// Icons
import { MailOutlined, UserOutlined } from "@ant-design/icons";

// handle Form
import handleContactForm from "@/lib/handleContactForm";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await handleContactForm(formData);
      if (!res) {
        setError("Failed to send message. Please try again.");
        return;
      }
      setIsSuccess(true);
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "An error occurred while sending the message. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-sm flex-col gap-y-4 max-md:mx-auto"
    >
      <Input
        name="name"
        label="Full Name"
        placeHolder="John Doe"
        required
        autoComplete="off"
        inputAdornment={<UserOutlined />}
      />
      <Input
        name="email"
        type="email"
        label="Email Address"
        placeHolder="example@gmail.com"
        required
        autoComplete="off"
        inputAdornment={<MailOutlined />}
      />
      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        className="border-primary/50 focus:border-primary/100 relative my-2 field-sizing-fixed max-w-md border-b p-1.5 outline-none"
        rows={4}
        required
      ></textarea>
      <p className="text-center text-sm font-semibold text-red-500">{error}</p>
      <SubmitButton loading={isLoading} success={isSuccess} />
    </form>
  );
};

export default ContactForm;
