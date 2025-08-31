// src/lib/corsMiddleware.ts
import { NextRequest, NextResponse } from "next/server";

export function withCORS(
  handler: (req: NextRequest) => Promise<NextResponse> | NextResponse
) {
  return async function (req: NextRequest) {
    const res = await handler(req);
    // Only allow all origins in development
    if (process.env.NODE_ENV === "development") {
      res.headers.set("Access-Control-Allow-Origin", "*");
    }
    res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.headers.set("Access-Control-Max-Age", "86400");
    return res;
  };
}
