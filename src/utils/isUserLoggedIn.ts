import { headers } from "next/headers";

export const isUserLoggedIn = () => {
  const headerLists = headers();
  const isLoggedInState = headerLists.get("X-isLoggedIn");

  return isLoggedInState === "true" ? true : false;
};
