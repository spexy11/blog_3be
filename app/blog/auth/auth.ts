"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { compare, hash } from "bcryptjs";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function register(form: FormData) {
  const login = String(form.get("login"));
  const password = String(form.get("password"));
  await db.insert(usersTable).values({
    login, // raccourci pour login: login
    password: await hash(password, 10),
  });
}
export async function login(form: FormData) {
  const login = String(form.get("login"));
  const password = String(form.get("password"));
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.login, login));
  const loggedIn =
    users.length > 0 ? await compare(password, users[0].password) : false;
  if (loggedIn) {
    const secret = process.env.SECRET;
    const signature = await hash(secret + login, 10);
    const cookieStore = await cookies();
    cookieStore.set("session", `${login};${signature}`);
  }
  redirect((await headers()).get("referer") ?? "/");
}
