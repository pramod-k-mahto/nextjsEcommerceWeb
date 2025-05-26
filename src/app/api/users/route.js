import { NextResponse } from "next/server";
import { users } from "@/app/utility/userData"; 
export async function GET(request) {
  console.log(users)
  return NextResponse.json(users,{status:200});
}
