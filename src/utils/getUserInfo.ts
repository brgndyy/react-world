import { cookies } from "next/headers";
import { headers } from "next/headers";

// 페이지 컴포넌트에서 실행하는 함수
export const getUserInfo = async () => {
  const cookiesStore = cookies();
  const tokenCookieValue = cookiesStore.get("token")?.value;

  const headerLists = headers();
  const tokenValue = headerLists.get("X-Token");

  if (!tokenValue) {
    return { loggedInSuccess: false };
  } else {
    const res = await fetch("https://api.realworld.io/api/user", {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });

    if (!res.ok) {
      return { loggedInSuccess: false };
    }

    const data = await res.json();

    const userInfo = { ...data, loggedInSuccess: true };

    return userInfo;
  }
};
