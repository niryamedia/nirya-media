import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { to, subject, html } = await req.json();

    const data = await resend.emails.send({
      from: "NiryaMedia <sunil@niryamedia.com>",
      to,
      subject,
      html,
    });

    console.log("RESEND RESPONSE:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      { error },
      { status: 500 }
    );
  }
}