import getDataFromToken from "./app/helpers/getDataFromToken";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;

  if (!token) {
    console.log("Token not present");
    if (["/login", "/signup", "/blogs", "/"].includes(path)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    console.log("Token present");

    if (["/login", "/signup"].includes(path)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/update",
    "/dashboard",
    "/postblog",
    "/blogs",
    "/updateblog",
  ],
};
