import { NextResponse, NextRequest } from "next/server";
import { getSlugValue } from "./utils/getSlugValue";
import { getUserInfoByToken } from "./utils/getUserInfoByToken";

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next();
  const fetchMode = request.headers.get("sec-fetch-mode");
  const tokenCookieValue = request.cookies.get("token")?.value || "";

  // 토큰값이 존재한다면 토큰 검증해서 헤더로 보내주기
  if (tokenCookieValue) {
    const userInfo = await getUserInfoByToken(tokenCookieValue);

    if (userInfo) {
      response.headers.set("X-Token", tokenCookieValue);
    }
  }

  // 슬러그값 가져와서 맨앞이 @ 포함되어있다면 실행시켜주는 미들웨어 (?)

  // 회원가입 페이지에서, 로그인이 이미 되어있는 상태라면 접근 제한 해주기
  if (pathname === "/register") {
    const userInfo = await getUserInfoByToken(tokenCookieValue);

    userInfo
      ? response.headers.set("X-isLoggedIn", "true")
      : response.headers.set("X-isLoggedIn", "false");
  }

  // 사용자가 @[...slug] 페이지로 접속했을때
  if (pathname.startsWith("/@")) {
    const slugUserName = pathname.slice(2);
    const userInfo = await getUserInfoByToken(tokenCookieValue);

    const { username } = userInfo;

    if (slugUserName === username) {
      response.headers.set("X-NameMatch", "true");
    }

    console.log(userInfo);
  }

  return response;
}

export const config = {
  matcher: ["/", "/@:path*", "/register"],
};
