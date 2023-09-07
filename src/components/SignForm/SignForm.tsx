"use client";

import {
  form_card,
  form_container,
  form_logo,
  toggle_form_state,
  toggle_text,
  form,
  form_button,
  form_button_container,
} from "@/styles/form.css";
import { validate, VALIDATOR_REQUIRE } from "@/utils/validators";
import { color_state } from "@/styles/container.css";
import { useRouter } from "next/navigation";
import Input from "../composables/Input/Input";
import { useForm } from "@/libs/hooks/useForm";

type FormType = {
  state: string;
};

export default function SignForm({ state }: FormType) {
  const router = useRouter();
  const toggleFormStateHandler = () => {
    state === "Sign up" ? router.push("/login") : router.push("/register");
  };
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <>
      <div className={form_card}>
        <div className={`${form_container} ${color_state}`}>
          <h1 className={form_logo}>{state}</h1>
          <div className={toggle_form_state}>
            <p
              className={`${toggle_text} ${color_state}`}
              onClick={toggleFormStateHandler}
            >
              {state === "Sign up" ? "Have" : "Need"} an account?
            </p>
          </div>
          <form className={form}>
            {/* {state === "Sign up" && (
              <Input
                type={"text"}
                placeholder={"Name"}
                id={"name"}
                value={formState}
                onChange={inputHandler}
              />
            )} */}
            <Input
              type={"text"}
              placeholder={"Email"}
              id={"email"}
              value={formState.inputs.email.value}
              inputHandler={inputHandler}
              // onChange={inputHandler}
            />
            {/* <Input
              type={"password"}
              placeholder={"Password"}
              id={"password"}
              value={formValue}
              onChange={inputHandler}
            /> */}

            <div className={form_button_container}>
              <button className={`${form_button} ${color_state}`}>
                {state}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
