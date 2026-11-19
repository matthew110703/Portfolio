"use client";
import { useState } from "react";
import type { SubmitEvent } from "react";
import { Input } from "@/v1/components/ui";
import { SubmitButton } from "@/v1/components/buttons";
import { MailOutlined, UserOutlined } from "@/v1/components/icons";
import handleContactForm from "@/lib/handleContactForm";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await handleContactForm(formData);
      if (!res) {
        setError("Failed to send message. Please try again.");
        return;
      }
      setIsSuccess(true);
      form.reset();
    } catch {
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
