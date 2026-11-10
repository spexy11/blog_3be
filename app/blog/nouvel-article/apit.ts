"use server";
import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import { cacheTag, updateTag } from "next/cache";

export type Article = {
  title: string;
  content: string;
};

// const articles: Article[] = [
//   {
//     name: "hello",
//     text: "je sais pas quoi mettre mais c est deja pas mal pour un blog ",
//   },
// ];

export async function getArt(): Promise<Article[]> {
  "use cache";
  cacheTag("art");
  const articles = await db.select().from(tasksTable);
  return articles.map(({ title, content }) => ({ title, content }));
}

export async function createArticle(form: FormData): Promise<void> {
  const name = String(form.get("titre") ?? "").trim();
  const text = String(form.get("cont") ?? "").trim();

  if (!name || !text) {
    throw new Error("Le titre et le contenu sont obligatoires");
  }

  await db.insert(tasksTable).values({ title: name, content: text });
  updateTag("art");
}
