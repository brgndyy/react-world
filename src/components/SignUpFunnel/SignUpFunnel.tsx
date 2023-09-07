"use client";
import { useRouter } from "next/navigation";
import { form_card } from "@/styles/form.css";
import React, { useState } from "react";
import UserNameFunnel from "./UserNameFunnel";
import UserEmailFunnel from "./UserEmailFunnel";
import UserPasswordFunnel from "./UserPasswordFunnel";
import { useForm } from "@/libs/hooks/useForm";
import useFetch from "@/libs/hooks/useFetch";
import LoadingSpinner from "../composables/LoadingSpinner.tsx/LoadingSpinner";
import { useFunnel } from "@/libs/hooks/useFunnel";
import Toast from "../composables/Toastify/Toast";

export default function SignUpFunnel() {
  const router = useRouter();
  const {
    step,
    nextStepHandler,
    previousStepHandler,
    animation,
    lastStepFetchHandler,
  } = useFunnel("Username", "Email", "Password");

  const toggleFormStateHandler = () => {
    router.push("/login");
  };

  const { isLoading } = useFetch();

  const { formState, inputHandler } = useForm({
    Username: "",
    Email: "",
    Password: "",
  });

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className={form_card}>
        {step === "Username" && (
          <UserNameFunnel
            formStateValue={formState.Username}
            step={step}
            toggleFormStateHandler={toggleFormStateHandler}
            animation={animation}
            nextStepHandler={nextStepHandler}
            onChange={inputHandler}
          />
        )}
        {step === "Email" && (
          <UserEmailFunnel
            step={step}
            formStateValue={formState.Email}
            toggleFormStateHandler={toggleFormStateHandler}
            animation={animation}
            nextStepHandler={nextStepHandler}
            previousStepHandler={previousStepHandler}
            onChange={inputHandler}
          />
        )}
        {step === "Password" && (
          <UserPasswordFunnel
            step={step}
            formState={formState}
            formStateValue={formState.Password}
            toggleFormStateHandler={toggleFormStateHandler}
            animation={animation}
            previousStepHandler={previousStepHandler}
            onChange={inputHandler}
            lastStepFetchHandler={lastStepFetchHandler}
          />
        )}
      </div>
    </>
  );
}
