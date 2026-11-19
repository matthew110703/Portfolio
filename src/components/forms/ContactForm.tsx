"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import handleContactForm from "@/lib/handleContactForm";
import { CheckCircleFilled, LoadingOutlined } from "@/components/icons";

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
        setError("Failed to send message. Please try again or email directly.");
        return;
      }
      setIsSuccess(true);
      form.reset();
    } catch {
      setError(
        "An error occurred while sending the message. Please try again or email directly.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border bg-surface flex flex-col gap-5 rounded-xl border p-5 sm:p-6"
    >
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-ink block text-sm font-medium">
          Full name <span className="text-primary">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className="border-border bg-canvas text-ink placeholder:text-ink-subtle focus:border-primary w-full rounded-lg border px-3.5 py-2.5 text-sm transition-colors outline-none"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-ink block text-sm font-medium">
          Email address <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="border-border bg-canvas text-ink placeholder:text-ink-subtle focus:border-primary w-full rounded-lg border px-3.5 py-2.5 text-sm transition-colors outline-none"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-ink block text-sm font-medium">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about the role, project or conversation..."
          className="border-border bg-canvas text-ink placeholder:text-ink-subtle focus:border-primary w-full resize-y rounded-lg border px-3.5 py-2.5 text-sm transition-colors outline-none"
        />
      </div>

      <div aria-live="polite" className="min-h-6">
        {error && (
          <p className="rounded-md border border-red-500/40 bg-red-950/40 px-3 py-2 text-xs text-red-200 sm:text-sm">
            {error}
          </p>
        )}
        {isSuccess && (
          <p className="border-primary/40 bg-primary/10 text-primary flex items-center gap-2 rounded-md border px-3 py-2 text-xs sm:text-sm">
            <CheckCircleFilled aria-hidden="true" />
            <span>Message sent. Thank you for reaching out.</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-primary text-canvas hover:bg-primary-dim inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading && <LoadingOutlined aria-hidden="true" />}
        <span>{isLoading ? "Sending..." : "Send message"}</span>
      </button>
    </form>
  );
};

export default ContactForm;
