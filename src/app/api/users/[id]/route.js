import { NextResponse } from "next/server";
import { users } from "@/app/utility/userData";
export async function GET(req, res) {
  const { id } = await res.params;
  console.log(id);

  let filterUser = users.find((item) => {
    return item.id == id;
  });

  console.log(filterUser);
  return NextResponse.json(filterUser, { status: 200 });
}
