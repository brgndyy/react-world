import {
  form_button_container,
  form_button,
  form_logo,
  toggle_form_state,
  toggle_text,
} from "@/styles/form.css";
import {
  password_funnel_container,
  password_funnel_button_container,
} from "@/styles/funnel.css";
import { color_state } from "@/styles/container.css";
import { slideIn, slideOut } from "@/styles/funnel.css";
import Input from "../composables/Input/Input";
import { validationConfig } from "@/utils/validationConfig";

type FunnelType = {
  step: "Username" | "Email" | "Password";
  animation: "slideIn" | "slideOut" | "";
  formState: { [key: string]: any };
  toggleFormStateHandler: () => void;
  previousStepHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formStateValue: string;
  lastStepFetchHandler: (
    e: React.FormEvent<HTMLFormElement>,
    formStateValue: string,
    formState: { [key: string]: any },
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
};

export default function UserPasswordFunnel({
  step,
  animation,
  previousStepHandler,
  formStateValue,
  toggleFormStateHandler,
  lastStepFetchHandler,
  onChange,
  formState,
}: FunnelType) {
  return (
    <>
      <div
        className={`${password_funnel_container} ${color_state} ${
          animation === "slideIn"
            ? slideIn
            : animation === "slideOut"
            ? slideOut
            : ""
        }`}
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
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            lastStepFetchHandler(e, formStateValue, formState, validationConfig)
          }
        >
          <Input
            value={formStateValue}
            step={step}
            onChange={onChange}
            type={"password"}
            placeholder={"Password"}
            id={"Password"}
          />

          <div className={password_funnel_button_container}>
            <button
              className={`${form_button} ${color_state}`}
              onClick={previousStepHandler}
            >
              Previous
            </button>
            <button className={`${form_button} ${color_state}`}>
              Complete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
