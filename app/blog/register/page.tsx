import { register } from "../auth/auth";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Inscription
        </h1>

        <form action={register} className="space-y-4">
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email ou nom d&apos;utilisateur
            </label>
            <input
              id="login"
              name="login"
              type="text"
              required
              autoComplete="username"
              placeholder="vous@exemple.com ou pseudo"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            S&apos;inscrire
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Déjà un compte ?{" "}
          <a href="/blog/login" className="text-blue-600 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </main>
  );
}
