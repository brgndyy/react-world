import {
  form_container,
  form_logo,
  toggle_form_state,
  toggle_text,
  form_button,
} from "@/styles/form.css";
import { email_funnel_button_container } from "@/styles/funnel.css";
import { color_state } from "@/styles/container.css";
import { slideIn, slideOut } from "@/styles/funnel.css";
import Input from "../composables/Input/Input";
import { validationConfig } from "@/utils/validationConfig";
import React from "react";

type FunnelType = {
  step: "Username" | "Email" | "Password";
  nextStepHandler: (
    formStateValue: string,
    validationConfig: {
      Username?: {
        validator: Function;
        message: string;
      }[];
      Email?: {
        validator: Function;
        message: string;
      }[];
      Password?: {
        validator: Function;
        message: string;
      }[];
    }
  ) => void;
  previousStepHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  animation: "slideIn" | "slideOut" | "";
  toggleFormStateHandler: () => void;
  formStateValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UserEmailFunnel({
  step,
  nextStepHandler,
  animation,
  previousStepHandler,
  toggleFormStateHandler,
  formStateValue,
  onChange,
}: FunnelType) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      nextStepHandler(formStateValue, validationConfig);
    }
  };

  return (
    <>
      <div
        className={`${form_container} ${color_state} ${
          animation === "slideIn"
            ? slideIn
            : animation === "slideOut"
            ? slideOut
            : ""
        }`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <h1 className={form_logo}>Sign up</h1>
        <div className={toggle_form_state}>
          <p
            className={`${toggle_text} ${color_state}`}
            onClick={toggleFormStateHandler}
          >
            Have an account?
          </p>
        </div>
        <Input
          value={formStateValue}
          step={step}
          onChange={onChange}
          type={"email"}
          placeholder={"Email"}
          id={"Email"}
        />
        <div className={email_funnel_button_container}>
          <button
            className={`${form_button} ${color_state}`}
            onClick={previousStepHandler}
          >
            Previous
          </button>
          <button
            className={`${form_button} ${color_state}`}
            onClick={() => nextStepHandler(formStateValue, validationConfig)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
