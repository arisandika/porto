"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { sendEmailAction, FormState } from "@/app/contact/actions";

// Tombol Submit dengan status "pending" dari useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-white/5 hover:bg-white/10 cursor-pointer disabled:cursor-not-allowed disabled:bg-white/5 disabled:opacity-60"
    >
      {pending ? (
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-white/80">Sending...</span>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      ) : (
        "Send Message"
      )}
    </button>
  );
}

// Komponen utama form
export default function ContactForm() {
  const initialState: FormState = { status: "idle", message: "" };
  const [state, formAction] = useFormState(sendEmailAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form setelah berhasil
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  const inputClasses =
    "w-full bg-black/30 text-sm text-white/90 placeholder:text-white/30 rounded-md px-4 py-2.5 border border-[#f2f2f226] focus:border-yellow-300/50 focus:ring-2 focus:ring-yellow-300/20 outline-none transition-colors duration-300";
  const errorTextClasses = "text-sm text-red-400 mt-1.5";

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-6">
      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="text-sm text-white/50 mb-2 block"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={inputClasses}
          placeholder="John Doe"
        />
        {state.errors?.name && (
          <p className={errorTextClasses}>{state.errors.name[0]}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="text-sm text-white/50 mb-2 block"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={inputClasses}
          placeholder="john.doe@example.com"
        />
        {state.errors?.email && (
          <p className={errorTextClasses}>{state.errors.email[0]}</p>
        )}
      </div>

      {/* Subject Input */}
      <div>
        <label
          htmlFor="subject"
          className="text-sm text-white/50 mb-2 block"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={inputClasses}
          placeholder="Project Inquiry"
        />
        {state.errors?.subject && (
          <p className={errorTextClasses}>{state.errors.subject[0]}</p>
        )}
      </div>

      {/* Message Textarea */}
      <div>
        <label
          htmlFor="message"
          className="text-sm text-white/50 mb-2 block"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClasses}
          placeholder="Hello Ari, I would like to discuss..."
        ></textarea>
        {state.errors?.message && (
          <p className={errorTextClasses}>{state.errors.message[0]}</p>
        )}
      </div>

      {/* Tombol & Pesan Status */}
      <div className="pt-2">
        <SubmitButton />

        {state.status === "success" && (
          <p className="text-sm text-center mt-4 text-green-400">
            {state.message}
          </p>
        )}
        {state.status === "error" && state.message && !state.errors && (
          <p className="text-sm text-center mt-4 text-red-400">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
