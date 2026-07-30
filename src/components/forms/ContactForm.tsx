"use client";

import { useState, useId, FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */
interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zipCode: string;
  message: string;
  company: string; // honeypot — hidden
}

type SubmitState = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  submitLabel?: string;
  headline?: string;
  subhead?: string;
}

/* ------------------------------------------------------------------ */
/* Field error messages                                                 */
/* ------------------------------------------------------------------ */
const US_PHONE_PATTERN = "^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$";

function maskPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits.length ? `(${digits}` : "";
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
const ZIP_PATTERN = "^[0-9]{5}$";

/* ------------------------------------------------------------------ */
/* Shared input style                                                   */
/* ------------------------------------------------------------------ */
const inputBase =
  "block w-full rounded border border-[#B5B0A5] bg-white px-4 py-3 text-base text-[#111318] placeholder:text-[#8A8578] hover:border-[#8A8578] focus:outline-none focus:ring-2 focus:ring-[#D42027]/50 focus:border-[#D42027] transition-colors";

const labelBase =
  "block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#374151] mb-2";

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */
export function ContactForm({
  submitLabel = "Request a Maintenance Proposal",
  headline,
  subhead,
}: ContactFormProps) {
  const uid = useId();
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipCode: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function set(field: keyof FormValues, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.firstName.trim()) next.firstName = "First name is required.";
    if (!values.lastName.trim()) next.lastName = "Last name is required.";
    if (!values.email.trim()) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.phone.trim()) {
      next.phone = "Phone number is required.";
    } else if (!new RegExp(US_PHONE_PATTERN).test(values.phone.replace(/\s/g, ""))) {
      next.phone = "Enter a valid 10-digit US phone number.";
    }
    if (!values.zipCode.trim()) {
      next.zipCode = "ZIP code is required.";
    } else if (!new RegExp(ZIP_PATTERN).test(values.zipCode)) {
      next.zipCode = "Enter a valid 5-digit ZIP code.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourcePage:
            typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      if (!res.ok) throw new Error("Server error");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  /* ---- Success state ---- */
  if (submitState === "success") {
    return (
      <div className="flex flex-col items-start gap-5 py-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D42027]/10">
          <CheckCircle size={24} className="text-[#D42027]" aria-hidden="true" />
        </div>
        <div>
          <h3
            className="font-bold text-[#111318] text-xl mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Thanks — we&rsquo;ll be in touch within one business day.
          </h3>
          <p className="text-[#6B7280] text-base leading-relaxed">
            A member of the Gardner Air team will review your request and reach
            out shortly to discuss your facility&rsquo;s needs.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#D42027] hover:text-[#B01C22] transition-colors"
        >
          Back to home
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact Gardner Air">
      {/* Optional headline/subhead injected by parent pages */}
      {headline && (
        <h2
          className="font-bold text-[#111318] mb-2"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
          }}
        >
          {headline}
        </h2>
      )}
      {subhead && (
        <p className="text-[#6B7280] text-base leading-relaxed mb-8">
          {subhead}
        </p>
      )}

      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 overflow-hidden">
        <label htmlFor={`${uid}-company`}>Company</label>
        <input
          id={`${uid}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => set("company", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-5">
        {/* First + Last on same row at lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label htmlFor={`${uid}-first`} className={labelBase}>
              First Name <span className="text-[#D42027]" aria-hidden="true">*</span>
            </label>
            <input
              id={`${uid}-first`}
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={values.firstName}
              onChange={(e) => set("firstName", e.target.value)}
              aria-describedby={errors.firstName ? `${uid}-first-err` : undefined}
              aria-invalid={!!errors.firstName}
              className={inputBase}
            />
            {errors.firstName && (
              <p id={`${uid}-first-err`} role="alert" className="mt-1.5 text-xs text-[#D42027]">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor={`${uid}-last`} className={labelBase}>
              Last Name <span className="text-[#D42027]" aria-hidden="true">*</span>
            </label>
            <input
              id={`${uid}-last`}
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              value={values.lastName}
              onChange={(e) => set("lastName", e.target.value)}
              aria-describedby={errors.lastName ? `${uid}-last-err` : undefined}
              aria-invalid={!!errors.lastName}
              className={inputBase}
            />
            {errors.lastName && (
              <p id={`${uid}-last-err`} role="alert" className="mt-1.5 text-xs text-[#D42027]">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor={`${uid}-phone`} className={labelBase}>
            Phone <span className="text-[#D42027]" aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern={US_PHONE_PATTERN}
            value={values.phone}
            onChange={(e) => set("phone", maskPhone(e.target.value))}
            aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
            aria-invalid={!!errors.phone}
            className={inputBase}
          />
          {errors.phone && (
            <p id={`${uid}-phone-err`} role="alert" className="mt-1.5 text-xs text-[#D42027]">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor={`${uid}-email`} className={labelBase}>
            Email <span className="text-[#D42027]" aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
            aria-invalid={!!errors.email}
            className={inputBase}
          />
          {errors.email && (
            <p id={`${uid}-email-err`} role="alert" className="mt-1.5 text-xs text-[#D42027]">
              {errors.email}
            </p>
          )}
        </div>

        {/* ZIP Code */}
        <div>
          <label htmlFor={`${uid}-zip`} className={labelBase}>
            ZIP Code <span className="text-[#D42027]" aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-zip`}
            name="zipCode"
            type="text"
            required
            autoComplete="postal-code"
            inputMode="numeric"
            maxLength={5}
            pattern={ZIP_PATTERN}
            value={values.zipCode}
            onChange={(e) => set("zipCode", e.target.value.replace(/\D/g, ""))}
            aria-describedby={errors.zipCode ? `${uid}-zip-err` : undefined}
            aria-invalid={!!errors.zipCode}
            className={inputBase}
          />
          {errors.zipCode && (
            <p id={`${uid}-zip-err`} role="alert" className="mt-1.5 text-xs text-[#D42027]">
              {errors.zipCode}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor={`${uid}-message`} className={labelBase}>
            How Can We Help?{" "}
            <span className="normal-case tracking-normal font-normal text-[#9CA3AF]">
              (optional)
            </span>
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Tell us about your facility, equipment, and current HVAC situation…"
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* Error banner */}
        {submitState === "error" && (
          <p role="alert" className="text-sm text-[#D42027] bg-[#D42027]/5 border border-[#D42027]/20 rounded px-4 py-3">
            Something went wrong. Please try again or call us at{" "}
            <a href="tel:+19516964495" className="underline font-semibold">
              (951) 696-4495
            </a>
            .
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] hover:shadow-[0_8px_28px_-4px_rgba(212,32,39,0.5)] transition-all duration-200 min-h-[44px] w-full lg:w-auto"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {submitState === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              {submitLabel}
              <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
