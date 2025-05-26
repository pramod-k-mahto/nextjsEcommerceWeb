import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ name: "pramod", age: 20 },{status:201})
}
