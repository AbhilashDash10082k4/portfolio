"use client";

import * as React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const EMAIL = "abhilash10082k4@gmail.com";

export function ContactForm() {
  const [openedDraft, setOpenedDraft] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const name = String(values.get("name") || "");
    const email = String(values.get("email") || "");
    const company = String(values.get("company") || "Not provided");
    const service = String(values.get("service") || "Not specified");
    const budget = String(values.get("budget") || "Not specified");
    const timeline = String(values.get("timeline") || "Not specified");
    const message = String(values.get("message") || "");

    const subject = encodeURIComponent("Portfolio enquiry: " + service);
    const body = encodeURIComponent(
      "Hi Abhilash,\n\n" +
      message + "\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Company / project: " + company + "\n" +
      "Service: " + service + "\n" +
      "Budget: " + budget + "\n" +
      "Timeline: " + timeline + "\n"
    );

    window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
    setOpenedDraft(true);
  };

  return (
    <form onSubmit={handleSubmit} className="surface-card grid gap-5 p-5 sm:p-7 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="contact-name">Your name *</label>
          <input className="form-field" id="contact-name" name="name" autoComplete="name" placeholder="Jane Smith" required maxLength={100} />
        </div>
        <div>
          <label className="form-label" htmlFor="contact-email">Email address *</label>
          <input className="form-field" id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required maxLength={254} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="contact-company">Company / project <span className="font-normal text-muted">(optional)</span></label>
          <input className="form-field" id="contact-company" name="company" autoComplete="organization" placeholder="Your company or idea" maxLength={140} />
        </div>
        <div>
          <label className="form-label" htmlFor="contact-service">What do you need? *</label>
          <select className="form-field" id="contact-service" name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Full-stack website or application</option>
            <option>AI agent or AI integration</option>
            <option>Business workflow automation</option>
            <option>Technical consulting</option>
            <option>Something else</option>
          </select>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="contact-budget">Approximate budget</label>
          <select className="form-field" id="contact-budget" name="budget" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Under $500</option>
            <option>$500–$1,500</option>
            <option>$1,500–$5,000</option>
            <option>$5,000–$10,000</option>
            <option>$10,000+</option>
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="contact-timeline">Desired timeline</label>
          <select className="form-field" id="contact-timeline" name="timeline" defaultValue="Flexible">
            <option>Flexible</option>
            <option>Within 2 weeks</option>
            <option>Within a month</option>
            <option>1–3 months</option>
            <option>Exploring / no deadline</option>
          </select>
        </div>
      </div>
      <div>
        <label className="form-label" htmlFor="contact-message">Tell me about your project *</label>
        <textarea className="form-field min-h-36 resize-y" id="contact-message" name="message" placeholder="What are you trying to build or improve? What would success look like?" required minLength={10} maxLength={5000} />
      </div>
      <div className="flex flex-col items-start gap-3 pt-1">
        <button type="submit" className="primary-button w-full sm:w-fit sm:px-7">
          Prepare email enquiry <Mail aria-hidden="true" className="size-4" /><ArrowUpRight aria-hidden="true" className="size-4" />
        </button>
        <p className="text-xs leading-5 text-muted">
          This opens your email app with the details filled in; it does not send anything automatically. You can also email <a className="font-bold text-accent-strong underline underline-offset-2" href={"mailto:" + EMAIL}>{EMAIL}</a>.
        </p>
        {openedDraft && <p role="status" className="text-sm font-semibold text-accent-strong">If your email app did not open, use the email link above and copy your enquiry.</p>}
      </div>
    </form>
  );
}
