import { Suspense } from "react";
import { getArticle, deleteArticle } from "../nouvel-article/apit";
import Article_pour_pub from "@/components/article_pub";

type Props = {
  params: Promise<{ id: string }>;
};

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<p className="mt-8 text-center">Chargement...</p>}>
      <ArticleChoisi params={params} />
    </Suspense>
  );
}

async function ArticleChoisi({ params }: Props) {
  const { id } = await params;
  const artId = parseInt(id, 10);

  if (Number.isNaN(artId)) {
    return <p className="mt-8 text-center">Article introuvable</p>;
  }

  const article = await getArticle(artId);

  if (!article) {
    return <p className="mt-8 text-center">Article introuvable</p>;
  }

  return (
    <>
      <Article_pour_pub title={article.title} content={article.content} />
      <div className="mx-auto mt-4 flex max-w-md justify-center gap-2">
        <button
          className="rounded-2xl border border-blue-400 p-3 shadow-2xl"
          type="button"
        >
          modifier
        </button>
        <form action={deleteArticle.bind(null, artId)}>
          <button
            className="rounded-2xl border border-blue-400 p-3 shadow-2xl"
            type="submit"
          >
            supprimer
          </button>
        </form>
      </div>
    </>
  );
}
