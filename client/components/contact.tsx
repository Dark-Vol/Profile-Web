"use client";

import { createContext, useContext, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import useChat from "@/hooks/useChat";
import {
  CONTACT_MESSAGE_MIN,
  hasErrors,
  useModel,
  validateContact,
  type ContactErrors,
  type ContactValues,
  type Model,
} from "@/utils";
import { useLanguage } from "./language";
import { Button, IconButton } from "./ui/buttons";
import { EmailInput, TextareaInput, TextInput } from "./ui/inputs";

type ContactValue = { openContact: () => void };

const ContactContext = createContext<ContactValue | null>(null);

const fieldOrder: (keyof ContactValues)[] = ["name", "email", "message"];

export function useContact() {
  const value = useContext(ContactContext);
  if (!value) throw new Error("useContact must be used within ContactProvider");
  return value;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const name = useModel("");
  const email = useModel("");
  const message = useModel("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { sendTicket } = useChat();

  function clearingError(model: Model<string>, key: keyof ContactValues): Model<string> {
    return {
      value: model.value,
      onChange: (value) => {
        model.onChange(value);
        if (!errors[key]) return;
        setErrors((previous) => {
          const next = { ...previous };
          delete next[key];
          return next;
        });
      },
    };
  }

  function openContact() {
    setErrors({});
    setStatus("idle");
    dialogRef.current?.showModal();
  }

  function closeContact() {
    dialogRef.current?.close();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = { name: name.value, email: email.value, message: message.value };
    const next = validateContact(values, {
      name: t.contactNameError,
      email: t.contactEmailError,
      message: t.contactMessageError,
    });
    setErrors(next);

    if (hasErrors(next)) {
      setStatus("idle");
      const first = fieldOrder.find((key) => next[key]);
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("loading");
    try {
      await sendTicket({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setStatus("success");
      name.onChange("");
      email.onChange("");
      message.onChange("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      <dialog
        ref={dialogRef}
        className="dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeContact();
        }}
        onClose={() => setStatus("idle")}
      >
        <form className="dialog-panel" onSubmit={onSubmit} noValidate>
          <div className="dialog-head">
            <h2 id={titleId}>{t.contactTitle}</h2>
            <IconButton label={t.contactClose} onClick={closeContact}>
              <span aria-hidden="true">×</span>
            </IconButton>
          </div>
          <p className="dialog-lead">{t.contactText}</p>
          <TextInput
            id="contact-name"
            name="name"
            label={t.contactName}
            autoComplete="name"
            required
            model={clearingError(name, "name")}
            error={errors.name}
          />
          <EmailInput
            id="contact-email"
            name="email"
            label={t.contactEmail}
            required
            model={clearingError(email, "email")}
            error={errors.email}
          />
          <TextareaInput
            id="contact-message"
            name="message"
            label={t.contactMessage}
            required
            minLength={CONTACT_MESSAGE_MIN}
            hint={t.contactMessageHint}
            model={clearingError(message, "message")}
            error={errors.message}
          />
          {status === "success" ? (
            <p className="form-success" role="status">
              {t.contactSuccess}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="form-error" role="alert">
              {t.contactError}
            </p>
          ) : null}
          <Button type="submit" block loading={status === "loading"} loadingLabel={t.contactSending}>
            {t.contactSend}
          </Button>
        </form>
      </dialog>
    </ContactContext.Provider>
  );
}
