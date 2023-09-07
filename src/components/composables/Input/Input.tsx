import { input_container, input } from "@/styles/input.css";
import { color_state } from "@/styles/container.css";

type InputType = {
  type: string;
  placeholder: string;
  id: string;
  value: string;
  step: "Username" | "Email" | "Password";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  placeholder,
  id,
  value,
  step,
  onChange,
}: InputType) {
  return (
    <>
      <div className={input_container}>
        <label htmlFor={id} />
        <input
          className={`${input} ${color_state}`}
          autoComplete={"off"}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
