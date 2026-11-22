import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="top-0 bg-blue-700 text-white dark:bg-gray-500 dark:text-gray-100 flex just backdrop-blur border-b border-gray-200">
      <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/cv" className="hover:text-gray-400">
            CV
          </Link>
        </li>

        <li>
          <Link href="/blog/nouvel-article" className="hover:text-gray-400">
            Nouvel article
          </Link>
        </li>

        <li>
          <Link href="/blog/article-pub" className="hover:text-gray-400">
            Articles publiés
          </Link>
        </li>
      </ul>
    </nav>
  );
}
