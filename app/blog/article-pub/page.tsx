import { getArt } from "../nouvel-article/apit";
import Link from "next/link";
export default async function Page() {
  const articles = await getArt();
  return (
    <section className=" pl-6 ">
      <h2 className="mb-4 text-3xl font-bol mt-7">Articles</h2>
      <ul className="flex flex-col pl-8 items-baseline gap-3 pt-7 bg-blue-200 max-w-md rounded-2xl mx-auto shadow-2xl">
        {articles.map((a, i) => (
          <li key={i}>
            <Link
              href={"/blog/" + i}
              className="block rounded-lg borde p-4 text-xl   font-boldhover:bg-sl dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 mb-4"
            >
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
