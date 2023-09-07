import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { token } = await request.json();

  let response = new NextResponse(token);

  response.cookies.set("token", token, {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    secure: false,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
};
