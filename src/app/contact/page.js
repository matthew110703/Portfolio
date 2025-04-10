// UI
import { ProfileCard, TitleCard } from "@/components/cards";
import { ContactOverview, Heading } from "@/components/ui";

// Form
import ContactForm from "@/components/forms/ContactForm";

// Motion
import * as motion from "motion/react-client";
import { slideInFromLeft } from "@/lib/motion";

const Contact = () => {
  return (
    <section
      aria-label="Contact"
      className="flex h-full w-full flex-col gap-y-4"
    >
      <header className="flex items-stretch gap-x-4">
        <ProfileCard variant="headline" headlineText="Designing, The Future" />
        <TitleCard text={"Contact"} />
      </header>

      <div className="m-auto flex flex-col items-center gap-8 p-4 md:flex-row md:items-start md:p-8">
        {/* Get In Touch */}
        <motion.section
          variants={slideInFromLeft}
          {...slideInFromLeft}
          className="basis-1/2 space-y-4"
        >
          <header className="space-y-4">
            <Heading text="Get in Touch" />
            <p className="text-sm lg:w-5/6">
              Whether you have a project idea, a collaboration opportunity, or
              just want to say hello—I’d love to hear from you!
            </p>
          </header>

          {/* Contact Form */}
          <ContactForm />
        </motion.section>
        <br />
        {/* Connect With Me */}
        <section className="basis-1/2 space-y-4">
          <motion.header
            variants={slideInFromLeft}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Heading text="Connect with Me" />
            <p className="text-base font-semibold">
              Let&apos;s Create Something Amazing
            </p>
            <p className="text-sm">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. If you’re looking for a
              developer/designer who values innovation, performance, and user
              experience, let’s connect and make something great together.
            </p>
          </motion.header>
          <ContactOverview className={"lg:items-start"} />
        </section>
      </div>
    </section>
  );
};

export default Contact;
