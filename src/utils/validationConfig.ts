import {
  validate,
  VALIDATOR_REQUIRE,
  VALIDATOR_NO_SPACES,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "@/utils/validators";

type ValidationConfigType = {
  [key in "Username" | "Email" | "Password"]?: {
    validator: Function;
    message: string;
  }[];
};

export const validationConfig: ValidationConfigType = {
  Username: [
    {
      validator: (value: string) => validate(value, [VALIDATOR_REQUIRE()]),
      message: "이름을 입력해주세요!",
    },
    {
      validator: (value: string) => validate(value, [VALIDATOR_NO_SPACES()]),
      message: "공백이 포함되어있어요!",
    },
  ],
  Email: [
    {
      validator: (value: string) => validate(value, [VALIDATOR_REQUIRE()]),
      message: "이메일을 입력해주세요!",
    },
    {
      validator: (value: string) => validate(value, [VALIDATOR_EMAIL()]),
      message: "잘못된 이메일 형식이에요!",
    },
    {
      validator: (value: string) => validate(value, [VALIDATOR_NO_SPACES()]),
      message: "공백이 포함되어있어요!",
    },
  ],

  Password: [
    {
      validator: (value: string) => validate(value, [VALIDATOR_MINLENGTH(8)]),
      message: "비밀번호는 최소 8자 이상이어야해요!",
    },
    {
      validator: (value: string) => validate(value, [VALIDATOR_MAXLENGTH(20)]),
      message: "비밀번호는 최대 20자 이하이어야해요!",
    },
  ],
};
