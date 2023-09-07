import { useState } from "react";
import Toast from "@/components/composables/Toastify/Toast";
import useFetch from "./useFetch";
import { useRouter } from "next/navigation";

export const useFunnel = <T extends string[]>(...initialSteps: T) => {
  const router = useRouter();
  const { isLoading, sendRequest } = useFetch();
  const [step, setStep] = useState<T[number] | undefined>(initialSteps[0]);
  const [animation, setAnimation] = useState<"slideIn" | "slideOut" | "">(
    "slideIn"
  );

  const nextStepHandler = (
    formStateValue: string,
    validationConfig: {
      [key in T[number]]?: {
        validator: Function;
        message: string;
      }[];
    }
  ) => {
    setStep((prevStep) => {
      if (!prevStep) {
        return prevStep;
      }

      const currentConfig = validationConfig[prevStep];

      if (currentConfig) {
        for (let config of currentConfig) {
          if (!config.validator(formStateValue)) {
            Toast.error(config.message);
            return prevStep;
          }
        }
      }

      const nextIndex = initialSteps.indexOf(prevStep) + 1;
      if (nextIndex < initialSteps.length) {
        const nextStep = initialSteps[nextIndex];
        setAnimation("slideOut");
        setTimeout(() => {
          setStep(nextStep);
          setAnimation("slideIn");
        }, 300);
      }
      return prevStep;
    });
  };

  const previousStepHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAnimation("slideOut");

    setTimeout(() => {
      setStep((prevStep) => {
        if (prevStep) {
          const prevIndex = initialSteps.indexOf(prevStep) - 1;
          if (prevIndex >= 0) {
            const previousStep = initialSteps[prevIndex];
            return previousStep;
          }
        }
        return prevStep;
      });
      setAnimation("slideIn");
    }, 300);
  };

  const lastStepFetchHandler = async (
    e: React.FormEvent<HTMLFormElement>,
    formStateValue: string,
    formState: { [key: string]: any },
    validationConfig: {
      Username?: {
        validator: Function;
        message: string;
        additionalValidators?: Function[];
      }[];
      Email?: {
        validator: Function;
        message: string;
        additionalValidators?: Function[];
      }[];
      Password?: {
        validator: Function;
        message: string;
        additionalValidators?: Function[];
      }[];
    }
  ) => {
    e.preventDefault();

    for (let step of initialSteps as T) {
      if (step !== initialSteps[initialSteps.length - 1]) continue;
      const currentConfig =
        validationConfig[step as keyof typeof validationConfig];

      if (currentConfig) {
        for (let config of currentConfig) {
          if (!config.validator(formStateValue)) {
            Toast.error(config.message);
            return;
          }
        }
      }
    }

    try {
      const data = await sendRequest(
        "https://api.realworld.io/api/users",
        "POST",
        {
          user: {
            username: formState.Username,
            email: formState.Email,
            password: formState.Password,
          },
        }
      );

      console.log(data);

      if (data && data.user) {
        const token = data.user.token;

        await fetch("/api/token", {
          method: "POST",
          body: JSON.stringify({ token }),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        });

        // router.refresh();
        // router.replace("/");
      } else {
        console.log("데이터가 존재하지 않아요!");
      }
    } catch (err) {
      console.log(err);
      Toast.error("회원가입에 실패했어요!");
    }
  };

  return {
    step,
    nextStepHandler,
    previousStepHandler,
    lastStepFetchHandler,
    animation,
  };
};
