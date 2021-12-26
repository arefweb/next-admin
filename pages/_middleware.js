import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
  const { href } = req.nextUrl;

  return NextResponse.next();

}
