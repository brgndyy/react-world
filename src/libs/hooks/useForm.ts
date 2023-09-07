import { useState } from "react";

import { useEffect } from "react";

export const useForm = <T extends Record<string, string>>(
  initialFormState: T
) => {
  const [formState, setFormState] = useState<T>(initialFormState);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return { formState, inputHandler };
};
