import { NextResponse, type NextRequest } from "next/server";

/** Preserve the requested capitalized spelling; the canonical route is lowercase. */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/Konfigurator") {
    const url = request.nextUrl.clone();
    url.pathname = "/konfigurator";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/Konfigurator", "/konfigurator"] };
