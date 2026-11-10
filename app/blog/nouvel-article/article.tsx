import { createArticle, getArt } from "./apit";

export default async function ArticlesPage() {
  const articles = await getArt();

  return (
    <>
      <h1>Ajouter un nouvel article</h1>
      <form action={createArticle}>
        <div>
          <input name="titre" placeholder="Titre de l'article" required />
        </div>
        <div>
          <textarea name="cont" placeholder="Contenu de l article" required />
        </div>
        <button type="submit">Ajouter</button>
      </form>

      <h2>Articles</h2>
      <ul>
        {articles.map((a, i) => (
          <li key={i}>
            <strong>{a.title}</strong> : {a.content}
          </li>
        ))}
      </ul>
    </>
  );
}
