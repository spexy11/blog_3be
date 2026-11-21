import { createArticle, getArt } from "./apit";

export default async function ArticlesPage() {
  const articles = await getArt();

  return (
    <>
      <div className="mx-auto mt-8 max-w-md rounded-xl bg-blue-200 p-6 shadow-sm">
        <h1 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-500  text-center m-8 ">
          Ajouter un nouvel article
        </h1>

        <form
          action={createArticle}
          className="flex flex-col items-center justify-between p-4  "
        >
          <div>
            <input
              className="mx-auto mt-2 max-w-md rounded-xl p-3 shadow-2xs "
              name="titre"
              placeholder="Titre de l'article"
              required
            />
          </div>
          <div>
            <textarea
              className="mx-auto mt-2 max-w-md rounded-xl p-3 shadow-2xs"
              name="cont"
              placeholder="Contenu de l article"
              required
            />
          </div>
          <button
            className="mx-auto mt-2 max-w-md rounded-2xl p-3 border shadow-2x border-blue-400"
            type="submit"
          >
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
}
