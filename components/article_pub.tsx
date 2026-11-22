import type { Article } from "@/app/blog/nouvel-article/apit";
export default function Article_pour_pub(art: Article) {
  return (
    <>
      <div className="mx-auto mt-8 max-w-md rounded-xl bg-blue-200 p-6 shadow-sm">
        <h1 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-500  text-center m-8 ">
          {art.title}
        </h1>

        <div className="mx-auto mt-2 max-w-md rounded-xl p-3 shadow-2xs">
          {art.content}
        </div>
      </div>
    </>
  );
}
