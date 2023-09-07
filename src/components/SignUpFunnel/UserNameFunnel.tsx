import {
  form_button_container,
  form_container,
  form_logo,
  toggle_form_state,
  toggle_text,
} from "@/styles/form.css";
import {
  only_next_button,
  user_name_disabled_button,
} from "@/styles/funnel.css";
import { color_state } from "@/styles/container.css";
import { slideIn, slideOut } from "@/styles/funnel.css";
import Input from "../composables/Input/Input";
import { validationConfig } from "@/utils/validationConfig";

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
  animation: "slideIn" | "slideOut" | "";
  toggleFormStateHandler: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formStateValue: string;
};

export default function UserNameFunnel({
  step,
  nextStepHandler,
  animation,
  toggleFormStateHandler,
  onChange,
  formStateValue,
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
          step={step}
          type={"text"}
          placeholder={"Username"}
          id={"Username"}
          onChange={onChange}
          value={formStateValue}
        />
        <div
          className={form_button_container}
          onClick={() => {
            nextStepHandler(formStateValue, validationConfig);
          }}
        >
          <button className={`${only_next_button} ${color_state}`}>Next</button>
        </div>
      </div>
    </>
  );
}
