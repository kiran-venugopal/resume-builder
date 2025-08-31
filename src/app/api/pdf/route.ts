import { withCORS } from "@/lib/corsMiddleware";
export async function OPTIONS() {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
  if (process.env.NODE_ENV === "development") {
    headers["Access-Control-Allow-Origin"] = "*";
  }
  return new NextResponse(null, {
    status: 204,
    headers,
  });
}
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  async function handler(req: NextRequest) {
    try {
      const p = performance.now();
      const { html } = await req.json();
      const browser = await puppeteer.launch({ headless: true });
      console.log("launch took:", performance.now() - p);
      const page = await browser.newPage();
      console.log("newp took:", performance.now() - p);
      await page.setContent(html);
      console.log("setc took:", performance.now() - p);
      const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
      console.log("buffer took:", performance.now() - p);
      browser.close();
      return new NextResponse(Buffer.from(pdfBuffer), {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": "attachment; filename=resume.pdf",
        },
      });
    } catch (err) {
      return NextResponse.json(
        { error: String(err) },
        {
          status: 500,
          headers: {},
        }
      );
    }
  }
  return withCORS(handler)(req);
}
